
import React from 'react';
import './loginStyle.css';

import { Link } from 'react-router-dom';


const RegisterLine = () => (

	<div className="mt-3">
        <p className="text-center text-muted small">Don't have an account? 
				<Link to={`/register`} >Sign up here!</Link></p>
	</div>
);


export default RegisterLine;
