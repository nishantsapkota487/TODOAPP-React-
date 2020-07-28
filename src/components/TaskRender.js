import React, { useState, useEffect } from 'react';
import  DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const TaskShow = (props) => {
  const Tasks = props.tasks.map(task => {
    return(
      <div className = 'positioning card mb-2' key = {props.tasks.indexOf(task)} style = {{borderStyle:'dashed', borderWidth:"2px", borderColor:'black', backgroundColor:'#de5b14', borderRadius:'0px'}}>
        <div className = 'card-body'>
          {task}
          <p onClick = {() => props.change(props.tasks.indexOf(task))} className = 'change'><EditIcon /></p>
          <p onClick = {() => props.delete(props.tasks.indexOf(task))} className='big'><DeleteIcon /></p>
        </div>
      </div>
    )
  })

  return(
    <React.Fragment>
      {Tasks}
    </React.Fragment>
  )
};

export default TaskShow;
