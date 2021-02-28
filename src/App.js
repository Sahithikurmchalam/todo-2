import './App.css';
import {Button,TextField} from '@material-ui/core'
import React,{useEffect, useState} from 'react';
import Todo from './Todo';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, settodos] = useState([]);

  const [input, setinput] = useState('');
  //runs when app loads
  useEffect(() => {
    //runs once whn app loads and whn variable changes
    //if its empty it will only run once
      db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
        console.log(snapshot.docs.map(doc => doc.data()));//return array of obj so todo is one of the attribute in thr

        settodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data().task})))//this will be an array
      })
  }, []);

  const addTodo = (e)=>{
    e.preventDefault();//will prevent refreshing

    db.collection('todos').add({
      task:input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    
      setinput('');//clear the input after submitting
  }


  return (
    <div className="App">
    <h1>Todo-app</h1>

      <form >
      <TextField id="outlined-basic" label="➕Write a todo" variant="outlined" value={input} onChange={(e)=>setinput(e.target.value)} size="small"/>
      <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
      <AddCircleSharpIcon/>
       Add
    </Button>
      </form>
      <ul>
        {todos.map(todo=>(
            <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
