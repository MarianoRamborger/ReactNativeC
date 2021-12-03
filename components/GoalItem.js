import React from 'react';
import {View, Text, StyleSheet,
    Touchable, // wrapper that manages touch events with some degree of sophistication IE LongPress
    //?Touchable no es a single component per se, but a family
    TouchableOpacity //? this for example es un touchable que baja la opacity on the push
} from 'react-native';

const GoalItem = (props) => {
    const {item, index, onDelete} = props

    return <TouchableOpacity activeOpacity={0.40} onLongPress={()=>{ console.log(index); onDelete(index)}}> 
        <View style={styles.listItem} id={`${item.value}-${index}`} > 
            <Text > {item.value} </Text> 
        </View>
    </TouchableOpacity>

}

const styles = StyleSheet.create({
    listItem: { //! we styling the view cause it has more options that the Text
        padding: 10,
        backgroundColor: '#ccc',
        marginVertical: 10, //! ea react-native native style
        borderColor: 'black',
        borderWidth: 1
      }
})

export default GoalItem

