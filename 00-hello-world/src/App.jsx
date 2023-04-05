import { useEffect, useState } from 'react'
import './App.css'
import Item from './components/button';
import Verified from './components/icons/Verified';

function App() {
  const BASE_URL = 'https://randomuser.me/api/?results=3';
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch(BASE_URL)
    .then(response => response.json())
    .then(data => {
      setUsers(data.results);
    })
  },[]);

  return (
    <div className="App">
      <div className='Card'>
        <h4>Who to follow</h4>
        <div className='Users'>
          {users?.map(({ picture, name, login }, i) => {
            return (
              <Item
                key={login.uuid}
                src={picture.thumbnail}
                name={`${name.first} ${name.last}`}
                username={login.username}
                verified={<Verified
                  fill={i === 1 ? "#1da1f2" : "#ffc506"}
                />}
              />
            )
          })}
        </div>
        <a href="">Show more</a>
      </div>
    </div>
  )
}

export default App
