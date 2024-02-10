import React, { useEffect, useLayoutEffect } from 'react';

const UseLayoutEffect = () => {

    useLayoutEffect(() => {
        console.log("UseLayoutEffect")
    }, [])

    useEffect(() => {
        console.log("UseEffect")
    }, [])

    return (
        <div>
            <h1>UseLayoutEffect</h1>
            <div>
                <h3 style={{ display: 'inline' }}>UseLayoutEffect</h3>
                <span style={{ display: 'inline' }}> runs before rendering the page</span>
            </div>
            <div>
                <h3 style={{ display: 'inline' }}>UseEffect</h3>
                <span style={{ display: 'inline' }}> runs after rendering the page</span>
            </div>
        </div>
    );
};

export default UseLayoutEffect;
