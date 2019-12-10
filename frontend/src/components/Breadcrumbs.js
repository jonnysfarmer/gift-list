import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import Auth from '../lib/auth'



const Breadcrumbs = () => {

  //get the userId (for if they're logged in)
  const userId = Auth.getUserId()

  //set our name/path array
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
  const crumbs = pathSplit.map((elem, i) => {
      return breadcrumbArr.find( ({ urlStub }) => urlStub === elem )
    })
  //remove any undefined entries (ones that didn't match our breadcrumbArr)
  const crumbsNoNull = crumbs.filter(elem => elem !== undefined)


  if (!breadcrumbArr) { return <div>Loading</div> }
  return (
    <ul className='breadcrumbs'>
      <li><Link to='/'>Home</Link></li>
      {crumbsNoNull.map((elem, i) => {
      return (
        <li key={i}><Link to={elem.path}>{elem.label}</Link></li>
        ) 

      })}
    </ul>
  )
}

export default Breadcrumbs