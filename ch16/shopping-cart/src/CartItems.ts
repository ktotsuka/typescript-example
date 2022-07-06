export interface IProduct {
    id: number;
    name: string;
    type: string;
    image: string;
    longDescription?: string;
    amount?: number;
    specs: ISpecs;

}
export interface ISpecs {
    actuationForce?: string;
    actuationPoint?: string;
    bottomOut?: string;
    bottomOutTravel?: string;
    price: string;
}

export class CartCollection {
    items: IProduct[] = [];
    constructor() {

    }
}