import React, { useState, useEffect } from 'react'
import axios from 'axios'

import AllLists from './AllLists'
import Breadcrumbs from './Breadcrumbs'

const Lists = (props) => {


  const [userInfo, setUserInfo] = useState({})
  const [listInfo, setListInfo] = useState([])
  const [errors, setErrors] = useState([])

  // Might need to add a filter for "active" lists


  //this returns just the active lists
  // const getActiveLists = (data) => {
  //   const activeLists = data.filter((item) => {
  //     return item.listStatus.includes('Active')
  //   })
  //   return activeLists
  // }

  //this hook gets the list Info
  const userlistHook = () => {
    const userID = props.match.params.userId
    axios.get(`/api/lists/${userID}`)
      .then(response => setListInfo(response.data)) //this will only return list with a status of active
      .catch(err => setErrors(err))
  }

  //this is a hook for the User info
  const userInfoHook = () => {
    const userID = props.match.params.userId
    axios.get(`/api/user/${userID}`)
      .then(response => {
        setUserInfo(response.data)
      })
      .catch(err => setErrors(err))
  }

  const listLength = () => {
    const length = (listInfo.filter((ele, i) => {
      return ele.listStatus === 'Active'
    }))
    console.log(length.length)
    return length.length
  }



  //cool to add how many events are in the next month...

  useEffect(userlistHook, [])
  useEffect(userInfoHook, [])

  // console.log(listInfo)
  // console.log(userInfo)
  if (listInfo === [] || userInfo === {}) return <div>Loading</div>
  return (
    <>
      <Breadcrumbs />
      <section className="">
          <div className="container">
            <h1>Welcome back, {userInfo.firstname}</h1>
            <p>You are currently working on {listLength()} lists</p>
          </div>
        </section>

        <section className="list-map">
          <div className="container">
            <AllLists data={listInfo} refreshFunction={userlistHook} />
          </div>
      </section>
    </>
  )
}

export default Lists;
