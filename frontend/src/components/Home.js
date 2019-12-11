import React from 'react'

const Home = () => (
  <section className="hero is-fullheight has-text-centered">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="https://via.placeholder.com/400" alt="" />
                </figure>
              </div>
              <div className="card-content">
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
              <div className="card-content">
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
              <div className="card-content">
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
            <div className="card-content">
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
            <div className="card-content">
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
            <div className="card-content">
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
            <div className="card-content">
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
            <div className="card-content">
              <p>List5</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
)

export default Home