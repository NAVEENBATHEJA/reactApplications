import React from 'react';

export default function ({name,price}) {
    return (
        <div>
            <h3>{name}</h3>
            <h3>{price}</h3>
        </div>
    );
};