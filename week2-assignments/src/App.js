import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Link to="/">
        CSS Assignment 
      </Link>
      <nav>
        <Link to="/card">
          Cards
        </Link>
        <Link to="/chip">
          Chips
        </Link>
        <Link to="/drawer">
          Drawer
        </Link>
        <Link to="/header">
          Header
        </Link>
        <Link to="/badge">
          Badge
        </Link>
        <Link to="/snackbar">
          Snackbar
        </Link>
        <Link to="/dialog">
          Dialog
        </Link>
        <Link to="/tab">
          Tabs
        </Link>
        <Outlet/>
      </nav>
    </div>
  );
}

export default App;

