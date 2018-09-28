import React from 'react';
import {TextInput, Text, StyleSheet, View, Image, Button} from 'react-native';
import HomeIcon from "../icons/home-white.png";
import SearchIcon from "../icons/search-white.png";
import {createStackNavigator} from 'react-navigation'
import style from '../style/Style';
import List from './List';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            city: ''
        };

        this.onPressHandler = this.onPressHandler.bind(this);
    }

    onPressHandler() {
        this.props.navigation.navigate('Result', {city : this.state.city});
    }

    render() {
        return (

            <View style={style.container}>
                <TextInput
                    underlineColorAndroid={'transparent'}
                    style={style.textInput}
                    onChangeText={(city) => this.setState({city})}
                    onSubmitEditing={() => this.onPressHandler()}
                    value={this.state.city}>


                </TextInput>

                <Button onPress={() => this.onPressHandler()} color={style.color} title={"Rechercher"}/>

            </View>
        )
    }
}

Search.navigationOptions = {
    title: "Rechercher une ville"
};


export default createStackNavigator({
    Search: {
        screen: Search
    },
    Result: {
        screen: List
    }
})
