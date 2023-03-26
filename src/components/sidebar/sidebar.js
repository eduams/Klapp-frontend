import React from "react";
import './sidebar.css'
import { Menu  } from 'react-feather';
import { User  } from 'react-feather';
import { Settings  } from 'react-feather';
import { Star  } from 'react-feather';


const Sidebar = () => (
  <>  
    <nav>
      <ul>
        <li><Menu size={40} /></li>
        <li><Star size={40} /></li>
      </ul>
      <ul>
        <li><User size={40} /></li>
        <li><Settings size={40} /></li>
      </ul>
    </nav>
  </>
);

export default Sidebar;
