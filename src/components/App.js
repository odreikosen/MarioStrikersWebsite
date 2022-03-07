import { Routes, Route } from "react-router-dom";
import "./App.css"
import NavBar from './navbar/navbar';
import Home from './home/home';
import Rankings from './ranking/ranking';
import MscRules from './rules/mscrules';
import SmsRules from './rules/smsrules';


const App = () => {

  return (
    <div>
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
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/msc-rules" element={<MscRules />} />
        <Route path="/sms-rules" element={<SmsRules />} />
      
  </Routes>
  </div>
  );
}

export default App;
