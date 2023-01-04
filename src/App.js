import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import ListUser from './Components/ListUser';
import NavUser from './Components/NavUser';
import Profil from './Components/Profil';

function App() {
  const [users,setUsers] = useState([
    {name : "Yassine", age : "19", id : Math.random()},
    {name : "Riadh", age : "20", id : Math.random()},
    {name : "Youssef", age : "20", id : Math.random()},
    {name : "Amine", age : "26", id : Math.random()},
    {name : "Sana", age : "18", id : Math.random()}
    
  ])
  return (
    
    <div>
      <NavUser/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/userList' element={<ListUser users={users}/>}/>
        <Route path='/yassineContact' element={<Contact/>}/>
        <Route path='/profil/:djeja' element={<Profil users={users}/>}/>
      </Routes>
    </div>
  );
}

export default App;
