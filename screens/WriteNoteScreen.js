import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
    KeyboardAvoidingView,ToastAndroid,Image, ImageBackground,SafeAreaView,Platform,StatusBar} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config'
//import firebase from 'firebase'

export default class WriteNoteScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            title1: '',
            title2: '',
            title3: '',
            title4: '',
            title5: '',
            title6: '',
        }
    }

    submitnote = ()=>{
        db.collection("stories").add({
            title: this.state.title,
            //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
        })
        this.setState({
            title: '',
            title1: '',
            title2: '',
            title3: '',
            title4: '',
            title5: '',
            title6: '',
        })
        ToastAndroid.show('Your note has been sumitted'
        , ToastAndroid.SHORT)
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container}
             behavior="padding" enabled>
             <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../note-taking.png')} style={styles.backgroundImage}>
               <Header 
                    backgroundColor = {'0CFF00'}
                     centerComponent = {{
                        text : 'Note Taker',
                        style : { color: 'yellow', fontSize: 40, fontWeight:'bold'},
                    }}
                />
                <TextInput 
                    placeholder="Add A Note..."
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.title}
                    style={styles.title}/>
                <TextInput 
                    placeholder="Add A Note..."
                    onChangeText= {(text)=>{
                        this.setState({
                            title1: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.title1}
                    style={styles.title1}/>
                    <TextInput 
                    placeholder="Add A Note..."
                    onChangeText= {(text)=>{
                        this.setState({
                            title2: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.title2}
                    style={styles.title2}/>
                    <TextInput 
                    placeholder="Add A Note..."
                    onChangeText= {(text)=>{
                        this.setState({
                            title3: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.title3}
                    style={styles.title3}/>
                    <TextInput 
                    placeholder="Add A Note..."
                    onChangeText= {(text)=>{
                        this.setState({
                            title4: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.title4}
                    style={styles.title4}/>
                    <TextInput 
                    placeholder="Add A Note..."
                    onChangeText= {(text)=>{
                        this.setState({
                            title5: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.title5}
                    style={styles.title5}/>
                    <TextInput 
                    placeholder="Add A Note..."
                    onChangeText= {(text)=>{
                        this.setState({
                            title6: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.title6}
                    style={styles.title6}/>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitnote}
                    >
                    <Text style={styles.buttonText}>Save The Note</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    },
  droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 20,
      margin: 10,
      color:'black',
      backgroundColor:'violet',
      padding: 6,
  },
  title1:{
      height: 40,
      borderWidth: 2,
      marginTop: 20,
      margin: 10,
      color:'black',
      backgroundColor:'violet',
      padding: 6,
  },
  title2:{
      height: 40,
      borderWidth: 2,
      marginTop: 20,
      margin: 10,
      color:'black',
      backgroundColor:'violet',
      padding: 6,
  },
  title3:{
      height: 40,
      borderWidth: 2,
      marginTop: 20,
      margin: 10,
      color:'black',
      backgroundColor:'violet',
      padding: 6,
  },
  title4:{
      height: 40,
      borderWidth: 2,
      marginTop: 20,
      margin: 10,
      color:'black',
      backgroundColor:'violet',
      padding: 6,
  },
  title5:{
      height: 40,
      borderWidth: 2,
      marginTop: 20,
      margin: 10,
      color:'black',
      backgroundColor:'violet',
      padding: 6,
  },
  title6:{
      height: 40,
      borderWidth: 2,
      marginTop: 20,
      margin: 10,
      color:'black',
      backgroundColor:'violet',
      padding: 6,
  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 5,
       padding: 6,
  },
  noteText: {
      height: 250,
      borderWidth: 2,
      margin: 10,
      padding: 6,
      textAlignVertical: "top"
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'lime',
      width: 100,
      height: 50,color:'black',
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      color:'black',
  },
});