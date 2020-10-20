import React from 'react'

import ToDo from './components/todo/todoconnected';
import Header from "./components/todo/Header";
import{SettingContext} from './context/numContext'

export default function App() {
    return (
      <>
      <Header/>
        <ToDo />
      
      </>
    );
  
}
