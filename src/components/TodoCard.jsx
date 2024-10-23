import React, { useState } from "react";
import { useDispatch } from 'react-redux';

const TodoCard = ({ todo }) => {
const dispatch = useDispatch();
const [isOpen, setIsOpen] = useState(false);

const handleDelete = () => {
  dispatch({
    type: 'REMOVE_TODO',
    payload: todo.id,
  });
};

const handleStatus = () => {

 const updated = { ...todo, is_done: !todo.is_done };
 dispatch({
  type: "UPDATE_TODO",
  payload: updated,
});
};

  return (
    <div className="border shadow shadow-lg p-4 my-5"> 
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? 'Tamamlandı' : 'Devam Ediyor'}</h6>
      <p>{todo.created_at}</p>
      <button onClick={() => setIsOpen(true)} 
      className="btn btn-primary">Düzenle</button>
      <button onClick={handleStatus} className="btn btn-success mx-3">
        {todo.is_done ? 'Geri Al' : 'Tamamla'}
      </button>
      <button onClick={handleDelete} className="btn btn-danger">Sil</button>
    
    {isOpen && <Modal todo = {todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
