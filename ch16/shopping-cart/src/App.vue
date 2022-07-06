<template>
   <div v-if="loading" class="loading">
      Loading...
    </div>
    <div v-if="!loading" class="loading">
      <ShoppingCart 
        :collection="cartItems" />
    </div>
</template>

<script lang="ts">
    import { Vue, Options } from 'vue-class-component';
    import { CartCollection, IProduct } from "./CartItems";
    import ShoppingCart from "./components/ShoppingCart.vue";
    import { MicroEventBus } from 'micro-event-bus';
    import { ajax } from "rxjs/ajax";
    export let microEventBus: MicroEventBus = (window as any).microEventBus;
    
    interface IItemData {
        username: string;
        productId: number;
        amount: string;
    }
    
    @Options({
        components: {
            ShoppingCart,
        },
        mounted() {
            console.log(`VUE: App:mounted()`);
            microEventBus.on('add-user-cart-item').subscribe(this.handleAddItemToCart);
            microEventBus.on('user-logged-in').subscribe(this.handleUserLoggedIn);
        }
    })
    export default class App extends Vue {
        cartItems!: CartCollection;
        username!: string;
        loading: boolean = false;
        data() {
            return {
                cartItems: new CartCollection(),
                username : null,
                loading: true
            }
        }
        handleUserLoggedIn(event: string) {
            console.log(`VUE: App.handleUserLoggedIn : ${event}`);
            this.username = event;
            this.loading = true;
            this.fetchData();
        }
    
        fetchData() {
            console.log(`calling ajax with ${this.username}`);
            ajax.getJSON(`http://127.0.0.1:3000/carts/${this.username}`).subscribe((data) => {
                console.log(`cart loaded from API`)
                let cartItems = new CartCollection();
                cartItems.items = <IProduct[]>data;
                this.cartItems = cartItems;
                this.loading = false;
            }, (error: any) => {
                console.log(`VUE: get /carts/(username) error : ${error}`);
                this.loading = false;
            }); 
        }
    
        handleAddItemToCart(data : IItemData) {
            console.log(`handleAddItemToCart : item : ${JSON.stringify(data)}`);
            console.log(`calling GET on /products/${data.productId}`);
            setTimeout(() => {
                this.loading = true;
                ajax.getJSON(`http://127.0.0.1:3000/products/${data.productId}`).subscribe((product) => {
                    let productItem = <IProduct>product;
                    productItem.amount = parseInt(data.amount);
                    this.cartItems.items.push(productItem);
                    this.loading = false;
                }, (error) => {
                    console.log(`VUE: products/${data.productId} : error ${error}`);
                }); 
    
            }, 200)
        }
    }
</script>

<style scoped>
</style>
