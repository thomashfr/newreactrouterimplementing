import React from 'react';
import {
  Routes, Route
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default function MainRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Dashboard></Dashboard>} />
      <Route path="/profile" element={<Profile></Profile>} >
        <Route path="/purchases" element={<h1>Compras</h1>}></Route>
        <Route path="/passowrd" element={<h1>Alterar Senha</h1>}></Route>
      </Route>



      <Route path="*" element={<h1>Not Found</h1> } />
    </Routes>
  );
}