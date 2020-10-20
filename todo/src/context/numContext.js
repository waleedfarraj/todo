// Implement this using context

// Create a context for managing application settings and provide this at the application level
// Display or Hide completed items (boolean)
// Number of items to display per screen (number)
// Default sort field (string)
// You may manually set (hard code) those state settings in the context provider during development
import React, {useState} from 'react';


export const SettingContext = React.createContext();

export default function SettingProvider(props) {
  
    const [complete, setComplete] = useState(true);
    const [number, setNumber] = useState(3);
    const [sort, setSort] = useState( props.sort || 'assignee')

    const state = {
       complete, 
        number,
        sort, 
        setComplete,
        setNumber,
        setSort
    }

    return (
        <SettingContext.Provider value={state}>
            {props.children}
        </SettingContext.Provider>
    )
} 
