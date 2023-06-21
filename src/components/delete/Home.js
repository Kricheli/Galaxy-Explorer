import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(){
  return (
    <div>
      <button>
      <Link to="/nasaphoto">See into the stars</Link>
      </button>
    </div>
  )
}