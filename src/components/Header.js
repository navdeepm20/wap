import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
function Header() {
	const [drawerState,setDrawerState] = useState()
	return (
		<header>
			<AppBar position="static">
				
				<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					<MenuIcon onClick={()=>{setDrawerState(true)}}/>
				</IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					GetWheather
				</Typography>
				</Toolbar>
			</AppBar>
			<Drawer anchor="left" open={drawerState} style={{width: '200px'}} width="500px">
				GetWheather <MenuIcon onClick={()=>{setDrawerState(false)
				console.log(drawerState)}}/>
				
          	</Drawer>
		</header>
	
	)
}

export default Header
