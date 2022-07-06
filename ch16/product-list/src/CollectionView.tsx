import { Box } from "@material-ui/core";
import React from "react";
import { ItemView } from "./ItemView";
import { Collection } from "./Products";

interface ICollectionViewProps {
    collections: Collection,
    handleItemClicked: (param: number) => void,
    children: React.ReactNode,
}

export class CollectionView 
    extends React.Component<ICollectionViewProps> {
    constructor(props: ICollectionViewProps) {
        super(props)
        this.handleItemClicked =
            this.handleItemClicked.bind(this);
    }

    handleItemClicked(id: number) {
        console.log(`handleItemClick : ${id}`);
        this.props.handleItemClicked(id);
    }

    render() {
        let items = this.props.collections.items.map((item) => {
            return (
                <ItemView key={item.id} {...item}
                    onItemClicked={this.handleItemClicked} />
            )
        })
        return (

            <Box display="flex" flexWrap="wrap">
                {items}
            </Box>

        )
    }
}