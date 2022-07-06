import React from 'react';
import './App.css';
import { CollectionView } from './CollectionView';
import { MyButton } from './MyButton';
import { Collection, IProduct } from './Products';
import { DetailView } from './DetailView';
import * as _ from 'underscore';
import { ajax } from 'rxjs/ajax';
import { CircularProgress } from "@material-ui/core";
import { MicroEventBus } from 'micro-event-bus';
export let microEventBus: MicroEventBus = (window as any).microEventBus;

export interface IAppProps { };
export interface IAppState {
  showDetails: boolean;
  product: IProduct | null;
  collectionInstance: Collection;
  username: string;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.showDetailView = this.showDetailView.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
        showDetails: false,
        product: null,
        collectionInstance: new Collection(),
        username: "",
    }
  }

  componentDidMount() {
    this.processUserLoginEvent = this.processUserLoginEvent.bind(this);

    microEventBus.on('user-logged-in').subscribe(
        this.processUserLoginEvent
    );
    
    ajax.getJSON("http://127.0.0.1:3000/products")    
    //ajax.getJSON("https://gfd5mk0ob0.execute-api.us-east-1.amazonaws.com/Prod/products")
        .subscribe((data) => {
            let collection = new Collection();
            collection.items = data as IProduct[];
            this.setState({
                showDetails: false,
                product: null,
                collectionInstance: collection,
            });
        });
  }

  render() {
    return (
      <div>
        { this.state.collectionInstance.items.length < 1 ?
          <div className="App-header">
              <CircularProgress />
          </div>
          : ""}
        <CollectionView
          collections={this.state.collectionInstance}
          handleItemClicked={this.showDetailView} >
        </CollectionView>
        <DetailView open={this.state.showDetails}
                    product={this.state.product}
                    handleClose={this.handleClose}
                    username={this.state.username}>
        </DetailView>
      </div>

    )
  }
  handleClick() {
    console.log(`App.handleClick() called`);
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  showDetailView(id: number) {
    console.log(`App.handleClick() called`);
    let foundItem = _.find(
        this.state.collectionInstance.items,
        (item: IProduct) => {
            return item.id === id
        });

    if (foundItem) {
        this.setState({
            showDetails: true,
            product: foundItem
        });
    }
  }

  handleClose() {
      console.log(`App : handleClose()`);
      this.setState({
          showDetails: false,
          product: null
      })
  }

  processUserLoginEvent(event: string | undefined) {
    console.log(`RCT : App.processUserLoginEvent : ${event}`);

    if (event) {
        this.setState({ username: event });
    }
  }
}

export default App;