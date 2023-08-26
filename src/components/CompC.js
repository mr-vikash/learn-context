import React from 'react'
import {MyContext} from '../App'
import { useContext } from 'react'

const CompC = () => {
  const appdata  = useContext(MyContext);
  
  return (
    <div className='compc'>
       Welcome {appdata.data}
       {appdata.biodata.name}
    </div>
  )
}

export default CompC
