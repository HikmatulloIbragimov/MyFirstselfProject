import React from 'react';
import Desktop from './Pages/desktop';
import Nav from './Pages/nav'



const style = {
    background: '#CBCBCB',
    height:'auto'
}
const Main = () => {
    return (
        <div style={style}>
            <Nav/>
            <Desktop/>
        </div>
    );
}

export default Main;



