import React from 'react';
import './DataCardsStyle.css';

const DataCards = () => {
  return (
    <div>

      <section>
        <div className='mainer-div'>
          <div className='carder-div'>
            <img id='ones-image' src={'/download.jpg'} />
            <p id='lorem'>Lorem ipsum dolor sit amet consectetur  </p>
            <button id='button-read'>Read More</button>
            <a href='#' id='anchor-tag'>Tag will be here Another tag wil be here Another tag one more tag here tag another one more tag here</a>
            <div className='views-date'>
              <p>41 Views</p>
              <p>December 10, 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DataCards;