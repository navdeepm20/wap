import React,{useContext,useState} from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import SearchBox from './sub/SearchBox';
import Grid from '@mui/material/Grid';
import GetData from '../contexts/GetData';
import GlobalState from '../contexts/GlobalStates';
import Alert from '@mui/material/Alert';
import WDisp from './sub/WDisp';
import { globalStateContext } from '../contexts/GlobalStates';
const MainBody = () =>
{
	const GSContext = useContext(globalStateContext)
	

	const [showAlert,setShowAlert] = useState(false)
	const [alertMsg,setAlertMsg] = useState("")
	const [alertType,setAlertType] = useState()
	return(
		<Container maxWidth="xl">
			
			{
				
				showAlert ? <Alert sx={{m: 2}} onClose={() => {setShowAlert(false)}} severity={alertType}>{alertMsg}</Alert> : ""
			}
		
			
			<Grid container spacing={1} sx={{justifyContent: 'center'}}>
				<Grid item xs={8}>
					<GetData>
						<GlobalState>
							<SearchBox alert={showAlert} setAlert={setShowAlert} setAlertMsg={setAlertMsg} setAlertType={setAlertType}/>
							<WDisp/>
						</GlobalState>
					</GetData>
				</Grid>
				
			</Grid>
		</Container>
	)
}

export default MainBody																			