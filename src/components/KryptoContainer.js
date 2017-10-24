/**
 * @author lusinabrian on 24/10/17.
 * @notes:
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View, Text} from "react-native";


/**
 * KryptoContainer container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class KryptoContainer extends Component {
    constructor(props, context) {
        super(props, context);

    }

    /**
     * Render container component
     */
    render() {
        return (
            <View>
                <Text>KryptoContainer</Text>
            </View>
        );
    }
}

/**
 * Validates KryptoContainer prop types
 */
KryptoContainer.propTypes = {};

/**
 * maps the state of the redux store to the KryptoContainer props
 * @param {Object} state of redux store
 * @param {Object} ownProps KryptoContainer properties
 * @returns {Object} new state of redux store
 */
function mapStateToProps(state, ownProps) {
    return {
        krypto: state.krypto
    };
}

/**
 * maps dispatch actions to props in this container
 * component
 * @param {Object} dispatch
 * @returns {Object} actions object
 */
function mapDispatchToProps(dispatch) {
    return {
        // actions: bindActionCreators(actions, dispatch)
    };
}

/**
 * Connect KryptoContainer container to redux store and map
 * actions to the store and props of this container to
 * state of store
 */
export default connect(mapStateToProps, mapDispatchToProps)(KryptoContainer)