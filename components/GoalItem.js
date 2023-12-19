import { StyleSheet,View,Text,Pressable,Image } from "react-native";

function GoalItem(props) {
  return (
    
    <View style={styles.goalsviewContainer}>
      <Pressable android_ripple={{color:'#1BA8A1'}} onPress={props.OndeleteItem.bind(this,props.id)}> 
      <View style={styles.imageView}>
      <Image style={styles.styleimage} source={require("../assets/image/goalsicon.png")}></Image>
      <Text style={styles.goalscontainerText}>{props.text}</Text>
      </View>
      </Pressable>
    </View>  
  );
}

export default GoalItem;

const styles = StyleSheet.create({ 
    goalsviewContainer:{
        borderRadius:6,
        backgroundColor:'#fff',
        margin:6,     
        
      },
      goalscontainerText:{
        color:'black',
        fontSize:16,
        padding:8,
      },
      imageView:{
        flexDirection:"row",
        flexWrap:'grap',
        backgroundColor:'none'
      },
      styleimage:{
        width:35,
        height:35,
        marginHorizontal:5
      }
 });