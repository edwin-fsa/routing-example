import "./App.css";
import { Outlet } from 'react-router-dom';
import { Nav } from './components';

export default function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}