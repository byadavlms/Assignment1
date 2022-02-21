import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
    return (
        <React.Fragment>
            <h1>Home Page</h1>
            <Link to={'register'}> User Registration </Link> | <Link to={'anagram-test'}> Anagram Test Function </Link>
        </React.Fragment>
    )
}

export default Home;
