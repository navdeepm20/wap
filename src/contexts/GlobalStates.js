import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const globalStateContext = createContext();
function GlobalState(props) {

	const [showProg,setShowProg] = useState(false)
	
	
	return (
		<globalStateContext.Provider value={{showProg,setShowProg}}>
			{props.children}
		</globalStateContext.Provider>
	)
}

export default GlobalState
