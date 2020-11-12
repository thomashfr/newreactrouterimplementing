import React from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';


// import { Container } from './styles';

function Profile({ math }) {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1>Profile
    <button onClick={() => navigate('/')}>Painel</button>
      </h1>

      <Outlet />
    </>
  )
}

export default Profile;