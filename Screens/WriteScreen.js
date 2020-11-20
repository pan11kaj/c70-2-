import React from 'react';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native';

export default class WriteScreen extends React.Component{
    constructor(){
        super();
        this.state={
            storyTitle :'',writting:'',author:''
        }
    }
 render(){
     return(
         <View>
         <TextInput
         style={style.inputs}
         placeholder="Story Title"
         onChangeText={text=>{this.setState({storyTitle:text})}}
         value={this.state.storyTitle}
         />
    <TextInput
         style={style.inputs}
         placeholder="Author"
         onChangeText={text=>{this.setState({author:text})}}
         value={this.state.author}
         />
             <TextInput
         style={style.input2}
         placeholder="Write your stroy"
         onChangeText={text=>{this.setState({writting:text})}}
         value={this.state.writting}
         />
         <TouchableOpacity style={{backgroundColor:'red',width:80,justifyContent:'center',marginLeft:20}}><Text style={{color:'white',textAlign:'center'}}>Submit</Text></TouchableOpacity>
         </View>
     )
 }   
}
const style = StyleSheet.create({
  inputs:{
 justifyContent:'center',
width:140,
borderWidth:2,borderColor:'blue',marginLeft
:20
  },
  input2:{
    justifyContent:'center',
    width:400,
    height:200,
    borderWidth:2,marginLeft:20
  }  
})