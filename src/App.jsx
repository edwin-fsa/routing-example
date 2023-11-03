import "./App.css";
import { Outlet } from 'react-router-dom';
import { Nav } from './components';

export default function App() {
  return (
    <div>
      {/* Persistent navigation. This will show up on every page that is a child of App */}
      <Nav />
      {/* This Outlet is needed for any children to render */}
      <Outlet />
    </div>
  );
}