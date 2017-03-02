// src/components/todo.js
import React, { Component } from 'react';
import classnames from 'classnames';

class Todo extends Component {
	render() {
		return (
			<div>
				<div>
					<input type='text' name='new_task' />
				</div>
				<div>
					<ul>
						<li>task</li>
						<li>task</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Todo;