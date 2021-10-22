import React from 'react'
import Paper from '@mui/material/Paper'
import search from '../../imgs/search/search.svg'
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import {useContext}from 'react'
import { GetDataContext } from '../../contexts/GetData'
///////state///////////
import {useState} from 'react'



export default function SearchBox(props) {

	const [value,setVal] = useState('')
	const a = useContext(GetDataContext)
	
	return (
		<>
			<Grid container spacing={1} sx={{justifyContent: 'center',mt: 10}}>
				<Grid item xs={8}>
					<div className="search-img-container">
						<img src={search} style={{margin: 'auto',width: '200px',display: 'block'}} />
					
					</div>
				</Grid>
				<Grid item xs={10}>
					<div className="search-input-container">
						<TextField fullWidth sx={{mt: 5}} label="Enter Your City" value={value} onChange={(e)=>{setVal(e.target.value)}}/>
						<div className="btn-container" style={{display: 'block',width: '173px',margin: 'auto'}} >
							<Button variant='contained' endIcon={<SendIcon/>} sx={{mt: 2}} size="medium" onClick={()=>{a.getFormData(value)}}>Get Wheather</Button>
						</div>
					
					</div>
				</Grid>
				
			</Grid>
			
			
		</>
		
	)
}
