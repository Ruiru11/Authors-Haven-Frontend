import React, { Component } from 'react';
import { View, Text } from 'react-native';


class TestRedux extends Component {
    constructor(props){
        super(props);
        this.state = {isLoading:true, data:''}
    }

    componentDidMount(){
        this.setState({isLoading:false})
    }

    reap = [4,4,4,4,4]

    render(){
        if(this.reap.length>0){
            this.setState({data:this.reap})
        }
        return(
            <View>
                <Text></Text>
            </View>
        )
    }
}