import React from "react";
import { connect } from "react-redux";

import MenuItem from "../MenuItem/menuitem.component";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
