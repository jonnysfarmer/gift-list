import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faPlusSquare } from '@fortawesome/free-solid-svg-icons'


const ListCustomItems = (props) => {


  // //===== ICONOGRAPHY =====
  const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />
  const editIcon = <FontAwesomeIcon icon={faEdit} />
  const newIcon = <FontAwesomeIcon icon={faPlusSquare} />


  // //===== VARIABLES =====
  const customSchema = {
    note: '',
    url: ''
  }

  const [customItems, setCustomItems] = useState()
  const [addCustomEdit, setAddCustomEdit] = useState(true)
  const [customItem, setCustomItem] = useState(customSchema)
  const [editCustom, setEditCustom] = useState([])



  console.log(props.customItem)

  // //initiate our data from our props
  const setDataFromProps = () => {
    setCustomItems(props.customItem)
    customItemIdArray(props.customItem)
  }


  //=============Add a new item
  function addEditCustom() {
    setAddCustomEdit(!addCustomEdit)
  }
  //Handle change when in edit mode
  const handleChangeCustom = (e) => {
    setCustomItem({ ...customItem, [e.target.name]: e.target.value })

  }
  function saveCustomEdit(e) {
    e.preventDefault()
    axios.post(`http://localhost:8000/api/lists/${props.userId}/${props.listId}/customItems`, customItem, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then((response) => {
        setAddCustomEdit(!addCustomEdit)
        setCustomItems(response.data.customItem)
        customItemIdArray(response.data.customItem)
        setCustomItem(customSchema)

      })
      .catch(err => console.log(err))
  }
  //Deletes item, then reruns get Custom Item hook
  const deleteCustomItem = (id) => {
    axios.delete(`http://localhost:8000/api/lists/${props.userId}/${props.listId}/customItems/${id}`)
      .then((response) => {
        setCustomItems(response.data.customItem)
        customItemIdArray(response.data.customItem)
      })
      .catch(err => console.log(err))
  }

  // //======USER CAN EDIT CUSTOM ITEMS

  const customItemIdArray = (data) => {
    if (data === undefined) { return setEditCustom([true]) }
    else {
      const IdArray = data.map((ele, i) => {
        return true
      })
      setEditCustom(IdArray)
    }
  }

  const editCustomItem = (pos) => {
    console.log('test')
    let newArray = [...editCustom]
    newArray[pos] = !newArray[pos]
    setEditCustom(newArray)

  }
  const editHandleChangeCustom = (e, i) => {
    const data = [...customItems]
    data[i] = { ...data[i], [e.target.name]: e.target.value }
    setCustomItems(data)
  }

  const saveCustomEditItem = (id, i) => {
    axios.put(`http://localhost:8000/api/lists/${props.userId}/${props.listId}/customItems/${id}`, customItems[i])
      .then((response) => {
        setCustomItems(response.data.customItem)
        customItemIdArray(response.data.customItem)
      })
  }

  useEffect(() => {
    setDataFromProps(props)
  }, [props])

  console.log(editCustom)


  if (customItems === undefined || customItems === [] || editCustom === []) { return <div>Loading</div> }
  else {
    console.log('working')
    // let list = customItems
    return (
      <div id='list-name' className='element'>

        <h3><span className='edit-link interactive-icon clickable' onClick={addEditCustom}>{newIcon}</span>Add your own ideas</h3>


        <div className={`${addCustomEdit ? 'hide' : ''}`}>
          {<div>
            <div className='control has-static-text field'>
              <input className='input' type='text' name='note' onChange={handleChangeCustom} title='Note' value={customItem.note} placeholder='Describe your gift'/>
              <span className='static-text'>Item</span>
            </div>
            <div className='control has-static-text field'>
              <input className='input' type='text' name='url' onChange={handleChangeCustom} title='url' value={customItem.url} placeholder='Add a link'/>
              <span className='static-text'>URL</span>
            </div>
            <button className='button is-rounded' onClick={saveCustomEdit}>Save</button>
            <button className='button cancel is-rounded' onClick={addEditCustom}>Cancel</button>
          </div>}

        </div>

        {customItems.map((ele, i) => {
          return (
            <div key={i}>
              <div className={`${editCustom[i] ? '' : 'hide'}`}>
                {/* <small>Gift Idea</small> */}
                <div className='custom-item'>
                  <div className='custom-icons'>
                    <span className='interactive-icon clickable' onClick={() => editCustomItem(i)}>{editIcon}</span>
                    <span className='interactive-icon clickable' onClick={() => deleteCustomItem(ele._id)}>{trashIcon}</span>
                  </div>
                  <div className='custom-note'>
                    <p className='custom-label'>{ele.note}</p>
                    <a href={`https://${ele.url}`} target='_blank' rel='noopener noreferrer'>{ele.url}</a>
                  </div>
                </div>

              </div>
              <div className={`${editCustom[i] ? 'hide' : ''}`}>
                {<div>
                  <div className='field'>
                    <input className='input' type='text' name='note' defaultValue={customItems[i].note} onChange={(e) => editHandleChangeCustom(e, i)} />
                    <input className='input' type='text' name='url' onChange={(e) => editHandleChangeCustom(e, i)} title='url' defaultValue={ele.url} />
                  </div>
                  <button className='button is-rounded' onClick={() => saveCustomEditItem(ele._id, i)}>Save</button>
                </div>}

              </div>
            </div>

          )
        })}



      </div>
    )
  }
}

export default ListCustomItems


