import React from 'react';

function Person({name,age,hobbies}) {
    const vote= age >= 18 ? "Go Vote" : "You Must be 18";
    const hobbies = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>
                Learn more about this person:
            </p>
                <ul>
                    <li>{name}</li>
                    <li>{age}</li>
                <ul>
                    {hobbies}
                </ul>
            </ul>
            <h3>{vote}</h3>
        </div>
    );
}

export default Person;