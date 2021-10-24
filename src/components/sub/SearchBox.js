import React from 'react'
import Paper from '@mui/material/Paper'
import search from '../../imgs/search/search.svg'
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import {useContext}from 'react'
import { GetDataContext } from '../../contexts/GetData'
import LinearProgress from '@mui/material/LinearProgress';
import { globalStateContext } from '../../contexts/GlobalStates';

///////state///////////
import {useState} from 'react'



export default function SearchBox(props) {

	const [value,setVal] = useState('')
	const Dcontext = useContext(GetDataContext)
	const GSContext = useContext(globalStateContext)
	
	const submitForm = async () =>
	{	
		
			GSContext.setShowProg(true)
			const response = await Dcontext.getFormData(value)
			const res_json = await response.json()
			if(response.status==200)
			{
			
				setTimeout(()=>{
					GSContext.setShowProg(false)
					props.setAlertMsg('Success')
					props.setAlertType("success")
					props.setAlert(true)
					Dcontext.setWdata(res_json)
				},2000)
				
				
				
				
			}
			else
			{
				
			}
			
		
	}
	return (
		<>
			<Grid container spacing={4} sx={{justifyContent: 'center',mt: 5}}>
				<Grid item xs={12} md={12}>
					<div className="search-img-container">
						<img src={search} alt="search-wheather" style={{margin: 'auto',width: '200px',display: 'block'}} />
					
					</div>
				</Grid>
				<Grid item xs={12} sm={12}>
					<div className="search-input-container">
						<TextField fullWidth sx={{display: 'inline-block'}} label="Enter Your City to Get Weather" value={value} onChange={(e)=>{setVal(e.target.value)}} InputProps={{
						endAdornment: (
							<IconButton>
							<SearchIcon onClick={()=>{
								submitForm()
								
								}}/>
							</IconButton>
                  ),
                }}/>
						
						
					
					</div>
				</Grid>
				<Grid item xs={2} sm={2}>
					<div className="btn-container" >
							
							
							{GSContext.showProg ? <LinearProgress /> : ""}
							
						
					</div>
				</Grid>
				
			</Grid>
			
			
		</>
		
	)
}
