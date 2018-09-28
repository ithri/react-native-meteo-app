import React from 'react';
import {StyleSheet, StatusBar, View, Image} from 'react-native';
import Search from './components/Search';
import About from './components/About';

import {createMaterialTopTabNavigator} from 'react-navigation'
import HomeIcon from "./icons/home-white.png";

const Tabs = createMaterialTopTabNavigator({
        Search: {
            screen: Search,
            navigationOptions: {
                tabBarIcon: () => {
                    {
                        return (
                            <Image source={HomeIcon} style={{height: 30, width: 30}}/>
                        )
                    }
                }
            }
        },
        About: {screen: About}

    },
    {

        tabBarOptions: {
            activeTintColor: "#3b090a",
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: "#a2273c"
            },
            labelStyle: {
                fontSize: 16,
                fontWeight: "bold"
            },
            indicatorStyle: {
                backgroundColor: "#3b090a",
                height: 3
            }
        }
    });


export default class App extends React.Component {
    render() {
        return (

            <View style={{flex: 1}}>

                <StatusBar hidden={true}/>
                <Tabs/>
            </View>

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
    tabbarStyle: {
        backgroundColor: "green"
    }
});
