import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1 id='main' className='Heading'>This statment is coming from JSX</h1>
    //     </div>
    // )

    // return React.createElement('Div', null, '<h1>This statment is coming from JSX</h1>')

    return React.createElement(
        'div', 
        {id: 'main', className:'heading'}, 
        React.createElement('h1', null, 'This statment is coming from JSX')
    )
}

export default Hello