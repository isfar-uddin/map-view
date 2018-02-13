import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps'

export default class App extends React.Component {

    renderApp(){
        const initialState=window._INITIAL_STATE
        const store=createStore(initialState)
        return{

        }
    }
    render(){
        return(
            this.renderApp()
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 10,
        bottom: 0
    }

});
