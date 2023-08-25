import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='basis-4/5'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
