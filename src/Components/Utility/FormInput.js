import './header.css';
import  logoImg  from '../../images/logo.svg';
import React from 'react';
import Input from '../Utils/Input';

class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <span>
                    <img src={logoImg} width='50px' height='50px' />
                    {/* <img src={component_types} width='220px' height='220px' /> */}
                </span>
                Top Navigation
                <form>
                    <Input label="Enter Name" inputType="text" />
                    <Input label="Enter Email" inputType="email" />
                    <Input label="Enter Phone" inputType="number" />
                    <Input inputType="submit" />
                </form>
            </div>

            

            // <React.Fragment>
            //     <h1>Top Navigation</h1>
            // </React.Fragment>

            // <>
            //     <h1>Top Navigation</h1>
            // </>   
        )
    }
}

export default Header