/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import Form from './component/Form';
import FilteringSection from './component/FilteringSection';
import AddedItems from './component/AddedItems';
import { FaGithub } from 'react-icons/fa6';

function App() {


  const [todos, setTodos] = useState([]);

  // adding new todo item 
  const addItem = (text) => {
    const newList = {
      id: Date.now(),
      title: text,
      complete: false,
    }
    setTodos([newList, ...todos])
  }
  // Removing a todo item
  const removeTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !== id)
    setTodos(newList)
  }
  // toggling between active and inactive
  // function 
  const handleToggle = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id){
          return {
            ...todo,
            complete: !todo.complete
          }
        }   
          return todo
        
      })
    )
  }
  // Handling filter state
  const [filter, setFilter] = useState("all")
  //updating the value of the useState
  const setFilterValue = (value) => setFilter(value);
  const keepFiltering = () => {
    if (filter === "all") {
      return todos.map(todo => (
        <AddedItems key={todo.id} title={todo} toggle={handleToggle} deleteTodo={removeTodo} darkMode={darkMode} />
      ));
    } else if (filter === "active") {
      return todos.filter(todo => !todo.complete).map(todo => (
        <AddedItems key={todo.id} title={todo} toggle={handleToggle} deleteTodo={removeTodo} darkMode={darkMode} />
      ));
    } else if (filter === "complete") {
      return todos.filter(todo => todo.complete).map(todo => (
        <AddedItems key={todo.id} title={todo} toggle={handleToggle} deleteTodo={removeTodo} darkMode={darkMode} />
      ));
    }
    return null; 
  };


  //completed items
  const completedItems = () => {
    const clearCompletedItems = todos.filter(
      todo => !todo.complete
    )
    setTodos(clearCompletedItems)
  }

  // counting all todos 
 
  const getCount = () => {
    if (filter === "all") {
      return todos.length
    } else if (filter === "active"){
      return todos.filter(
        todo => !todo.complete
      ).length
    } else if (filter === "complete"){
      return todos.filter(
        todo => todo.complete
      ).length
    }
    return 0
  }

// darkMode settings
const [darkMode, setDarkMode] = useState(false);

const handleDarkMode = () => {
  setDarkMode(!darkMode);
}
// function when click it visit a website
const handleGithub = () => {
  window.location.href = "https://github.com/Mbuguacodes254";
}


  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-[#9947D7] via-[#8B83F8] to-[#76A2F9]' : 'bg-[#F2F2F2]'} " min-h-screen pb-20"`} >
      <div className='bg-bg-desktop bg-cover bg-no-repeat h-52 w-full m-auto'>

          <Header HandleDarkMode={handleDarkMode} darkMode={darkMode} /> 
          
          <Form
            addtheItem={addItem}
            darkMode={darkMode} 
          />
        
          {/* Filtering section */}
      
          <FilteringSection 
          filterOut={setFilterValue}
          darkMode={darkMode}
          />
    
            {keepFiltering() }
    
      
          <div className={`${darkMode ? 'bg-[#0e033d] text-white' : 'bg-white'} flex justify-between m-auto lg:mx-auto md:w-[50%] lg:w-[50%] rounded py-5 px-4 shadow-xl max-sm:mx-[5%]`}>
          <h2 className="text-[18px]">{ getCount() }</h2>
          <button onClick={completedItems}>Clear Completed</button>
          </div>

          
          <footer>
            <div className={`${darkMode ? 'text-white' : 'text-[#0e033d]'} flex  m-auto lg:mx-auto md:w-[50%] lg:w-[50%] rounded m max-sm:mx-[5%] my-[20px] justify-between `}>
              <div>
                <h1 className=' text-[12px]'>&copy; Wairimu Mbugua | 2024 </h1>
              </div>
              <div className='flex justify-center items-center text-[12px] gap-1'>
                <FaGithub className='lg:mx-auto md:w-[50%] lg:w-[50%] rounded m max-sm:mx-[5%] max-sm:text-[20px]'/> 
                <span onClick={handleGithub} className=' cursor-pointer '>Mbuguacodes254</span>
              </div>
            </div>
          </footer>
        </div>
    </div>
  );
}

export default App;
