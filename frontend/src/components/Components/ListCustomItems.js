import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ListCustomItems = (props) => {

  // //===== ICONOGRAPHY =====
  // const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />

  // //===== VARIABLES =====
  // const customSchema = {
  //   note: '',
  //   url: ''
  // }

  // const [data, setData] = useState({})
  // const [addCustomEdit, setAddCustomEdit] = useState(true)
  // const [customItem, setCustomItem] = useState({ customSchema })
  // const [editCustom, setEditCustom] = useState([])

  

  // console.log(props.customItem)

  // //initiate our data from our props
  // const setDataFromProps = () => {
  //   setData(props)
  //   // setTempData(props)
  // }
  // console.log(data)

  // //===== FUNCTIONS FOR THIS PAGE =====
  // //Set initial data from props

  // const customItemHookInitial = () => {
  //   axios.get(`http://localhost:8000/api/lists/${data.userId}/${data.listId}/customItems`)
  //     .then(response => {
  //       setData(response.data)
  //       customItemIdArray(response.data)
  //     }
  //     )
  //     .catch(err => setErrors(err))
  // }

  // //Add a new item
  // function addEditCustom() {
  //   setAddCustomEdit(!addCustomEdit)
  // }
  // //Handle change when in edit mode
  // const handleChangeCustom = (e) => {
  //   setCustomItem({ ...customItem, [e.target.name]: e.target.value })
  //   console.log(customItem)
  //   setErrors({})
  // }
  // function saveCustomEdit(e) {
  //   e.preventDefault()
  //   axios.post(`http://localhost:8000/api/lists/${userID}/${listID}/customItems`, customItem, {
  //     headers: { Authorization: `Bearer ${Auth.getToken()}` }
  //   })
  //     .then(() => {
  //       setAddCustomEdit(!addCustomEdit)
  //       customItemHookInitial()
  //       setCustomItem(customSchema)

  //     })
  //     .catch(err => console.log(err))
  // }
  // //Deletes item, then reruns get Custom Item hook
  // const deleteCustomItem = (id) => {
  //   axios.delete(`http://localhost:8000/api/lists/${userID}/${listID}/customItems/${id}`)
  //     .then(() => customItemHookInitial())
  //     .catch(err => setErrors(err))
  // }

  // //======USER CAN EDIT CUSTOM ITEMS

  // const customItemIdArray = (data) => {
  //   const IdArray = data.map((ele, i) => {
  //     return true
  //   })
  //   setEditCustom(IdArray)
  // }

  // const editCustomItem = (pos) => {
  //   let newArray = [...editCustom]
  //   newArray[pos] = !newArray[pos]
  //   setEditCustom(newArray)

  // }
  // const editHandleChangeCustom = (e, i) => {
  //   const data = [...customItems]
  //   data[i] = {...data[i],[e.target.name]: e.target.value }
  //   setData(data)
  // }

  // const saveCustomEditItem =(id, i) => {
  //   axios.put(`http://localhost:8000/api/lists/${userID}/${listID}/customItems/${id}`, customItems[i])
  //   .then(() => {customItemHookInitial()})
  //   .catch(err => setErrors(err))
  // }

  // useEffect(() => {
  //   setDataFromProps(props)
  // }, [props])



  // if (data === {}) { return <div>Loading</div> }
  return (
    <div id='list-name' className='element'>
   
    </div>
  )

}

export default ListCustomItems


