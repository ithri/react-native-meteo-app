import React from 'react';
import {Text, View, StyleSheet,  Image, Button} from 'react-native';
import style from './../style/Style';
import SearchIcon from '../icons/profil-white.png';

export default class About extends React.Component {

    constructor(props){
        super(props);

       this.onPressHandler = this.onPressHandler.bind(this);

    }

    onPressHandler (){
        this.props.navigation.navigate('Search');
    }


    render() {

        return (
            <View style={style.container}>
                <Text style={style.title}>
                    A propos de moi
                </Text>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tristique vehicula.
                    Nullam et sem posuere justo tincidunt molestie. Quisque id nibh in nulla luctus luctus. Quisque
                    molestie dictum consectetur.
                    Donec hendrerit mauris sed posuere bibendum. Donec auctor augue ac vehicula egestas.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris
                    nunc risus, volutpat nec viverra nec,
                    rhoncus dapibus ligula. Nam eget lobortis ante. Suspendisse ligula enim, tincidunt vitae interdum
                    quis, finibus ac erat. Nunc quis turpis erat.
                    Aliquam erat volutpat. Quisque tempus hendrerit ex. Nulla a odio nisl. Pellentesque gravida, odio
                    nec vulputate finibus, erat est convallis felis,
                    eu ultricies risus ipsum et lacus. Curabitur malesuada arcu ac neque interdum, pretium ullamcorper
                    ipsum posuere

                </Text>

                <Button  onPress={this.onPressHandler} color ={style.color} title={"Rechercher"}/>

            </View>
        )
    }
}

About.navigationOptions = {
    tabBarIcon: () => {
        {
            return (
                <Image source={SearchIcon} style ={{height: 30, width:30}} />
            )
        }
    }
};
