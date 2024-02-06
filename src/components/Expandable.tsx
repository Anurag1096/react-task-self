import React,{ createContext,useState} from 'react'

const expandableContext=createContext()
function Expandable({children}) {
    const [expand,setExpand]=useState<boolean>(false)
    const {Provider} = expandableContext
    const contextValue = { expand, setExpand };  
    return (
    <Provider value={contextValue}>
        {children}
    </Provider>
  )
}

export default Expandable