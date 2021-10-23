import React from 'react'
import Box from '@mui/material/Box';
import Bg from '../../imgs/wheather/bg.jpg'
import Wheather from './Wheather';
function WDisp() {
	return (
		<div className="wheather-box-container" style={{width: '100%',height: '200px',marginTop: '2rem'}}>
				
					<Box sx={{width: '100%',height: 350,background: `url(${Bg}) no-repeat center/cover`, display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
						<Wheather/>
					</Box>

					
		</div>
	)
}

export default WDisp
