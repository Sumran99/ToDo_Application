import { Box, Button, Checkbox, colors, makeStyles, TextField, withStyles } from '@material-ui/core';
import { time } from 'console';
import React, { useEffect, useState } from 'react';
import './App.css';

function App(this: any) {
  const [todos, settodos] = useState([])
  const [todo, settodo] = useState("")
  const [todoEditing, settodoEditing] = useState(null)
  const [editingText, seteditingText] = useState("")


  useEffect(() => {
    const items: any = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(items)
    if(loadedTodos)
    {
      settodos(loadedTodos)
    }

  }, []);
  useEffect(() => {
    const json = JSON.stringify(todos)   
    localStorage.setItem("todos", json)
  }, [todos]);
  function handleSubmit()
  {
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    settodos([...todos].concat([newTodo] as any))
    settodo("")  
  }
  function deleteTodo(id: any)
  {
    const updatedTodos = [...todos].filter((todo: any) => todo.id !== id);
    settodos(updatedTodos);

  }
  function ToggleComplete(id: any)
  {
      const updatedTodos : any = [...todos].map((todo: any)=>{
      if(todo.id === id)
      {
        todo.completed = !todo.completed
      }
      return todo
    })
    settodos(updatedTodos);
  }
  function editTodo(id: any)
  {
    const updatedTodos: any = [...todos].map((todo:any)=>{
      if(todo.id === id)
      {
        todo.text = editingText;
      }
      return todo
    })
    settodos(updatedTodos);
    seteditingText("");
    settodoEditing(null);

  }
  
  const useStyles = makeStyles({
    root: {
    background: 'linear-gradient(#8c7ae6, #0097e6, #00a8ff)',
    border: 0,
    borderRadius: 15,
    color: 'White',
    width: "150px",
    height: "40px",
    fontSize: "18px",
    fontFamily: 'El Messiri , sans-serif',
   
  }
  },)
  const useStyles2 = makeStyles({
    root: {
    background: 'linear-gradient(315deg, #fc9842 0%, #fe5f75 74%)',
    border: 0,
    borderRadius: 11,
    color: 'White',
    width: "100px",
    height: "30px",
    fontSize: "15px",
    marginRight: "15px",
    fontFamily: 'El Messiri , sans-serif',
   
  }
  },)
  
  const useStyles3 = makeStyles({
    root: {

    background: 'linear-gradient(315deg, #734ae8 0%, #89d4cf 74%)',
    border: 0,
    borderRadius: 11,
    color: 'White',
    width: "100px",
    height: "30px",
    fontSize: "15px",
    fontFamily: 'El Messiri , sans-serif',
   
  }
  },)
  const useStyles4 = makeStyles({
    root: {

    background: 'linear-gradient(315deg, #734ae8 0%, #89d4cf 74%)',
    border: 0,
    borderRadius: 11,
    color: 'White',
    width: "100px",
    height: "30px",
    fontSize: "15px",
    fontFamily: 'El Messiri , sans-serif',
   
  }
  },)
  
const classes = useStyles();
const classes2 = useStyles2();
const classes3 = useStyles3();
const classes4 = useStyles3();
  return (
      <div className="main">
      
      <div className="header">
          <h1>To-do Application</h1>
      </div>
      <Box
        sx={{
              
              width: 350,
              maxWidth: '100%',
              marginBottom: "2%",
          }}>
      <TextField
       fullWidth
       className="todo_input"
       placeholder="Add to-do"
       variant="filled" 
       onChange={(e)=>settodo(e.target.value)}
       value= {todo}
       />
      </Box>
      <Button
        className={classes.root}
        variant="contained"
        onClick = {handleSubmit}>

      Submit</Button>


      <div className="to-do-list">

      {todos.map((todo: any)=> (
        <div key = {todo.id}>
        {todoEditing === todo.id ? (
          <Box
          sx={{
                
                width: 300,
                maxWidth: '80%',
                marginBottom: "2%",
                marginLeft: "2%",
                marginTop: "2%",
                alignItems: "center"


            }}>
          <TextField
           fullWidth
           className="edit_input"
           placeholder= "Edit to-do"
           variant="filled" 
           onChange={(e)=>seteditingText(e.target.value)}
           value= {editingText}/>
          </Box>
      ):(
        <div>{todo.text}</div>
        )}
        <Checkbox 
        onChange={()=>ToggleComplete(todo.id)}
        checked = {todo.checked} />
        <Button variant="contained"
        className={classes2.root}
        onClick = {()=>deleteTodo(todo.id)}>
        Delete</Button>
        
        {todoEditing === todo.id ? 
        (
        <Button variant="contained"
        className={classes4.root}
        onClick={()=>editTodo(todo.id)}>
          confirm
        </Button>) : (
          <Button variant="contained"
          className={classes3.root}
          onClick={()=>settodoEditing(todo.id)}>
            Edit
        </Button>
        )}        
        </div>))}      
        </div>
      </div>
      
    
  );
}

export default App;
