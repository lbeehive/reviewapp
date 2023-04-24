import React, {useState} from "react";

//import { format } from 'date-fns';

//put {displayDate} after {props.name} to show date

  //const displayDate = format(new Date(props.date), "MM-dd-yyyy");
  //const displayDate = Date(props.date).valueOf().toString();
  //test editing...
  //() => props.editTask(props.id)
  //onChange={() => props.toggleTaskCompleted(props.id)}
  //const [editing, setEditing] = useState(false);
/*
  const handleEditing = () => {
    setEditing(true);
    let viewMode = {};
    let editMode = {};
    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    
  };
*/



function Todo(props) {
  const displayDate = Date(props.date).valueOf().toString();
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }


  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {displayDate}: {props.name} 
        </label>
        <input 
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
      <button
  type="button"
  className="btn todo-cancel"
  onClick={() => setEditing(false)}
>
  Cancel
  <span className="visually-hidden">renaming {props.name}</span>
</button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => props.deleteTask(props.id)}
          >
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
    </div>
  );

  return (
    <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
  )

/*
    return (
      <li className="todo stack-small">
      <div className="c-cb">
      <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
         
        />
        
          <label className="todo-label" htmlFor={props.id}>
         {props.name} 
          </label>
      </div>
      <div className="btn-group">
          <button type="button" className="btn btn__danger" onClick={() => props.deleteTask(props.id)}>
              Delete <span className="visually-hidden"></span>
          </button>
          <button type="button" className="btn">
            Edit <span className="visually-hidden" onClick={handleEditing}>{props.name}</span>
        </button>
      </div>
      <input
      type="text"
      value={props.name}
      className={props.id}
      
    />
    </li>
    );
*/
}


export default Todo;