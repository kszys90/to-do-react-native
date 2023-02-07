import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React from 'react'
import { Task } from './components/Task'

export default function App() {
  const [text, setText] = React.useState('');
  const [taskList, setTasksList] = React.useState([]);

  function handleAddClick() {
    if (text !== '') {
      setTasksList((prevTasksList) => [...prevTasksList, text])
      setText('')
    }
  }
  function handleDelClick(index) {
    setTasksList(taskList.filter((task) => task !== taskList[index]))
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.navContainer}>
        <Text style={styles.title}>To-do list</Text>
        <View style={styles.container}>
          <TextInput
            placeholder="Task name"
            placeholderTextColor={'lightgrey'}
            style={styles.input}
            onChangeText={setText}
            value={text}
          />
          <Button
            title="Add"
            color={'#003147'}
            style={styles.button}
            onPress={handleAddClick}
          />
        </View>
      </View>
      <View style={styles.tasksContainer}>
        {taskList.map((task, index) => <Task key={index} item={task} remove={() => handleDelClick(index)} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 0,
  },
  navContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#0c1b24',
    width: '100%',
  },
  tasksContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#003147',
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 25,
    color: 'white'
  },
  text: {
    fontSize: 14,
    color: 'white'
  },
  input: {
    width: '70%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    borderColor: 'white',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
});
