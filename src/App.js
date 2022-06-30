
import './App.css';
import Footer from './HomePage/Footer';
import Navbar from './HomePage/Navbar';
import { Routes,Route } from "react-router-dom";
import Home from './HomePage/Home';
import TodoList from './HomePage/TodoList';
import CompletedList from './HomePage/CompletedList';
import Calender from './HomePage/Calender';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/todo" element={<TodoList></TodoList>}></Route>
        <Route path="/completedtask" element={<CompletedList></CompletedList>}></Route>
        <Route path="/calender" element={<Calender></Calender>}></Route>
        
        



      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
