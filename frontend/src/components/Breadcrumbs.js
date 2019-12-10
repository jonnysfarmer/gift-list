import React from 'react'
import { useHistory } from 'react-router-dom'


const Breadcrumbs = ({ data }) => {
    //get the url and put it into an array
    let history = useHistory()
    const urlPath = history.location.pathname
    const pathSplit = urlPath.split('/')
    console.log(pathSplit)

    //map the results of the url pieces against their breadcrum (or null if the piece is not a crumb eg userid)
    let crumb
    
    const crumbArr = pathSplit.map((elem, i) => {
      switch(elem) {
        //Home is always visible as a crumb if crumbs are shown so it is not defined here, it will return null
        case 'dashboard': crumb = 'Dashboard'; break
        case 'lists': crumb = 'Dashboard'; break
        case 'create':  crumb = 'Create A List'; break
        default :  crumb = null
      }
      return crumb
    })
    
    console.log(crumbArr)

    

  return (
    <section className='breadcrumbs'>
      <p>Breadcrumbs here</p>
    </section>
  )
}

export default Breadcrumbs