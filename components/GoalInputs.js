import { StyleSheet,View,TextInput,Button,Modal,Alert,Image } from "react-native";
import { useState } from "react";

function GoalItem(props)
{
const [obtenerinfo, setoptenerInfo] = useState('')

function getparameterInput(datainput)
{
  setoptenerInfo(datainput);
}

function writedata()
{
  if(obtenerinfo==""){alert()}
  props.onAddGoal(obtenerinfo);
    setoptenerInfo('');
}
const alert = () =>
Alert.alert('Input vacio','Coloque informacion valida en el campo metas',
[
  {text:"cancel",
   onPress:(props.cancelarmodal),
   style:'cancel'},
   {text:'OK'}
  ])

return(
  <Modal visible = {props.visible} animationType="slide">
    <View style={styles.InputContainer}>
    <Image style={styles.styleimage} source={require("../assets/image/goalsicon.png")}></Image>
      <TextInput style={styles.styleText} placeholder='Your course Goal' onChangeText={getparameterInput} value={obtenerinfo}/>
      <View style={styles.buttonContaine}>
        <View style={styles.button}><Button color={'#000092'} title='Add goal' onPress={writedata}/></View>
        <View style={styles.button}><Button color={'#FF0C64'} title="Cancel" onPress={props.onCancel}></Button></View>
      </View>
    </View>
    </Modal> 
);
}

export default GoalItem;

const styles = StyleSheet.create({
    InputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        paddingBottom:24,
        borderBottomColor:'#cccccc',
        borderBottomWidth:1,
        backgroundColor:'#4D1D66',
        borderRadius:20
      },
      styleText:{
        borderColor:'#cccccc',
        borderWidth:1,
        width:'100%',
        padding:8,
        color:'black',
        backgroundColor:'#FFFFFF'
      },
      buttonContaine:{
        flexDirection:'row',
        marginTop: 16
      },
      button:{
        width:100,
        marginHorizontal: 8
      },
      styleimage:{
        padding:10,
        width:100,
        height:100,
        marginHorizontal:5
      }
});