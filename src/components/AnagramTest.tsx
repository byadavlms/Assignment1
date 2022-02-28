import React from 'react';

import { Link } from 'react-router-dom';

import { isAnagram } from '../utils';

function AnagramTest() {
    const [anagramStatus, setAnagramStatus] = React.useState<string>('');
    const [operand1, setOperand1] = React.useState<string>('');
    const [operand2, setOperand2] = React.useState<string>('');

    const handleCheckAnagram = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();

        const isTrue = isAnagram(operand1, operand2);

        if (isTrue) {
            setAnagramStatus('The strings you entered are anagram!');
        } else {
            setAnagramStatus('');
        }
    }

    return (
        <React.Fragment>
            <h1>Anagram Test Function</h1>
            <Link to={'/'}>Home</Link>
            <div>
                <div className='Form-Group-Container'>
                    <input
                        type="text"
                        placeholder="Enter First String..."
                        name="operand1"
                        id="operand1"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOperand1(e.target.value)}
                        style={{
                            marginRight: '10px'
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Enter Second String..."
                        name="operand2"
                        id="operand2"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOperand2(e.target.value)}
                        style={{
                            marginRight: '10px'
                        }}
                    />
                    <button onClick={handleCheckAnagram}>Check Anagram</button>
                    {anagramStatus && <p style={{ color: 'green', fontWeight: 600 }}>{anagramStatus}</p>}
                </div>
            </div>
            {/* <div style={{
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
            </p> */}
        </React.Fragment>
    )
}

export default AnagramTest;
