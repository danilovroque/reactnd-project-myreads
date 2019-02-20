import React from 'react';

const NoMatch = ({location}) => (
    <div>
        <h3>Página não encontrada <code>{location.pathname}</code></h3>
    </div>
)

export default NoMatch;