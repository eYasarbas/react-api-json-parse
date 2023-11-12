import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Button } from '@mui/material';
import { Container } from 'react-bootstrap';

const Navbar = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Container>
      <div style={{ padding: 5 }} className="d-flex">
        <div style={{ marginRight: 10 }}>
          <Button
            variant={isPressed ? "contained" : "text"}
            href="/home"
            onClick={() => setIsPressed(!isPressed)}
          >
            Home
          </Button>
        </div>
        <Button
          variant={isPressed ? "text" : "contained"}
          href="/about"
          onClick={() => setIsPressed(!isPressed)}
          >
          About
          </Button>
      </div>
    </Container>
  );
};

export default Navbar;
