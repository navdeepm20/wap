import React,{useContext} from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { GetDataContext } from '../../contexts/GetData';
function Wheather() {
	const wdata = useContext(GetDataContext)
	const dateBuilder = (d) => {
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();
	
		return `${day} ${date} ${month} ${year}`
	  }
	return (
		<div className="wheater-box wbox" style={{marginTop: "1rem"}}>
			<Typography variant="h4" component="div"> 
				{wdata.wdata ? `${wdata.wdata.name}, ${wdata.wdata.sys.country}`:""}
				
			</Typography>
			<Typography variant="overline"  component="div"> 
			{wdata.wdata ? dateBuilder(new Date()):""}
				
			</Typography>
			<Typography variant="h3" gutterBottom component="div" sx={{mt: 5}}> 
			
			{wdata.wdata ? Math.round(wdata.wdata.main.temp):""} <span>&#8451;</span>
			</Typography>
			<Typography variant="h3" gutterBottom component="div" sx={{mt: 5}}> 
			
			{wdata.wdata ? wdata.wdata.weather[0].main:""}	
			</Typography>
		</div>
	)
}

export default Wheather
