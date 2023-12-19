import { useState } from 'react';
import { StyleSheet, View,Button,FlatList,Image } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInputs from './components/GoalInputs';

export default function App() {
  const [modalvisible, setmodalvisible] = useState(false)
  const [gritedata, setgritedata] = useState([])
  function startaddgoals(){
    setmodalvisible(true);
  }

  function cancelmodal(){
    setmodalvisible(false);
  }
  function writedata(obtenerinfo)
  {
    if(obtenerinfo == ""){}else{setgritedata(currentgara => [... gritedata,{text:obtenerinfo,id:Math.random().toString()}]);}
    cancelmodal();
  
  }

  const alert = () =>
Alert.alert('Input vacio','Coloque informacion valida en el campo metas',
[
  {text:"cancel",
   onPress:(props.cancelarmodal),
   style:'cancel'},
   {text:'OK'}
  ])
  function itemdelete(id)
  {
   setgritedata(currentgara =>{
      return currentgara.filter((goal)=>goal.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button color={'#BD3DFF'} title='Add new Goals' alerta={alert} onPress={startaddgoals}></Button>     
     <GoalInputs visible={modalvisible} onAddGoal={writedata} cancelarmodal={cancelmodal} onCancel={cancelmodal} />
     <View style={styles.goalscontainer}>  
      <FlatList data={gritedata} renderItem={(itemData)=>{
        return <GoalItem text={itemData.item.text} id={itemData.item.id} OndeleteItem = {itemdelete}/>
      }}>
      KeyExtractor={(item,index)=>{return item.id}}     
    </FlatList>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingHorizontal:16,
    paddingTop:50,
    backgroundColor:'#4D1D66'
  },
  goalscontainer:{
    flex:5
  }
});
