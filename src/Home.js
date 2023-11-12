import React from 'react';
import JsonToTable from './JsonToTable';
import Navbar from './Navbar';
const Home = () => {
  return (
    <div>
      <Navbar />
      <JsonToTable></JsonToTable>
    </div>
  );
};

export default Home;
