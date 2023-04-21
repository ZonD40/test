import React from 'react';

type Color = 'red' | 'green' | 'blue';

interface Param {
	id: number;
	name: string;
	type: 'string';
}
interface ParamValue {
	paramId: number;
	value: string;
}
interface Model {
	paramValues: ParamValue[];
	colors: Color[];
}
interface Props {
	params: Param[];
	model: Model;
}

interface State {
	paramValues: ParamValue[];
}

class ParamEditor extends React.Component<Props, State> {
	state = {
		paramValues: this.props.model.paramValues
	};

	constructor(props: Props) {
		super(props);


		this.handleChange = this.handleChange.bind(this);
		this.getModel = this.getModel.bind(this);
	}

	public getModel(): Model {
		return {
			paramValues: this.state.paramValues,
			colors: this.props.model.colors
		};
	}

	handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			paramValues: this.state.paramValues.map(elem => elem.paramId === +event.target.id 
				? 
				{paramId: elem.paramId, value: event.target.value} 
				: 
				elem)
		});
	}

	render() {
		return <div>
			{this.props.params.map((param) => {
				const value = this.state.paramValues.find(value => value.paramId === param.id)?.value;
	
				return <div key={param.id}>
					<label>{param.name}</label> 
					<input type="text" value={value} id={String(param.id)} onChange={this.handleChange}/>
				</div>
			})}
			<button onClick={() => console.log(this.getModel())}>getModel</button>
		</div>	
	}
}

export default ParamEditor;
