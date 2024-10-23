import { useState } from 'react'
import AddForm from './components/AddForm'
import ListTodos from './components/ListTodos';
import TodoCard from './components/TodoCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
return (
<div className='vh-100 bg-dark text-white'>
  <div className='container p-5'>  
<h2 className='text-center'>REDUX <span className='text-warning'>CRUD</span></h2>
<AddForm />
 <ListTodos />
 </div>
  </div>
  );
};

export default App;
