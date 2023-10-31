import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem';

async function callApi(){
  let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      data = await data.json()
    return data
}

function App() {
  let [apidata,setapidata] = useState({})

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data=> {setapidata(data); console.log(data)})

  },[])
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <div className='appContainer' onClick={(e)=>console.log(e)}>
      { apidata?.length > 0 &&  apidata?.map(todo=>
       <TodoItem todo={todo} />
       )}
       </div>
    </div>
  );
}

export default App;
