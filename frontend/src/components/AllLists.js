import React from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'


const AllLists = ({ data }) => {
    let history = useHistory()

    console.log(data)
    console.log(data._id)

   const handleClick = (elem) => {
    history.push(`/lists/${elem.user._id}/${elem._id}`)
   }
 
   //do an on hover funciton on each element.
  // console.log(data)
  return (
    <section className='section'>
      {data.map((ele, i) => {
        return (
          <div className = 'container' key = {i} onClick={() =>handleClick(ele)}>
          <div className='columns'>
            <div className='column'>
              <p>{ele.listName}</p>
              <p>{moment(ele.eventDate).format('DD-MM-YYYY')}</p>
            </div>
            <div className='column'>
               Number of gifts saved : {ele.itemsSaved.length + ele.customItem.length}
            </div>
            {/* <div className='column'>
              {ele.listStatus}
            </div> */}
          </div>
          </div>
        )

      })}
    </section>
  )
}

export default AllLists