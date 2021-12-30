import React from 'react'
import LineChart from "./TheChart";
import LineGraph from './TheChart';

const TheSearch = () => {
  return (
    <div className='header-wraper'>
      <div className='main-info'>
        <h1 className='header-title'>Job Search</h1>
        <LineGraph/>
        <LineChart/>
      </div>
    </div>
  )
}

export default TheSearch
