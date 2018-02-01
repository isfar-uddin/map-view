import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.onRegionChange.bind(this)
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            markers:[]
        }
    }

    onRegionChange(region) {
        this.setState({region});
    }

    render() {
        return (
            <MapView
                style={styles.map}
                region={this.state.region}
                onRegionChange={this.onRegionChange}
            >
                {this.state.markers.map(marker => (
                    <Marker
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
        );
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
