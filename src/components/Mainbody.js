import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import SearchBox from './sub/SearchBox';
import Grid from '@mui/material/Grid';
import GetData from '../contexts/GetData';

const MainBody = () =>
{
	
	
	return(
		<Container maxWidth="xl">
			{/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
			
			<Grid container spacing={1} sx={{justifyContent: 'center'}}>
				<Grid item xs={8}>
					<GetData>
						<SearchBox />
					</GetData>
				</Grid>
				
			</Grid>
		</Container>
	)
}

export default MainBody																			