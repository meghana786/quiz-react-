import React, { Component } from 'react';
import '../App.css';

class QuizComponent extends Component {
  render() {
    return (
      <div className='quiz'>
        <h2>Question</h2>
        <p id='number'>1 of 15</p>
        <h2>Which is the only mammal that can jump?</h2>
        <ul className='answers'>
          <li className='option'>Dog</li>
          <li className='option'>Elephant</li>
          <li className='option'>Goat</li>
          <li className='option'>Lion</li>
        </ul>
        <div className='buttons'>
          <button className='pre'>Previous</button>
          <button className='next'>Next</button>
          <button className='quit'>Quit</button>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
