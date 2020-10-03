import React, { Component } from "react";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { ShopData } from "./shop.data";

export class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: ShopData,
		};
	}
	render() {
		return (
			<div>
				{this.state.collections.map(({id, ...otherCollectionItems}) => {
					return <CollectionPreview {...otherCollectionItems} key={id} />;
				})}
			</div>
		);
	}
}

export default Shop;
