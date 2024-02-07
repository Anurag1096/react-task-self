import React,{ createContext,useState} from 'react'

export const ExpandableContext=createContext(null)
function Expandable({children}) {
    const [expand,setExpand]=useState<boolean>(false)
    const {Provider} = ExpandableContext
    const contextValue = { expand, setExpand };  
    return (
    <Provider value={contextValue}>
        {children}
    </Provider>
  )
}

export default Expandable