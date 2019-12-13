import React from 'react'
import HomeImages from './HomeImages'

const Home = () => (
  <section>
    <section className="hero is-medium has-text-centered">

      <div className="hero-body">
        <div className="container">

          {/* <div className='logo'>
            <div className='present'>
              <div className='logo-box'></div>
              <div className='logo-box'></div>
              <div className='logo-box'></div>
              <div className='logo-box'></div>
            </div>

            <div className='present tall'>
              <div className='logo-box'></div>
              <div className='logo-box'></div>
              <div className='logo-box'></div>
              <div className='logo-box'></div>
            </div>

            <div className='present wide'>
              <div className='logo-box'></div>
              <div className='logo-box'></div>
              <div className='logo-box'></div>
              <div className='logo-box'></div>
            </div>
          </div> */}


          <h1 className='title'>
            Gift List
        </h1>
          <h2 className='subtitle'>
            For all your gift buying fun!
        </h2>



        </div>
      </div>
    </section>
    <HomeImages />
  </section>
)

export default Home