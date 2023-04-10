import React from "react";
import './sidebar.css'
import { Menu  } from 'react-feather';
import { User  } from 'react-feather';
import { Settings  } from 'react-feather';
import { Star  } from 'react-feather';

var open = true;

function openbar(){
  if(open==false){
      let sidebar = document.getElementById("sidebar");
      sidebar.style.width = "50px";
      sidebar.style.textAlign = "center";
      open = true;
      let descriptions = document.getElementsByClassName("bar-text");
      for (var i = 0; i < descriptions.length; i ++) {
        descriptions[i].style.display = 'none';
    }
    return;
  }
  if(open==true){
      let sidebar = document.getElementById("sidebar");
      sidebar.style.width = "250px";
      sidebar.style.textAlign = "left";
      open = false;
      let descriptions = document.getElementsByClassName("bar-text");
      for (var i = 0; i < descriptions.length; i ++) {
        descriptions[i].style.display = 'contents';
    }
    return;
  }
  }


const Sidebar = () => (
  <>  
    <nav id="sidebar">
      <ul>
        <li onClick={openbar}><Menu size={40}/>
        <h5 class="bar-text">Menu</h5>
        </li>
        <li><Star size={40} />
        <h5 class="bar-text">Pontuação</h5>
        </li>
      </ul>
      <ul>
        <li><User size={40} />
        <h5 class="bar-text">Perfil</h5>
        </li>
        <li><Settings size={40} />
        <h5 class="bar-text">Configurações</h5>
        </li>
      </ul>
    </nav>
  </>
);

export default Sidebar;
