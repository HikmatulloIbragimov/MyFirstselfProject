import React from 'react';
import styled from 'styled-components';

const PopularProducts = () => {
    return (
        <BoxContent>
            <div className="first">
                <div className="popular">
                    <h3>Popular Products</h3>
                </div>
                <div className="products">
                    <div className="box">
                        <img src="#" alt="" />
                        <div className="title">
                            <h4>Lorem, ipsum.</h4>
                        </div>
                        <div className="about">
                            <p>Lorem ipsum dolor sit
                                amet consectetur adipisicing
                                elit. Adipisci, fugit.</p>
                        </div>
                        <div className="favourite">
                            <div className="icons">

                            </div>
                            <div className="cost">
                                <p>$15000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second">
                <div className="featured">
                    <h3>Featured Products</h3>
                </div>
                <div className="products2">
                    <div className="box">
                        <img src="#" alt="" />
                        <div className="title">
                            <h4>Lorem, ipsum.</h4>
                        </div>
                        <div className="about">
                            <p>Lorem ipsum dolor sit
                                amet consectetur adipisicing
                                elit. Adipisci, fugit.</p>
                        </div>
                        <div className="favourite">
                            <div className="icons">

                            </div>
                            <div className="cost">
                                <p>$15000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </BoxContent>
    );
}

export default PopularProducts;



const BoxContent = styled.div`
    width: 100%;
    padding:10px 50px;
    .popular{
        h3{
            color: #AEAFB1;
        }
    }
    .featured{
        h3{
            color: #AEAFB1;
        }
    }
    
    .first{
        .products{
            margin-top: 20px;
        .box{
        width: 250px;
        height: 250px;
        border-radius: 10px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .about{
            margin: 0 30px;
        }
    }
    }
    }
    .second{
        margin-top: 50px;
        .products2{
            margin-top: 20px;
        .box{
        width: 250px;
        height: 250px;
        border-radius: 10px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .about{
            margin: 0 30px;
        }
    }
    }
    }
    
`