import React from 'react';
import ParamEditor from './ParamEditor';

class App extends React.Component {

	render() {
		return	<ParamEditor
		params={[
			{
				"id": 1,
				"name": "Назначение",
				"type": 'string'
			},
			{
				"id": 2,
				"name": "Длина",
				"type": 'string'
			}
		]} 
		model={{
			"paramValues": [
				{
					"paramId": 1,
					"value": "повседневное"
				},
				{
					"paramId": 2,
					"value": "макси"
				}
			],
			colors: ['red', 'blue']
		}} 
		/>
	}
}

export default App;
