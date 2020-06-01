import React from 'react';

const Superlike = ({userId, modifySuperficialChoices}) => (
    <button 
    type="button"
    onClick={() => modifySuperficialChoices(userId, 'ADD_TO_SUPERLIKED_USER')}
    >
        <img src="images/misc/superlike.png" alt="SUPERLike User" />
    </button>
)

export default Superlike;