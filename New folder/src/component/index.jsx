import React from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from './Layout/layout';

const Index = ({ setAuth }) => {
    const navigate = useNavigate();
  return (
    <>
    <Layout />

      </>
  )
};

export default Index;
