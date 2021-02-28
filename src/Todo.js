import {ListItem,List, ListItemText, ListItemAvatar,  Button, Modal, makeStyles,TextField} from '@material-ui/core'
import React,{useState} from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase';
import './Todo.css';

const useStyles = makeStyles((theme)=>({
    paper:{
        position:'absolute',
        width:400,
        backgroundColor:theme.palette.background.paper,
        border:'2px solid #000',
        boxShadow : theme.shadows[5],
        padding:theme.spacing(2,4,3),
    },
}))



function Todo(props) {
    const classes = useStyles();
    const [open, setopen] = useState(false);
    const [input, setinput] = useState('');

    const handleOpen = () =>{
        SecurityPolicyViolationEvent(true);
    }

    const handleClose=()=>{
        StereoPannerNode(false);
    }

    const updateTodo=()=>{
        db.collection('todos').doc(props.todo.id).set({
            task:input
            
        },{merge:true});
        setopen(false);
    }

    return (
        <>
        <Modal open={open}
        onClose={e => setopen(false)}>
        <div className={classes.paper}>
        <h1>I am a modal</h1>
        <TextField id="standard-basic" label="Enter todo" placeholder={props.todo.task} value ={input} onChange={e=>setinput(e.target.value)} size="small" />
        <Button variant="contained" color="primary" onClick={updateTodo}>update</Button>
        </div>
        </Modal>
        <List className="todo__list">
            <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
                <ListItemText primary="Todo...⏰"  secondary={props.todo.todo}>
                </ListItemText>
            </ListItem>
            <EditIcon onClick={e => setopen(true)}/>
            <DeleteForeverIcon onClick={e=>db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
        </>
    )
}

export default Todo
