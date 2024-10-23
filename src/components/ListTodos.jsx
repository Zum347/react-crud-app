import { useSelector } from "react-redux";
import TodoCard from './TodoCard';


const ListTodos = () => {
   const store = useSelector((store) => store.todoReducer);
 

   return ( 
    <div>
      
     {store.todos.map((todo) => (
    <TodoCard todo={todo} key={todo.id} />
     ))}
    </div>
  );
};

export default ListTodos;
