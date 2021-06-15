// This is the component we can inport in App.tsx so that we dont have to
// set up routing in App.tsx

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Webinar from './../pages/WebinarPage'
const theme = createMuiTheme({
	palette: {
	  primary:{
		main:'#020652',
	  },
	 secondary:{
		main:'#FFA500',
	  },
  
	},
  });
const MainComponent: React.FunctionComponent = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
		<div>
			<Router>
				<Route exact path='/' component={Webinar} />
			</Router>
		</div>
	
		</ThemeProvider>
	);
};

export default MainComponent;
