import React from 'react';
import ParamEditor, {Color, Param} from './ParamEditor';

const params: Param[] = [
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
];

const model = {
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
	colors: [Color.red, Color.green]
}

class App extends React.Component {

	render() {
		return	<ParamEditor
		params={params} 
		model={model} 
		/>
	}
}

export default App;
