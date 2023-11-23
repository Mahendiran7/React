
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import Pricing from './components/Pricing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Dummy from './components/Dummy';
import Hooks from './components/Hooks';
import Forms from './components/Forms';
import StudentList from './components/StudentList';
import { Toaster } from 'react-hot-toast';
import StudentView from './components/StudentView';
import Task1 from './components/Task1';
import { Provider } from './context/Context';
import Task2 from './components/Task2';

function App() {
  return (
   
      <BrowserRouter>
      <Provider value={"Project"}>
      <Topbar/>
        <Routes>
          <Route path='/dashboard' element={  <Dashboard/>}/>
          <Route path='/price' element={  <Pricing/>}/>
          <Route path='/hooks' element={  <Hooks/>}/>
          <Route path='/form' element={<Forms/>}/>
          <Route path='/task' element={<Task1/>}/>
          <Route path='/task2' element={<Task2/>}/>
          <Route path='/student' element={<StudentList/>}/>
          <Route path='/student/:id' element={<StudentView/>}/>
          <Route path='/profile' element={<Profile/>}>
            <Route path='setting' element={<Settings/>}>
              <Route path='dummy' element={<Dummy/>}/>
            </Route>
          </Route>
        </Routes>
        </Provider>
        <Toaster/>
      </BrowserRouter>

  );
}

export default App;
