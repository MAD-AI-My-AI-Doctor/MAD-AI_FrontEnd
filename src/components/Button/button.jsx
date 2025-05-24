import React from 'react';
import '../button/ButtonStyle.css';

const Button = ({ button }) => {
  return (
    <div>
      <section>
        <button className='first-button'>{button}</button>
      </section>
    </div>
  )
}

export default Button;