import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Home from './components/home/home';
import Rankings from './components/ranking/ranking';
import MscRules from './components/rules/mscrules';
import SmsRules from './components/rules/smsrules';
import DiscordInvite from './components/discord-invite/DiscordInvite';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/navbar';





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossOrigin="anonymous"
/>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Arvo:wght@700&display=swap" rel="stylesheet"></link>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<DiscordInvite />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/msc-rules" element={<MscRules />} />
        <Route path="/sms-rules" element={<SmsRules />} />
 
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
