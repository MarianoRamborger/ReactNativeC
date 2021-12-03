import React from 'react'
import {View, Button, StyleSheet, TextInput, Modal} from 'react-native'


const GoalInput = ({setEnteredGoal,setCourseGoals,enteredGoal,courseGoals,handleGoal, modalOpen, setModalOpen}) => {

    return <Modal visible={modalOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput placeholder={"Add Goal!"}
        style={styles.input} 
        onChangeText={handleGoal}
        value={enteredGoal}
          />

        <View style={styles.buttonsFlex} > 

            <View style={styles.btn}> 
                <Button title={"Cancel"} color="red" onPress={() => {setModalOpen(false)}}  />   
            </View>
            <View style={styles.btn}> 
                <Button  
                onPress={()=>{
                setCourseGoals([...courseGoals, {key: courseGoals.length + 1 , value: enteredGoal}]) //? key/value pair needed for flatlist
                setEnteredGoal('')
                setModalOpen(false)

                }} 
                title="ADD"/> 
            </View>
        
        </View>
     

      </View>
      </Modal>

}

const styles = StyleSheet.create({
    input : {
        borderBottomColor: 'black', borderBottomWidth: 1, margin: 10, width: '80%', marginBottom: 20
      },
      inputContainer : {
        justifyContent: 'center', alignItems: 'center', flex: 1
      },
      buttonsFlex : {
          flexDirection: "row",
          justifyContent: 'space-between',
          width: '50%'
      },
      btn: {
        width: 75
      }


})


export default GoalInput
