import React from "react";
import './home.css'
import { Menu  } from 'react-feather';
import { User  } from 'react-feather';
import { Settings  } from 'react-feather';
import { Star  } from 'react-feather';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    subject: 'Matéria 1',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Matéria 2',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Matéria 3',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Matéria 4',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Matéria 5',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Matéria 6',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const pontuacao = [
  {
    name: 'Matéria 1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Matéria 2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Matéria 3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Matéria 4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Matéria 5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Matéria 6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];




const Home = () => (
  <>  
    <div className="content">    
        <h4 >KlappEdu</h4>
            <header></header>
            <body>
                <div className="box"><h5>Visitar estante</h5></div>
                <div className="box"><h5>Pontuação atual</h5>
                <ResponsiveContainer width="100%" height="80%">
                <BarChart
                  width={500}
                  height={300}
                  data={pontuacao}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
                </ResponsiveContainer>
                </div>
                <div className="box"><h5>Rendimento</h5>
                <ResponsiveContainer width="100%" height="80%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
                </ResponsiveContainer>


                </div>
                <div className="box"><h5>Bonus para resgatar</h5></div>
            </body>
    </div>

  </>
);

export default Home;
