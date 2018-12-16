import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Paper } from '@material-ui/core';

class ProjectForm extends Component {
    render() {
        return (
            <div>
                <p>project form</p>
            </div>
        );
    }
}

export default connect()(ProjectForm);