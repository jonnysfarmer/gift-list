import React from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'


const AllLists = ({ data }) => {
  let history = useHistory()

  const handleClick = (elem) => {
    history.push(`/lists/${elem.user._id}/${elem._id}`)
  }

  //do an on hover funciton on each element.
  // console.log(data)
  return (
    <div>

      {data.map((ele, i) => {
        return (
          <div className='container lists' key={i} onClick={() => handleClick(ele)}>
            <div className='columns'>
              <div className='column'>
                <p className="subtitle is-5">{ele.listName}</p>
                <p>{moment(ele.eventDate).format('DD-MM-YYYY')}</p>
              </div>
              <div className='column'>
                <p>Number of gifts saved: {ele.itemsSaved.length + ele.customItem.length}</p>
              </div>
              {/* <div className='column'>
              {ele.listStatus}
            </div> */}
            </div>
          </div>
        )

      })}
    </div>
  )
}

export default AllLists