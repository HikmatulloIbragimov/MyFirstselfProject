import React from 'react';
import { Carousel } from 'antd';
import PopularProducts from './popularProducts';
const contentStyle = {
    width: '60%',
    height: '300px',
    color: '#fff',
    lineHeight: '300px',
    textAlign: 'center',
    background: '#364d79',
    margin: '10px auto'
};
const App = () => (
    <div>
        <Carousel autoplay>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
        <PopularProducts/>
    </div>
);
export default App;