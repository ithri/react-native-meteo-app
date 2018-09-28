import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import PropTypes from "prop-types"
import moment from 'moment';
import 'moment/locale/fr';
import styleGlobal from "./../style/Style";

import rainy from '../icons/rainy.png';
import cloudy from '../icons/cloudy.png';
import clear from '../icons/clear.png';
import snowy from '../icons/snowy.png';
import weatherIcon from '../icons/weather-icon.png';


moment.locale('fr');

export default class Row extends React.Component {

    constructor(props) {
        super(props);

    }

    icon() {
        const weather = this.props.weather.toLowerCase();
        switch (weather) {
            case 'clouds' :
                return cloudy;
            case 'rain' :
                return rainy;
            case 'clear' :
                return clear;
            case 'snow' :
                return snowy;
            default :
                return weatherIcon
        }

    }

    render() {

        const date = moment(this.props.timestamp * 1000).format('ddd DD/MM HH:mm');
        const size = 50;
        let customStyle;
        let tempTextStyle;
        let dateTextStyle;
        if(this.props.index === 0){
            customStyle = [styleGlobal.flex, styleGlobal.firstView];
            tempTextStyle = {color:"#000", fontSize: 22};
            dateTextStyle = {color:"#000", fontWeight: 'bold', fontSize: 18};
        }else{
            customStyle = [styleGlobal.flex, styleGlobal.view];
            tempTextStyle = {color:"#FFF", fontSize: 18};
            dateTextStyle = {color:"#FFF",fontWeight: 'bold', fontSize: 14};
        }

        return (
            <View style={customStyle}>

                <View style={styleGlobal.flex}>
                    <Image source={this.icon()} style={{width: size, height: size}}/>
                    <Text style={dateTextStyle} >
                        {date}
                    </Text>
                </View>

                <Text style={tempTextStyle}>
                    {Math.round(this.props.temp)} °C
                </Text>
            </View>
        )
    }
}

Row.propTypes = {
    temp: PropTypes.number,
    timestamp: PropTypes.number,
    weather: PropTypes.string,
    index : PropTypes.number
};
