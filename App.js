import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View, 
  ScrollView,  //? Default view no scrollea. Problem tho! ScrollView pre-renderea todos los elementos, even out of view ones. so es mem consuming.
  FlatList //? Flatlist arregla esto, pero necesita un array y una function para renderar los items (el .map es gratarola)...
  //? .. te trae item con item property, index and separators que permite renderear separators.
  //? Also flatlist autokeyea los items.. as long as tengan una estructura de key/value pair
  //! you coula also have a key extractor though
} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  //oddly, all views use flexbox by default. And it's default mode is column.

  const [enteredGoal, setEnteredGoal] = useState("")
  const [courseGoals, setCourseGoals] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  

  const handleGoal = (text) => {
    setEnteredGoal(text) //? sadly good old anonymous funct no parece funcar.
  }

  const removeGoal = index => {

      setCourseGoals(courseGoals.filter((goal, indx) => {
        if (index !== indx) {return goal}
      }
        ))

  }

  return (
    <View style={styles.screen}>

  
      <Button title={"Add new Goal!"} onPress={() => {setModalOpen(true)}}  />
    
      <GoalInput handleGoal={handleGoal} enteredGoal={enteredGoal} setEnteredGoal={setEnteredGoal}
      courseGoals={courseGoals} setCourseGoals={setCourseGoals} modalOpen={modalOpen} setModalOpen={setModalOpen} />

        
      {/* <ScrollView> 
        {courseGoals.map((goal, index) => {
          return <View style={styles.listItem} key={`${goal}-${index}`}> 
          <Text > {goal} </Text>
          </View>
        })}
      </ScrollView> */}

      <FlatList data={courseGoals} renderItem={({item, index}) => {
        return <GoalItem item={item} index={index} onDelete={removeGoal} /> 
      }}
      />
   
    </View>
  );
}

//? The stylesheet as a class (as opposed to just creating a random js object, which ofc would also work) adds some validation to css code.
const styles = StyleSheet.create({  
    screen: {
      padding: 50 
    }  

});
