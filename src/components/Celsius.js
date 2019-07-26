import React, { useContext } from 'react';
import { Temperature } from '../App'

const Celsius = () => {
	const {cels, toF} = useContext(Temperature)
	return (
		<div id="celsius">
			<h2>Celsius</h2>
	        <input 	type = "number"
	            	value = { cels }
	            	onChange = { toF }>
	        </input>
	    </div> 
	    )
	}

export default Celsius;