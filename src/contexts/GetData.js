import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const GetDataContext = createContext();

function GetData(props) {
	const getFormData = (city) => {
		console.log(city)
	}
	return (
		<GetDataContext.Provider value={{getFormData}}>
			{props.children}
		</GetDataContext.Provider>
	)
}

export default GetData
