import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'

const Home = ({ sidebar, darkmode }) => {

  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${ sidebar?"":"large-container"}`}>
        <Feed category={category} darkmode={darkmode}/>
      </div>
    </>
  )
}

export default Home
