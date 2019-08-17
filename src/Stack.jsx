import React from 'react';
import './Stack.css';

const Stack = () => {
    return (
        <div className="stack container flex row">
            <div className="block">
                <div className="title">
                    Full Stack Development, With all the Berries. 
                </div>
                <p>
                    We are an enthusiastic team of designers and developers building web solutions here in Vancouver. 
                </p>
                <button>
                    Get to Know us
                </button>
            </div>
        </div>
    );
};

export default Stack;