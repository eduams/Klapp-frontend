import React from "react";
import './home.css'
import { Menu  } from 'react-feather';
import { User  } from 'react-feather';
import { Settings  } from 'react-feather';
import { Star  } from 'react-feather';


const Home = () => (
  <>  
    <div className="content">    
        <h4>KlappEdu</h4>
            <header></header>
            <body>
                <div className="box">Visitar estante</div>
                <div className="box">Pontuação atual</div>
                <div className="box">Rendimento</div>
                <div className="box">Bonus para resgatar</div>
            </body>
    </div>

  </>
);

export default Home;
