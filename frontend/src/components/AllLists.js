import React from 'react'
import { useHistory } from "react-router-dom"


const AllLists = ({ data }) => {
  //   let history = useHistory()

  //  const handleClick = (id) => {
  //   history.push(`lists/${id}`)
  //  }
 

  console.log(data)
  return (
    <section className="section">
      {data.map((ele, i) => {
        return (
          <div className = "container" key = {i} 
          // onClick={() =>handleClick(ele._id)}
          >
          <div class="columns">
            <div class="column">
              <p>{ele.listName}</p>
              <p>{ele.eventDate}</p>
            </div>
            <div class="column">
               Number of gifts saved : {ele.itemsSaved.length + ele.customItem.length}
            </div>
            <div class="column">
              Third column
            </div>
          </div>
          </div>
        )

      })}
    </section>
  )
}

export default AllLists