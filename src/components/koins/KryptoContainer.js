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
} = koinContainerStyles;

/**
 * KryptoContainer container component
 * export keyword here is used to import this module as a named import
 * useful when running tests
 */
export class KryptoContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            koins: [],
            isFetching: false
        };

        this.renderKoins = this.renderKoins.bind(this);
    }

    /**
     * Renders Koins onto View
     * */
    renderKoins() {
        const {krypto} = this.props;
        return krypto.cryptoCurrencies.map((koin, index) => {
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
     * Displays progress bar if there is an ongoing ajax request
     * @param {Boolean} isFetching boolean value whether to display progress bar
     * */
    displayProgressBar(isFetching){
        if (isFetching) {
            return (
                <View>
                    <Spinner
                        visible={isFetching}
                        textContent={"Loading..."}
                        textStyle={{
                            color: "#253145"
                        }}
                        animation="fade"
                    />
                </View>
            )
        }

    }

    /**
     * Component will receive Props
     * @param {Object} nextProps props we shall receive
     * */
    componentWillReceiveProps(nextProps) {
        const {isFetching} = nextProps.ajax;
        this.setState(prevState => {
            return Object.assign({}, prevState, {
                isFetching: isFetching
            });
        })
    }

    /**
     * Before the component mounts we display a progress bar
     * */
    componentWillMount() {
        if(this.state.isFetching){

        }
    }

    /**
     * Call fetch data after we have mounted the component
     * */
    componentDidMount() {
        this.props.actions.getKoinData()
            .then((response) => {
                this.setState({
                    koins: response
                })
            })
            .catch(err => {
                console.log("getKoinData Reject error", err);
            })
    }

    /**
     * Render container component
     */
    render() {
        const {isFetching} = this.state;
        if (isFetching) {
            return (
                this.displayProgressBar(isFetching)
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
        krypto: state.krypto,
        ajax: state.ajax
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