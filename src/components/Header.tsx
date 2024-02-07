import React,{useContext} from 'react'
import { ExpandableContext } from './Expandable'
function Header() {
    const {expand,setExpand} =useContext(ExpandableContext)
    console.log("This is log",expand)
    
  return (
    <div className=' text-red-600'>
        lksdjflksjf
    </div>
  )
}

export default Header