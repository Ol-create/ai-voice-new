import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

const alankey = '330f418252034aa6759dadb69aa7e1732e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

	useEffect(() => {
		alanBtn({
             KEY: ALAkEY,
		}, [])
	})
	return (
		<div>
			<h1>Alan AI News Application</h1>
		</div>
	)
}

export default App;
