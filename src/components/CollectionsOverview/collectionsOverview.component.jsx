import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../CollectionPreview/collectionpreview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collectionsOverview.styles.scss";

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherProps }) => {
            return <CollectionPreview key={id} {...otherProps} />;
        })}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
