import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDCSelect } from '@material/select';

class SelectTag extends Component {
    componentDidMount() {
        this.initSelect();
        this.props.dispatch({ type: 'FETCH_TAGS' });
    }
    initSelect() {
        const select = new MDCSelect(document.querySelector('.mdc-select'));
        select.listen('MDCSelect:change', () => {
            this.props.setTag(select.selectedIndex);
        });
    }
    render() {
        const tagList = this.props.store.tags.map( (tag) => {
            return (
                <option
                    key={tag.id}
                    value={tag.name}
                    >{tag.name}
                </option>
            );
        })
        return (
            <div className="mdc-select">
                <i className="mdc-select__dropdown-icon"></i>
                <select className="mdc-select__native-control">
                    <option
                        value="" disabled selected={this.props.value === '0'}>
                    </option>
                    {tagList}
                </select>
                <label className="mdc-floating-label">Choose Tag</label>
                <div className="mdc-line-ripple"></div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        store
    }
};

export default connect(mapStateToProps)(SelectTag);