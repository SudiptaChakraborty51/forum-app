import React from 'react';
import "./home.css";
import LeftSideBar from '../../components/LeftSidebar/leftSidebar';
import RightSideBar from '../../components/RightSideBar/rightSideBar';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-header'><h2>MyForum</h2></div>
      <LeftSideBar />
      <div className='home-main'>

      </div>
      <RightSideBar />
    </div>
  )
}

export default Home
