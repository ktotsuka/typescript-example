import React from 'react';
import './App.css';
import { CollectionView } from './CollectionView';
import { Collection, IProduct } from './Products';
import { DetailView } from './DetailView';

export interface IAppProps { };
export interface IAppState {
  showDetails: boolean;
  product: IProduct | null;
}

const collectionInstance = new Collection();

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.showDetailView = this.showDetailView.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
        showDetails: false,
        product: null
    }
  }

  render() {
    return (
      <div>
        <CollectionView
          {...collectionInstance}
          handleItemClicked={this.showDetailView} >
        </CollectionView>
        <DetailView open={this.state.showDetails}
                    product={this.state.product}
                    handleClose={this.handleClose}>
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
        collectionInstance.items,
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
}

export default App;