

// src/components/Page01.jsx

import React from 'react';
import EmployerList from '../components/EmployerList';
import { Link } from 'react-router-dom';

const Page01 = () => {
  return (
    <section>
      <h2>İşveren Anasayfa</h2>
      <EmployerList />
      
    </section>
  );
};

export default Page01;
