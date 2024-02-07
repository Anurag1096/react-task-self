import React, { useContext } from 'react'
import { ExpandableContext } from './Expandable'
function ExpandBody({children}) {
    const {expand,setExpand}=useContext(ExpandableContext);
  return (
    <div className={`w-20 h-20 ${expand?"block":"hidden"}` }>
{children}
    </div>
  )
}

export default ExpandBody