import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './components/Card/Cards';
import Card1 from './components/Card/Card1';
import Card2 from './components/Card/Card2';
import Card3 from './components/Card/Card3';
import Card4 from './components/Card/Card4';
import Card5 from './components/Card/Card5';
import Card6 from './components/Card/Card6';
import Chip from './components/Chip/Chip';
import Drawer from './components/Drawer/Drawer';
import Drawer1 from './components/Drawer/Drawer1';
import Drawer2 from './components/Drawer/Drawer2';
import Badge from './components/Badge/Badge';
import Header from './components/Header/Header';
import Header1 from './components/Header/Header1';
import Header2 from './components/Header/Header2';
import Header3 from './components/Header/Header3';
import Snackbars from './components/Snackbar/Snackbar';
import Snackbar1 from './components/Snackbar/Snackbar1';
import Snackbar2 from './components/Snackbar/Snackbar2';
import Snackbar3 from './components/Snackbar/Snackbar3';
import Dialog from './components/Dialog/Dialog';
import Dialog1 from './components/Dialog/Dialog1';
import Dialog2 from './components/Dialog/Dialog2';
import Tab from './components/Tab/Tab';
import Tab1 from './components/Tab/Tab1';
import Tab2 from './components/Tab/Tab2';
import Tab3 from './components/Tab/Tab3';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="card" element={<Card/>}>
          <Route path="card1" element={<Card1/>}/>
          <Route path="card2" element={<Card2/>}/>
          <Route path="card3" element={<Card3/>}/>
          <Route path="card4" element={<Card4/>}/>
          <Route path="card5" element={<Card5/>}/>
          <Route path="card6" element={<Card6/>}/>
          <Route path="card6" element={<Card6/>}/>
        </Route>
        <Route path="chip" element={<Chip/>}/>
        <Route path="drawer" element={<Drawer/>}>
          <Route path="drawer1" element={<Drawer1/>}/>
          <Route path="drawer2" element={<Drawer2/>}/>
        </Route>
        <Route path="badge" element={<Badge/>}/>
        <Route path="header" element={<Header/>}>
          <Route path="header1" element={<Header1/>}/>
          <Route path="header2" element={<Header2/>}/>
          <Route path="header3" element={<Header3/>}/>
        </Route>
        <Route path="snackbar" element={<Snackbars />}>
          <Route path="snackbar1" element={<Snackbar1 />}/>
          <Route path="snackbar2" element={<Snackbar2 />}/>
          <Route path="snackbar3" element={<Snackbar3 />}/>
        </Route>
        <Route path="dialog" element={<Dialog />}>
          <Route path="dialog1" element={<Dialog1 />}/>
          <Route path="dialog2" element={<Dialog2 />}/>
        </Route>
        <Route path="tab" element={<Tab/>}>
          <Route path="tab1" element={<Tab1/>}/>
          <Route path="tab2" element={<Tab2/>}/>
          <Route path="tab3" element={<Tab3/>}/>
        </Route>
      </Route>      
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
