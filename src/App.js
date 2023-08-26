
import './App.css';

import { useState } from 'react';
import CompA from './components/CompA';
import { createContext } from 'react';
import CompC from './components/CompC';
import Header from './components/Header';

const  MyContext = createContext();


const App =()=>
{
  const [data,setData] = useState("Coder@23");
  const [biodata,setBiodata] = useState({name:"vikash",age:"20"});
  
  return(
    <div>
      <Header/>
      <MyContext.Provider value={{data,biodata}} >
       <CompA />
      </MyContext.Provider>
    </div>
  );
};

export {MyContext};
export default App;
