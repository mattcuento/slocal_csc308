import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class ExampleClassComp extends Component {
    constructor(props) {
        super(props);
    }

    //initial state content on load
    state = {
        text: 'whaddup',
        ex: 'lol',
        y: 'teehee'
    };

    componentWillMount() {
        //fetching data and storing to variable
        const newStateContentY = fetch('/list')
         .then(response => response.json());
        

        this.setState({
            //maintaining old state content which is declared above
            text: this.state.text,
            ex: this.state.ex,
            //assigning the fetch data to state variable y below
            y: newStateContentY
        });
    }

    render() {
        return (
             <View>
                 //text showing each state variable
                 <Text>
                     {this.state.text}
                 </Text>
                 <Text>
                     {this.state.ex}
                 </Text>
                 <Text>
                     {this.state.y}
                 </Text>
             </View>
        );
    }
}

export default ExampleClassComp;