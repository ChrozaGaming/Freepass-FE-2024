import React from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <SearchBar />
                <WeatherCard />
            </div>
        );
    }
}

export default App;