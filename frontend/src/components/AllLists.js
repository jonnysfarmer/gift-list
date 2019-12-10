import React from 'react'
import { useHistory } from 'react-router-dom'


const AllLists = ({ data }) => {
    let history = useHistory()

   const handleClick = (elem) => {
    history.push(`/lists/${elem.user._id}/${elem._id}`)
   }
 
   //do an on hover funciton on each element.
  // console.log(data)
  return (
    <section className='section'>
      {data.map((ele, i) => {
        return (
          <div className = 'container' key = {i} 
          onClick={() =>handleClick(ele)}
          >
          <div class='columns'>
            <div class='column'>
              <p>{ele.listName}</p>
              <p>{ele.eventDate}</p>
            </div>
            <div className='column'>
               Number of gifts saved : {ele.itemsSaved.length + ele.customItem.length}
            </div>
            <div className='column'>
              {ele.listStatus}
            </div>
          </div>
          </div>
        )

      })}
    </section>
  )
}

export default AllLists