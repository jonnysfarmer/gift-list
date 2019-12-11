import React from 'react'
import HomeImages from './HomeImages'

const Home = () => (
  <section>
  <section className="hero is-medium has-text-centered">
    
    <div className="hero-body">
      <div className="container">
<<<<<<< HEAD
        <h1 className='title'>
          GIFT LIST
        </h1>
        <h2 className='subtitle'>
          For all your gift buying fun!
        </h2>
      


=======
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="https://via.placeholder.com/400" alt="" />
                </figure>
              </div>
              <div className='card-content'>
                <p>Bath and Beauty</p>
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="https://via.placeholder.com/400" alt="" />
                </figure>
              </div>
              <div className='card-content'>
                <p>Trending</p>
                {/* api call /listings/trending */}
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="https://via.placeholder.com/400" alt="" />
                </figure>
              </div>
              <div className='card-content'>
                <p>Something else</p>
              </div>
            </div>
          </div>
        </div>
      <p className="subtitle">Inspiration Lists</p>
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://via.placeholder.com/400" alt="" />
              </figure>
            </div>
            <div className='card-content'>
              <p>List1</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://via.placeholder.com/400" alt="" />
              </figure>
            </div>
            <div className='card-content'>
              <p>List2</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://via.placeholder.com/400" alt="" />
              </figure>
            </div>
            <div className='card-content'>
              <p>List3</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://via.placeholder.com/400" alt="" />
              </figure>
            </div>
            <div className='card-content'>
              <p>List4</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://via.placeholder.com/400" alt="" />
              </figure>
            </div>
            <div className='card-content'>
              <p>List5</p>
            </div>
          </div>
        </div>
      </div>
>>>>>>> development
      </div>
    </div>
  </section>
  <HomeImages />
  </section>
)

export default Home