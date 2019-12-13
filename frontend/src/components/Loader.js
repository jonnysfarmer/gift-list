import Loader from 'react-loader-spinner'
import React from 'react'

export default class Loading extends React.Component {
 //other logic
   render() {
  return(
   <Loader
      type="Oval"
      color="#358270"
      height={100}
      width={100}
      timeout={3000} //3 secs

   />
  );
   }
}