import React from 'react'
import Feed from "../../components/Feed/Feed.js"
import Widgets from "../../components/Widgets/Widgets.js"
import Sidebar from "../../components/Sidebar/Sidebar.js"

const Home = () => {
  return (
    <>
      <Sidebar  />
      <Feed />
      <Widgets />
    </>
  )
}

export default Home