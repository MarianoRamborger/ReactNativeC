import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View, 
  ScrollView,  //? Default view no scrollea. Problem tho! ScrollView pre-renderea todos los elementos, even out of view ones. so es mem consuming.
  FlatList //? Flatlist arregla esto, pero necesita un array y una function para renderar los items (el .map es gratarola)...
  //? .. te trae item con item property, index and separators que permite renderear separators.
  //? Also flatlist autokeyea los items.. as long as tengan una estructura de key/value pair
  //! you coula also have a key extractor though
} from 'react-native';

export default function App() {
  //oddly, all views use flexbox by default. And it's default mode is column.

  const [enteredGoal, setEnteredGoal] = useState("")
  const [courseGoals, setCourseGoals] = useState([])
  

  const handleGoal = (text) => {
    setEnteredGoal(text) //? sadly good old anonymous funct no parece funcar.
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder={"Add Goal!"}
        style={styles.input} 
        onChangeText={handleGoal}
        value={enteredGoal}
          />
        <Button
        onPress={()=>{
          setCourseGoals([...courseGoals, {key: courseGoals.length + 1 , value: enteredGoal}]) //? key/value pair needed for flatlist
          setEnteredGoal('')
        }} 
        title="ADD"/> 

      </View>
      


      {/* <ScrollView> 
        {courseGoals.map((goal, index) => {
          return <View style={styles.listItem} key={`${goal}-${index}`}> 
          <Text > {goal} </Text>
          </View>
        })}
      </ScrollView> */}

      <FlatList data={courseGoals} renderItem={(item, index) => {
        return<View style={styles.listItem} > 
        <Text > {item.item.value} </Text> 
        </View>
      }}
      />
   
    </View>
  );
}

//? The stylesheet as a class (as opposed to just creating a random js object, which ofc would also work) adds some validation to css code.
const styles = StyleSheet.create({  
    screen: {
      padding: 50 
    },
    input : {
      borderBottomColor: 'black', borderBottomWidth: 1, margin: 10, width: '80%'
    },
    inputContainer : {
      flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    listItem: { //! we styling the view cause it has more options that the Text
      padding: 10,
      backgroundColor: '#ccc',
      marginVertical: 10, //! ea react-native native style
      borderColor: 'black',
      borderWidth: 1
    }

});
