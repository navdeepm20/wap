import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
import FetchData from '../components/fetcher/FetchData';


export const GetDataContext = createContext();

function GetData(props) {
	const [wdata,setWdata] = useState(false)
	
	const getFormData = async (city) => {
		const res = await FetchData(city)
		
		
		
		
		return res
	
		
	}
	return (
		<GetDataContext.Provider value={{getFormData,wdata,setWdata}}>
			{props.children}
		</GetDataContext.Provider>
	)
}

export default GetData
