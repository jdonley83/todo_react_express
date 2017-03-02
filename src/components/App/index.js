// src/components/App/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Todo from '../todo';

import './style.css';

class App extends Component {
	// static propTypes = {}
	// static defaultProps = {}
	// state = {}

	render() {
		const { className, ...props } = this.props;
		return (
			<div className={classnames('App', className)} {...props}>
				<div className="App-header">
					<h2>Todo - with React.js and Express.js</h2>
				</div>
				<p className="App-intro">
					Todo list implemented using React.js and Express.js
				</p>
				<Todo></ Todo>
			</div>
		);
	}
}

export default App;