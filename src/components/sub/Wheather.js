import React,{useContext} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GetDataContext } from '../../contexts/GetData';
import Icons from '../../images';


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
	const IconSelector = (id) =>
	{
		const iconCodes = {
			2: Icons.storm,
			3: Icons.rainy,
			5: Icons.rainy,
			6: Icons.snow,
			7: Icons.mist,
			800: Icons.sunny,
			801: Icons.cloudy
		}
		if(Math.round(id/100)==8)
		{
			
			if(id===801)
			{
				return iconCodes[801]
			}
			else if(id===800)
			{
				return iconCodes[800]
			}
			else{
				return iconCodes[801]
			}
		}
		switch(Math.round(id/100))
		{
			case 2:
				return iconCodes[2]
			case 3:
				return iconCodes[3]
			case 5:
				return iconCodes[5]
			case 6:
				return iconCodes[6]
			case 7:
				return iconCodes[7]
			default:
				return iconCodes[800]
		}

	}
    
	return (
		<div className="wheater-box wbox" style={{padding: '1rem'}}>
			<Typography variant="h5" component="div"> 
				{wdata.wdata ? `${wdata.wdata.name}, ${wdata.wdata.sys.country}`:""}
				
			</Typography>
			<Typography variant="overline"  component="div"> 
			{wdata.wdata ? dateBuilder(new Date()):""}
				
			</Typography>
			<Typography variant="h3" gutterBottom component="div" sx={{mt: 5}}> 
			
			{wdata.wdata ? Math.round(wdata.wdata.main.temp)  :""} 
			{wdata.wdata ? <span>&#8451;</span>:""}
			</Typography>
					
			
			{wdata.wdata ? <div className="wicon-container" style={{position: 'relative',width: '32px',height: '32px',margin: 'auto'}}>

				<img src={IconSelector(wdata.wdata.weather[0].id)} alt="weather-img" style={{position: 'absolute',left:0,width:'100%',height: '100%',objectFit:'cover'}}/>
			</div>: ""}
			<Typography variant="h4" gutterBottom component="div" sx={{mt: 5}} sx={{mt: '10px !important'}}> 
			
			{wdata.wdata ? wdata.wdata.weather[0].main:""}	
			</Typography>
			{wdata.wdata ? console.log(wdata.wdata.weather[0].id) : ""}
			
		</div>
	)
}

export default Wheather
