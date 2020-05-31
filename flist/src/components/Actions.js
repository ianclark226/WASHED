import React from 'react';
import Rewind from './actions/Rewind';
import Dislike from './actions/Dislike';
import Like from './actions/Like';
import Superlike from './actions/Superlike';

const Actions = ({ person, modifiySuperificialChoices }) => (
    <div id="actions">
        <Rewind userId={person.id} />
        <Dislike userId={person.id}
        modifiySuperificialChoices={modifiySuperificialChoices}
        />
         <Like userId={person.id}
        modifiySuperificialChoices={modifiySuperificialChoices}
        />
         <Superlike userId={person.id}
        modifiySuperificialChoices={modifiySuperificialChoices}
        />
        

    </div>
);

export default Actions;