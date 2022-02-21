import React from 'react';

import { Link } from 'react-router-dom';

function AnagramTest() {
    return (
        <React.Fragment>
            <h1>Anagram Test Function</h1>
            <Link to={'/'}>Home</Link>
            <div style={{
                margin: '25px',
                padding: '10px',
                background: '#333',
                maxWidth: '600px',
                color: '#fff'
            }}>
                <pre>
                    {
                        `function isAnagram(string1: string, string2: string) {
    let len1 = string1.length;
    let len2 = string2.length;
    if (string1.length !== string2.length) {
        return false;
    }

    const str1 = string1.split('').sort().join('');
    const str2 = string2.split('').sort().join('');
    if (str1 === str2) {
        return true;
    }
    return false;
}
isAnagram('cellar', 'recall');
`
                    }
                </pre>
            </div>
            <hr />
            <p>
                <i>
                    Note: You can find "TempTracker" class file on the root.
                </i>
            </p>
        </React.Fragment>
    )
}

export default AnagramTest;
