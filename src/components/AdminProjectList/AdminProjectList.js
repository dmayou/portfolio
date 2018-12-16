import React from 'react';
import { connect } from 'react-redux';

function AdminProjectList(props) {
    return(<p>Hello World</p>);
}

const mapStoreToProps = (store) => {
    return ({
        store
    })
};

export default connect(mapStoreToProps)(AdminProjectList);