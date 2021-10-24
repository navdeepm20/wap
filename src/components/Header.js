import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
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
			<Drawer anchor="left" open={drawerState} onBlur={()=>{setDrawerState(false)	}} sx={{}}>
			<List>
																								{['Home', 'About', 'Contact'].map((text, index) => 						(
																									<ListItem button key={text}>
																										<ListItemIcon>
																											{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
																										</ListItemIcon>
																										<ListItemText primary={text} />
																									</ListItem>
																									))}
																							</List>
			{/* <MenuIcon onClick={()=>{setDrawerState(false)
			}}/> */}
				
          	</Drawer>
		</header>
	
	)
}

export default Header
