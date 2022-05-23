import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from "react-router-dom";


import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Home from './components/home/home';
import Rankings from './components/ranking/ranking';
import SMSRankings from './components/ranking/SMSRanking'
import MSCRankings from './components/ranking/MSCRanking'
import Tournaments from './components/tournament/Tournament';
import Crumble from './components/tournament/Crumble';
import WorldCup from './components/tournament/WorldCup';
import MscRules from './components/rules/mscrules';
import SmsRules from './components/rules/smsrules';
import DiscordInvite from './components/discord-invite/DiscordInvite';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/navbar';





ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <link rel="stylesheet" href="node_modules/react-responsive-carousel/lib/styles/carousel.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossOrigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossOrigin="anonymous"></script>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Arvo:wght@700&display=swap" rel="stylesheet"></link>
    <NavBar />
    <Routes>
        <Route exact path="/join" element={<DiscordInvite />} />
        <Route exact path="/sms-rankings" element={<Rankings gametype="2" />} />
        <Route exact path="/msc-rankings" element={<Rankings gametype="1" />} />
        <Route exact path="/msc-rules" element={<MscRules />} />
        <Route exact path="/sms-rules" element={<SmsRules />} />
        <Route exact path="/tournaments" element={<Tournaments />} />
        <Route exact path="/tournaments/crumble" element={<Crumble />} />
        <Route exact path="/tournaments/worldcup" element={<WorldCup />} />
        <Route exact path="/" element={<Home />} />

 
        </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
