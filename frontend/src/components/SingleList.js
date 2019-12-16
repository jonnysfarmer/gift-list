import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
// import { useHistory } from 'react-router-dom'
import Auth from '../lib/auth'
// import { element } from 'prop-types'
import Breadcrumbs from './Breadcrumbs'

require('dotenv').config()
// taken etsy key off so it's not committed to github

const customSchema = {
  note: '',
  url: ''
}


const SingleList = (props) => {

  //===== VARIABLES =====
  //variables for getting the list info
  const [data, setData] = useState({})
  const [errors, setErrors] = useState([])
  const [cat, setCat] = useState([])
  const [etsy, setEtsy] = useState([])
  const [savedItems, setSavedItems] = useState([])
  const [customItems, setCustomItems] = useState([]) // ALl custom Items
  const [editOff, setEditState] = useState(true) //set default to true so it's in non-edit mode
  const [editDate, setDateState] = useState()
  const [editStatus, setStatusState] = useState()
  const [addCustomEdit, setAddCustomEdit] = useState(true)
  const [customItem, setCustomItem] = useState({ customSchema })
  const [editCustom, setEditCustom] = useState([])
  const [etsyListingID, setEtsyListingID]= useState([])

  // const editList = {
  //   user: '',
  //   listName: '',
  //   giftRecipient: '',
  //   eventName: '',
  //   eventDate: '',
  //   eventReminder: false,
  //   budget: ''
  // }


  const userID = props.match.params.userId
  const listID = props.match.params.listId
  //this one also pulls from Etsy, pulled out to only on Mount to restrict calls
  const listHookOnMount = () => {
    axios.get(`/api/lists/${userID}/${listID}`)
      .then(response => {
        setData(response.data)
        setCat(response.data.subcategory)
        setStatusState(response.data.listStatus)
        etsyHook(response.data.subcategory[0])
        savedItemsHook(response.data.itemsSaved)
      })

      .catch(err => setErrors(err))
  }
  const listHook = () => {
    axios.get(`/api/lists/${userID}/${listID}`)
      .then(response => {
        setData(response.data)
        setCat(response.data.subcategory)
        setStatusState(response.data.listStatus)
        savedItemsHook(response.data.itemsSaved)
      })

      .catch(err => setErrors(err))
  }

  //This displays 6 of the first category
  //when the other categories are clicked, it then does those
  const etsyHook = (cat) => {
    axios.get(`/api/etsy/${cat}`)
      .then(response => {
        setEtsy(response.data.data)
        getListingIds(response.data.data)
        console.log(response.data.data)
      })
      .catch(err => setErrors(err))
  }

  const getListingIds = (data)=> {
    const ListingID = data.map((ele, i) => {
      return ele.listing_id
    })
    console.log(ListingID)
    let newArr = []
    ListingID.map((ele, i)=> {
      axios.get(`/api/image/${ele}`)
      .then(response => {
        newArr = [...newArr]
        newArr.push(response.data.image)
        setEtsyListingID(newArr)
      })
    })
  }

  // router.route('/image/:id')




  // const savedItemsHook = (items) => {
  //   let totalItems = []
  //   items.forEach((ele, i) => {
  //     axios.get(`/api/items/${ele}`)
  //       .then(response => {
  //         totalItems = [...totalItems]
  //         totalItems.push(response.data)
  //         setSavedItems(totalItems)
  //       })
  //   })
  // }
  //Inital also refreshes all the individual hiding data
  const customItemHookInitial = () => {
    axios.get(`/api/lists/${userID}/${listID}/customItems`)
      .then(response => {
        setCustomItems(response.data)
        customItemIdArray(response.data)
      }
      )
      .catch(err => setErrors(err))
  }
  //this does not reset the hiding data
  const customItemHook = () => {
    axios.get(`/api/lists/${userID}/${listID}/customItems`)
      .then(response => {
        setCustomItems(response.data)
      }
      )
      .catch(err => setErrors(err))
  }





  //===== USER CAN EDIT LIST DETAILS ======
  //the code in the form checks to see if editOff is true (which means the fields are not editable)
  //if it is true, then it calls this function to switch the state and thus display the input fields
  //the save button calls the PUT, then editField to save the changes and set fields back to 'edit'
  //the cancel button ignores any edits and sets fields back to 'non editable'
  function editField(e) {
    setEditState(!editOff)
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setErrors({})
  }
  //for putting the edited field back to our database
  function saveEdit(e) {
    e.preventDefault()
    axios.put(`/api/lists/${userID}/${listID}`, data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(setEditState(!editOff))
      .catch(err => console.log(err))
  }
  //for clearing any changes made to the fields
  function cancelEdit(e) {
    e.preventDefault()
    listHook()
    setEditState(!editOff)
  }

  //======USER CAN ADD / DELETE CUSTOM ITEMS



  function addEditCustom() {
    setAddCustomEdit(!addCustomEdit)
  }
  //Handle Change for Custom Item
  const handleChangeCustom = (e) => {
    setCustomItem({ ...customItem, [e.target.name]: e.target.value })
    console.log(customItem)
    setErrors({})

  }
  function saveCustomEdit(e) {
    e.preventDefault()
    axios.post(`/api/lists/${userID}/${listID}/customItems`, customItem, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        setAddCustomEdit(!addCustomEdit)
        customItemHookInitial()
        setCustomItem(customSchema)

      })
      .catch(err => console.log(err))
  }
  //Deletes item, then reruns get Custom Item hook
  const deleteCustomItem = (id) => {
    axios.delete(`/api/lists/${userID}/${listID}/customItems/${id}`)
      .then(() => customItemHookInitial())
      .catch(err => setErrors(err))
  }

  //======USER CAN EDIT CUSTOM ITEMS

  const customItemIdArray = (data) => {
    const IdArray = data.map((ele, i) => {
      return true
    })
    setEditCustom(IdArray)
  }

  const editCustomItem = (pos) => {
    let newArray = [...editCustom]
    newArray[pos] = !newArray[pos]
    setEditCustom(newArray)

  }
  const editHandleChangeCustom = (e, i) => {
    const data = [...customItems]
    data[i] = {...data[i],[e.target.name]: e.target.value }
    setCustomItems(data)
  }
  
  const saveCustomEditItem =(id, i) => {
    axios.put(`/api/lists/${userID}/${listID}/customItems/${id}`, customItems[i])
    .then(() => {customItemHookInitial()})
    .catch(err => setErrors(err))
  }
  // edit, 

  //   .put(lists.editCustomItems) // allows you to edit custom items from a speicific list



  //===== USER CAN ARCHIVE LIST ======
  function archiveList(e) {
    e.preventDefault()
    console.log('archive called')
    axios.put(`/api/lists/${userID}/${listID}`, { listStatus: 'Archived' }, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(setStatusState('Archived'))
      .catch(err => console.log(err))
  }

  //Deletes and updates Etsy items from your list
  const deleteEtsyItem = (ItemID) => {
    const items = data.itemsSaved
    const newItems = items.filter((ele, i) => {
      return ele !== ItemID
    })
    axios.put(`/api/lists/${userID}/${listID}`, { itemsSaved: newItems })
      .then(response => {
        // listHook()
        savedItemsHook(response.data.itemsSaved)})
      .catch(err=> console.log(err))

  }




  //===============================================
  // need to find better way to handle there being no data in optional fields
  // {data.eventDate && <input className='input' type='date' value={data.eventDate} name='eventDate'  onChange={handleChange} />}
  // {!data.eventDate && <input className='input' type='date' name='eventDate'  onChange={handleChange} />}

  // show 5 

  console.log(etsyListingID)
  console.log(etsyListingID.length)
  console.log(etsy.length)
  // console.log(cat)
  useEffect(listHookOnMount, [])
  useEffect(customItemHookInitial, [])
  // console.log(customItems)
  if (data === {} || etsy === {} || savedItems === [] || editCustom === []) return <div>Loading</div>
  return (
    <>
    <Breadcrumbs />
    <section className=''>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <div className='container'>
              <div className='title'>
                <h1 name='listName' className={`${editOff ? '' : 'not-editable'}`}>{data.listName} <span className='edit-link' onClick={editField}>edit</span></h1>
                <div className={`${editOff ? 'not-editable' : ''}`}>
                  {data.listName && <input className='input' type='text' value={data.listName} name='listName' onChange={handleChange} />}
                  {!data.listName && <input className='input' type='text' name='listName' onChange={handleChange} />}
                </div>
              </div>
              <div className='subtitle'>
                <p className={`edit ${editOff ? '' : 'not-editable'}`}>{data.giftRecipient} <span className='edit-link' onClick={editField}>edit</span></p>
                <div className={`${editOff ? 'not-editable' : ''}`}>
                  {data.giftRecipient && <input className='input' type='text' value={data.giftRecipient} name='giftRecipient' onChange={handleChange} />}
                  {!data.giftRecipient && <input className='input' type='text' name='giftRecipient' onChange={handleChange} />}
                </div>
              </div>
              <div className='subtitle'>
                <p className={`edit ${editOff ? '' : 'not-editable'}`}>{moment(data.eventDate).format('DD-MM-YYYY')}  <span className='edit-link' onClick={editField}>edit</span></p>
                <div className={`${editOff ? 'not-editable' : ''}`}>
                  {data.eventDate && <input className='input' type='date' value={moment(data.eventDate).format('YYYY-MM-DD')} name='eventDate' onChange={handleChange} />}
                  {!data.eventDate && <input className='input' type='date' name='eventDate' onChange={handleChange} />}
                </div>
              </div>
              <div className='subtitle'>
                <p className={`edit ${editOff ? '' : 'not-editable'}`}>{data.eventName}  <span className='edit-link' onClick={editField}>edit</span></p>
                <div className={`${editOff ? 'not-editable' : ''}`}>
                  {data.eventName && <input className='input' type='text' value={data.eventName} name='eventName' onChange={handleChange} />}
                  {!data.eventName && <input className='input' type='text' name='eventName' onChange={handleChange} />}
                </div>
              </div>
            </div>
            <div className={`edit ${editOff ? 'not-editable' : ''}`}>
              <button onClick={saveEdit}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </div>
            {editStatus !== 'Archived' && <button className='is-active' onClick={archiveList}>Archive list</button>}
            {editStatus === 'Archived' && <p className='is-archived'>List is archived</p>}
            <div className='container'>
              {cat.map((ele, i) => {
                return (
                  <button key={i} onClick={() => etsyHook(ele)}>{ele}</button>
                )
              })}
            </div>

            <div className='container'>
              <div className='subtitle'>Suggested Gifts</div>
              {etsy.map((ele, i) => {
                return (
                  <div key={i}>
                    <img src={etsyListingID[i]} alt="product"/>
                  <p>{ele.title}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="column">
            <div className="container">
              <div className="subtitle">Saved gifts</div>
              {savedItems.map((ele, i) => {
                return (
                  <div key={i}>
                    <p >{ele.productName}</p>
                    <button onClick={() => deleteEtsyItem(ele.listingId)}>Delete</button>
                  </div>
                )
              })}
            </div>
            <div className="container">
              <div className="subtitle">Cutstom Gifts</div>
              {customItems.map((ele, i) => {
                return (
                  <div key={i}>
                    <div className={`edit ${editCustom[i] ? '' : 'not-editable'}`}>
                      <p>{ele.note}</p>
                      <p>{ele.url}</p>
                      <button onClick={() => deleteCustomItem(ele._id)}>Delete</button>
                      <button onClick={()=>editCustomItem(i)}>Edit</button>
                    </div>
                    <div className={`${editCustom[i] ? 'not-editable' : ''}`}>
                      {<div>
                          <input className='input' type='text' name='note' value={customItems[i].note} onChange={(e)=>editHandleChangeCustom(e, i)} />
                          <input className='input' type='text' name='url' onChange={(e)=>editHandleChangeCustom(e, i)} title='url' value={ele.url}  />
                                        
                        <button onClick={()=>saveCustomEditItem(ele._id, i)}>Save</button>
                        <button onClick={()=>editCustomItem(i)}>Cancel</button>
                      </div>}

                    </div>
                  </div>

                )
              })}
              <div className='subtitle'>
                <p className={`edit ${addCustomEdit ? '' : 'not-editable'}`}><span className='edit-link' onClick={addEditCustom}>+</span></p>
                <div className={`${addCustomEdit ? 'not-editable' : ''}`}>
                  {<div>
                    <div className='control has-static-text'>
                      <input className='input' type='text' name='note' onChange={handleChangeCustom} title='Note' value={customItem.note} />
                      <span className='static-text'>Note</span>
                    </div>
                    <div className='control has-static-text'>
                      <input className='input' type='text' name='url' onChange={handleChangeCustom} title='url' value={customItem.url} />
                      <span className='static-text'>URL</span>
                    </div>
                    <button onClick={saveCustomEdit}>Save</button>
                    <button onClick={addEditCustom}>Cancel</button>
                  </div>}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default SingleList