import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { connect } from 'react-redux';

export class Preload extends Component {


    render() {
        return (
            <View>
                <Text>Carregando...</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    
    }
}

const PreloadConnect = connect(mapStateToProps, {})(Preload);

export default PreloadConnect;