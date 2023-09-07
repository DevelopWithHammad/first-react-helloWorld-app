import react from 'react';
import reactDOM from 'react-dom';
import './style.css'

function Hi() {
  return <div>
    Hello<strong> Hammad Ur Rehman</strong>

  <ul>
    <li>List 1</li>
    <li>List 2</li>
    <li>List 3</li>
    <li>List 4</li>
  </ul>

<div className='last'>{5 + 10}</div>


  </div>
}

reactDOM.render(<Hi></Hi>, document.querySelector("#root"))