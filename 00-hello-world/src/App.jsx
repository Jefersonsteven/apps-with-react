import { useEffect, useState } from 'react'
import './App.scss'
import User from './components/User/User';
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

  function isVerified(index) {
    switch(index){
      case 0:
        return 'notVerified';
      case 1:
        return 'gold';
      case 2:
        return 'blue';
    }
  }

  return (
    <div className="App">
      <div className='Card'>
        <h4>Who to follow</h4>
        <div className='Users'>
          {users?.map(({ picture, name, login }, i) => {
            return (
              <User
                key={login.uuid}
                src={picture.thumbnail}
                name={`${name.first} ${name.last}`}
                username={login.username}
                verifiedIcon={ (isVerified(i) === 'gold' || isVerified(i)  === 'blue') 
                && 
                <Verified
                  fill={isVerified(i) === 'gold' ? "#ffc506" : "#1da1f2"}
                />}
                verified={isVerified(i)}
                isFollowing={i % 2 === 0 ? true : false}
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
