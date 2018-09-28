import React from "react";
import {Text,StyleSheet, View, ActivityIndicator, ListView} from "react-native";
import styleGlobal from "../style/Style";
import axios from 'axios';
import Row from './Row';

export default class List extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            city: this.props.navigation.state.params.city,
            report: null
        };

        this.fetchWeather();
    }

    fetchWeather() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&units=metric&APPID=07f40434af24892c93e2004e8bd46149`)
            .then((res) => {

                if (res.data.cod === "200") {
                    this.setState({report: res.data.list});

                } else {
                    console.log("error");
                    throw res.data.cod;
                }
            })
    }

    render() {

        if (this.state.report === null) {
            return (
                <ActivityIndicator style={styleGlobal.loader} size={'large'} color={'#ff8800'}/>
            )
        }
        else {

            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

            console.log(this.state.report);

            return (


                <ListView
                    dataSource={ds.cloneWithRows(this.state.report)}
                    renderRow={(row,j,k) =>
                        <Row
                            temp={row.main.temp}
                            timestamp={row.dt}
                            weather={row.weather[0].main}
                            index={parseInt(k)}
                        />
                    }
                />
            )
        }

    }
}

List.navigationOptions = ({navigation}) => {
    return {
        title: `Prévisions météo pour ${navigation.state.params.city}`
    }
};

