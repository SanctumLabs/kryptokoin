/**
 * @author lusinabrian on 24/10/17.
 * @notes:
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, ScrollView} from "react-native";
import * as actions from "../../actions/koinActionCreator";
import KryptoKoin from "./KryptoKoin";
import Spinner from "react-native-loading-spinner-overlay";
import {koinContainerStyles} from "./koinContainerStyles";

const {
    contentContainer
}  = koinContainerStyles;

/**
 * KryptoContainer container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class KryptoContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            koins: []
        };

        this.renderKoins = this.renderKoins.bind(this);
    }

    /**
     * Renders Koins onto View
     * */
    renderKoins() {
        const { krypto } = this.props;
        return krypto.data.map((koin, index) => {
            return (
                <KryptoKoin
                    key={index}
                    coin_name={koin.name}
                    symbol={koin.symbol}
                    price_usd={koin.price_usd}
                    percent_change_7d={koin.percent_change_7d}
                    percent_change_24h={koin.percent_change_24h}
                />
            )
        })
    }

    /**
     * Call fetch data after we have mounted the component
     * */
    componentDidMount() {
        this.props.actions.getKoinData()
            .then(data => {
                this.setState({
                    koins: data
                })
            })
            .catch(err => {
                console.log("getKoinData Reject error",err);
            })
    }

    /**
     * Render container component
     */
    render() {
        const {krypto} = this.props;
        if(krypto.isFetching){
            return(
                <View>
                    <Spinner
                        visible={krypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{
                            color:"#253145"
                        }}
                        animation="fade"
                    />
                </View>
            )
        }
        return (
            <ScrollView contentContainerStyle={contentContainer}>
                {this.renderKoins()}
            </ScrollView>
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
        actions: bindActionCreators(actions, dispatch)
    };
}

/**
 * Connect KryptoContainer container to redux store and map
 * actions to the store and props of this container to
 * state of store
 */
export default connect(mapStateToProps, mapDispatchToProps)(KryptoContainer)