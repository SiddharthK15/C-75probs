import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView } from 'react-native';

import db from '../config'

export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            emailID:'',
            password:''
        }
    }
    render(){
        return(
            <KeyboardAvoidingView style = {{alignItems:'center', marginTop:25}}>
                <View>
                    <Image source = {require('../assets/booklogo.jpg')} style = {{width:200,height:200}}/>
                    <Text style = {{textAlign:'center',fontSize:20}}>Online Library</Text>
                </View>
                <View>
                    <TextInput style = {styles.loginbox}
                    placeholder = 'abc@example.com'
                    keyboardType = 'email-address'
                    onChangeText = {(text)=>{
                        this.setState({
                            emailID:text
                        })

                    }}
                    
                    />
                    <TextInput style = {styles.loginbox}
                    placeholder = 'Enter Password'
                   secureTextEntry = {true}
                    onChangeText = {(text)=>{
                        this.setState({
                            password:text
                        })

                    }}
                    
                    />
                    
                </View>

                <View>
                    <TouchableOpacity style = {{height:50,width:100,borderWidth:10,marginTop:30,borderRadius:10}}>
                        <Text style = {{textAlign:'center', fontSize:20}}>Login</Text>
                    </TouchableOpacity>
                </View>
                <Text>Login to your Account!</Text>
                </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    loginbox:{
        width:325,
        height:50,
        borderWidth:7,
        fontSize:17,
        marginTop:30
    }
})