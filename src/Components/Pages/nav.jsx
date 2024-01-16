import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <Container>
            <div className='page'>
                <div className='logo'>
                    <h3>Lg</h3>
                    <i class="bi bi-justify"></i>
                </div>
                <div>
                    <input placeholder='Search Products & Trends...' type="text" className='search' />
                </div>
                <div className='button'>
                    <button className='log'>Sign Up / Login</button>
                    <button className='cart'>Cart</button>
                </div>
            </div>
        </Container>
    );
}

export default Nav;


const Container = styled.div`
    .page{
        width: 85%;
        display: flex;
        margin:0 auto;
        padding:20px 0;
        align-items: center;
        justify-content: space-between;

    }
    
    
    .logo{
        display: flex;
        align-items: center;
        gap: 30px;
        i{
            font-size: 30px;
        }
    }
    .search{
        width:600px;
        border: none;
        padding: 10px 30px;
        border-radius: 10px;
        outline: none;
        &::placeholder{
            color: #CBCBCB;
        }
    }
    .button{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;
        button{
            border: none;  
        }
    }
    
    
`