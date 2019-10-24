import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterTransaction from './RegisterTransaction.jsx';
import { addText } from '../../actions';

class RegisterTransactionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <RegisterTransaction
                texts={this.props.allTexts}
                addText={this.props.addText}
            />
        );
    }
}

function mapStateToProps({ texts }) {
    return {
        allTexts: texts.allTexts,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addText: text => dispatch(addText(text)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterTransactionContainer);
