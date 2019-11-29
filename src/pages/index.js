import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';


export default () => (
  <div style={{ color: `purple`, fontSize: `72px` }}>
  <h1>Hello Gatsby!</h1>
  <p>What a world.</p>
  <img src="https://source.unsplash.com/random/400x200" alt="" />
  <div>
  <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>
  <div className="row">
   <div className="col">
    <p>OK oK</p>
    <p> ok ok</p>
   </div>  
   <div className="col">
   <p>OK oK</p>
   <p> ok ok</p>
   </div>
  </div>
  </div>
)



