import React, { useContext } from 'react';
import { Temperature } from '../App'

const Fahrenheit = () => {
	const {fahr, toC} = useContext(Temperature)
	return (
		<div id="fahrenheit">
			<h2>Fahrenheit</h2>
			<input	type = "number" 
            		value = { fahr } 
           			onChange = { toC }>
           	</input>
        </div>
	    )
	}

export default Fahrenheit;