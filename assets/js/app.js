import React from 'react'
import NavigationBar from './NavigationBar'

// the top level of the website
export default class App extends React.Component {
	render() {
		return (
			<div>
				<NavigationBar/>
				<h1>Testing 123</h1>
			</div>
		);
	}
}