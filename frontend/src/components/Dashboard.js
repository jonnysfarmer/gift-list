import React, {useState, useEffect }from 'react'
import axios from 'axios'

import AllLists from './AllLists'




const Dashboard = ( props ) => {
  
  const [userInfo, setUserInfo] = useState({})
  const [listInfo, setListInfo] = useState([])
  const [errors, setErrors] = useState([])

  // Might need to add a filter for "active" lists

  

  
  //temp for devlopment, this needs to be passed via URL
  // const userID = '5dee2efa789b9a57f9799cff'

  //this hook gets the list Info
  const userlistHook = () => {
    const userID = props.match.params.userId
    axios.get(`http://localhost:8000/api/lists/${userID}`)
    .then(response => {
      setListInfo(response.data)
    })
    .catch(err => setErrors(err))
  }
  //this is a hook for the User info
  const userInfoHook = () => {
    const userID = props.match.params.userId
    axios.get(`http://localhost:8000/api/user/${userID}`)
    .then(response => {
      setUserInfo(response.data)
    })
    .catch(err => setErrors(err))
  }



  //cool to add how many events are in the next month...

  useEffect(userlistHook, [])
  useEffect(userInfoHook, [])

  // console.log(listInfo)
  // console.log(userInfo)
  if(listInfo === [] || userInfo === {} ) return <div>Loading</div>
  return (
    <section className="section">
      <section className="section">
        <div className="container">
        <div className='title'>Welcome back, {userInfo.firstname}</div>
        <p>You currently working on {listInfo.length} lists</p>
        
        </div>
      </section>
      <section className="section">
        <div className="container">
          <AllLists data = {listInfo} />
        </div>
      </section>
    </section>
  )
}

export default Dashboard;
