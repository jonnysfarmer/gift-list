import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import Auth from '../lib/auth'



const Breadcrumbs = ({ data }) => {

  //set our name/path array
  //get the userId (for if they're logged in)
  const userId = Auth.getToken()

  const breadcrumbArr = [
    {
      urlStub: 'lists',
      label: 'My Lists',
      path: `/lists/${userId}`
    },
    {
      urlStub: 'create',
      label: 'Create A List',
      path: '/lists/create'
    }
  ]


  //get the url
  let history = useHistory()
  //break the url apart and add it to our array
  const pathSplit = (history.location.pathname).split('/')
  //map the path items and get their label and paths from breadcrumbArr
  const crumbs = pathSplit.filter(elem => elem !== '').map((elem, i) => {
    console.log(elem)
      return breadcrumbArr.find( ({ urlStub }) => urlStub === elem )
    })

  
  
    console.log(crumbs)
  
   


  // //map the results of the url pieces against their breadcrumb (or null if the piece is not a crumb eg userid)
  // //then return just the non nulls
  // let crumb
  // const crumbArr = pathSplit.map((elem, i) => {
  //   switch (elem) {
  //     case 'lists': crumb = 'My Lists', path = '/lists/${userId}'; break
  //     case 'create': crumb = 'Create A List'; break
  //     default: crumb = null
  //   }
  //   return crumb
  // }).filter(crumb => crumb !== null)
  // console.log(crumbArr)
  // console.log(crumbArr[crumbArr.length - 1])

  //need to add the router links instead of a href's
  //need to get this page name, should be last in array

  if (!breadcrumbArr) { return <div>Loading</div> }

  return (
    <ul className='breadcrumbs'>
      <li><Link to='/'>Home</Link></li>
      {crumbs.map((elem, i) => {

      return (
        <li key={i}><Link to={elem.path}>{elem.label}</Link></li>
        ) 

      })}
    </ul>
  )
}

export default Breadcrumbs