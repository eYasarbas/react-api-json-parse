import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Button } from '@mui/material';
import { Container } from 'react-bootstrap';

const Navbar = () => {

  const [Variant, setVariant] = useState("contained");
  const handleClick = () => {
    if (Variant === "contained") {
      setVariant("text");
    } else {
      setVariant("contained");
    }
  };

  return (
    <Container>
      <div style={{ padding: 5 }} className="d-flex">
        <div style={{ marginRight: 10 }}>
          <Button variant={Variant} onClick={handleClick}>Home</Button>
        </div>
        <Button variant={setVariant} onClick={handleClick}>About</Button>
      </div>
    </Container>
  );
};

export default Navbar;
