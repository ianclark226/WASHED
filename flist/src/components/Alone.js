import React from 'react';
import LikePerson from './LikedPerson';

const Alone = ({ activeUserImage, likedUsers, superLikedUsers }) => (
    <div className="alone">
        <p> Sorry, no F-Listers around you at the moment.</p>

        <span className="pulse">
            <img src={`/images/users/${activeUserImage}`} alt="You..." />
        </span>

        <div id="liked-people">
            <p>
                {likedUsers.length > 0 &&
                "F-Listers you liked. Hoping for a like back"}
            </p>

            {likedUsers.map(item => (
                <LikedPerson key={item.id} person={item} />
            ))}

            <p>{superLikedUsers.length && 'People you super liked'}</p>

            {superLikedUsers.map(item => (
                <SuperLikedPerson key={item.id} person={item} />
            ))}


        </div>
    </div>
)