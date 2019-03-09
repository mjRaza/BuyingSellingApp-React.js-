import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks =()=>
{
    return (
        <ul className='right'>
            <li><NavLink to='/create'>Create Products</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>Jaffar</NavLink></li>

        </ul>

    );
  }

export default SignedInLinks;
