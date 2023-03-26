//creating context api fro providing data in sibling component
import {createContext, useState} from 'react';

//creating context and exporting
//passing initial value null
//this DataContext will imported by that componenet where we need data
// and value can be retrived from DataContext where it is imported and retrieved with the help of useContext hook
export const DataContext =createContext(null);


const DataProvider=({children})=>{


const [accountContext,setAccountContext]=useState({username:'',name:''});
console.log("acc",accountContext);

    //here returning data context
    //Provider is an attribute on top of DaatContext
    //
    return (
        <DataContext.Provider value={{
            //in value we pass those value which we need to pass
            accountContext,
            setAccountContext
        }}>
        {children}
        </DataContext.Provider>
    )
}

export default DataProvider


//now we need to wrap this component on that component where we want to use this state value