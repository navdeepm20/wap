import React from 'react'
import {useState} from 'react'

const key = '7581f564aa9dbd5053ee50e70636f6f5'
async function FetchData(props) {
	console.log(``)
	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props}&appid=${key}&units=metric`)
	
	return res
	
}

export default FetchData
