import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
    return (
        <React.Fragment>
            <h1>Home Page</h1>
            <Link to={'register'}>Register</Link>
        </React.Fragment>
    )
}

export default Home;
