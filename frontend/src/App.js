import React from 'react';

import 'bulma/css/bulma.css'
import './styles/main.scss'

function App() {
  //the aside of suggested lists is hardcoded here for now as it was an additional feature we thought of that was simple to implement in this manner
  //we want to extract this out to the backend so that here we just make an API call to get the latest 9 suggestions
  
  return (
    <div className="App">

      <section className='section'>
        <div className='container'>
          <h1>Create a list</h1>
            <div className='container columns'>

              <form className='form column'>

              </form>

              <aside className='aside column columns'>
                <h2>Start with one of our lists</h2>

                <div className='column'>
                  <img alt='imageName'/>
                  <span>img above, text over img</span>
                </div>
                <div className='column'>
                  <img alt='imageName'/>
                  <span>img above, text over img</span>
                </div>
                <div className='column'>
                  <img alt='imageName'/>
                  <span>img above, text over img</span>
                </div>
                <div className='column'>
                  <img alt='imageName'/>
                  <span>img above, text over img</span>
                </div>
                <div className='column'>
                  <img alt='imageName'/>
                  <span>img above, text over img</span>
                </div>
                <div className='column'>
                  <img alt='imageName'/>
                  <span>img above, text over img</span>
                </div>
                <div className='column'>
                  <img alt='imageName'/>
                  <span>img above, text over img</span>
                </div>
                <div className='column'>
                  <img alt='imageName'/>
                  <span>img above, text over img</span>
                </div>
                <div className='column'>
                  <img alt='imageName'/>
                  <span>img above, text over img</span>
                </div>

              </aside>

            </div>
        </div>
      </section>




    </div>
  )
}

export default App;
