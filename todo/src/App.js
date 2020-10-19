import React from 'react'

import ToDo from './components/todo/todoconnected';
import Header from "./components/todo/Header";
export default function App() {
    return (
      <>
      <Header/>
        <ToDo />
      </>
    );
  
}
