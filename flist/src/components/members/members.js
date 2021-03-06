import React, { useState} from 'react';

import logo from './logo.svg';
import './App.css';
import data from '../../data.json';

const Members = () => {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikeUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  const modifySuperficialChoices = (userId, action) => {
      const newPeople = [...person];
      const newLikedUsers = [...likedUsers];
      const newSuperLikedUsers = [...superLikedUsers];
      const newDislikedUsers = [...dislikedUsers];
  }

  switch (action) {
    case 'ADD_TO _LIKED_USERS':
     if (!people[activeUser].likedUsers.includes(userid)) {
         newPeople[activeUser].likedUsers.push(userId);

         setLikedUsers(newLikedUsers);
         setPeople(removedPersonFromDataSrc(people, userId));
     }
      break;

      case 'ADD_TO _DISLIKED_USERS':
     if (!people[activeUser].dislikedUsers.includes(userid)) {
         newPeople[activeUser].dislikedUsers.push(userId);

         dislikedUsers(newDislikedUsers);
         setPeople(removedPersonFromDataSrc(people, userId));
     }
      break;


      case 'ADD_TO _SUPERLIKED_USERS':
     if (!people[activeUser].superLikedUsers.includes(userid)) {
         newPeople[activeUser].supeLikedUsers.push(userId);

         superLikedUsers(newSuperLikedUsers);
         setPeople(removedPersonFromDataSrc(people, userId));
     }
      break;
  }
  return (
    <div className="members">
      <Header />

      {people[1] ? (
        <Person
        key={person[1].id}
        person={people[1]}
        modifySuperficialChoices={modifySuperficialChoices}
        likedUsers={likedUsers}
        />
      ): (
        <Lonely
        activeUserImage={people[activeUser].image}
        likedUsers={likedUsers}
        superLikedUsers={superLikedUsers}
        />
      )}
    </div>
  )
}

export default Members;