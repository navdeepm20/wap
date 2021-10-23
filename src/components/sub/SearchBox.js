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
			
			if(response.status==200)
			{
			
				setTimeout(()=>{
					GSContext.setShowProg(false)
					props.setAlertMsg('Success')
					props.setAlertType("success")
				
					props.setAlert(true)
				},1000)
				
				
				
				
			}
			else
			{
				
			}
			
		
	}
	return (
		<>
			<Grid container spacing={1} sx={{justifyContent: 'center',mt: 5}}>
				<Grid item xs={8}>
					<div className="search-img-container">
						<img src={search} alt="search-wheather" style={{margin: 'auto',width: '200px',display: 'block'}} />
					
					</div>
				</Grid>
				<Grid item xs={10}>
					<div className="search-input-container">
						<TextField fullWidth sx={{mt: 5}} label="Enter Your City" value={value} onChange={(e)=>{setVal(e.target.value)}}/>
						<div className="btn-container" style={{display: 'block',width: '173px',margin: 'auto'}} >
							<Button variant='contained' endIcon={<SendIcon/>} sx={{mt: 2}} size="medium" onClick={()=>{
								submitForm()
								
								}}>Get Wheather</Button>
							{GSContext.showProg ? <LinearProgress /> : ""}
							
						
						</div>
						
					
					</div>
				</Grid>
				
			</Grid>
			
			
		</>
		
	)
}
