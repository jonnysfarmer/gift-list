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
    
    const crumbArrAll = pathSplit.map((elem, i) => {

      console.log(elem)
      switch(elem) {
        //Home is always visible as a crumb if crumbs are shown so it is not defined here, it will return null
        case 'dashboard': crumb = 'Dashboard'; break
        case 'lists': crumb = 'Dashboard'; break
        case 'create':  crumb = 'Create A List'; break
        default :  crumb = null
      }
      return crumb
    })
    console.log(crumbArrAll)
    //remove the null values
    const crumbArr = crumbArrAll.filter(crumb => crumb !== null)
    console.log(crumbArr)
    console.log(crumbArr.length)
    
    //need to add the router links instead of a href's
    //need to get this page name, should be last in array
    
  if (!crumbArr) { return <div>Loading</div> }
  return (
    <ul className='breadcrumbs'>
      <li><a href='/'>Home</a></li>
      {crumbArr.map((elem, i) => {
        if (i < crumbArr.length-1) { return ( <li key={i}> <a href='x'>{i} {elem}</a></li> ) }
        else { return ( <li key={i}>{elem}</li> ) }
        
      })}
    </ul>
  )
}

export default Breadcrumbs