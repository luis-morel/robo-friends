import React, { Component } from 'react';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
// import { robots } from './assets/robots';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json(); // returning JSON is critical here
            })
            .then(users => {
                this.setState({ robots: users })
            })
    };

    // Arrow functions allow use of 'this'
    handleSearchInput = (event) => {
        this.setState({ searchField: event.target.value });
    };

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        console.log("Robots length: ", robots.length);
        if (!robots.length) {
            return <h1>Loading...</h1> // Could use a loading bar here instead.
        }
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchInput={this.handleSearchInput} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    };

};

export default App;
