import React from 'react';
import '../css/App.css'
import EldenRing from '../apis/EldenRing';
import BossList from './BossList';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {

    state = { bosses: [] }

    async fetchBosses() {
        const response = await EldenRing.get('',{});
        this.setState({ bosses: response.data.data });
    }

    componentDidMount() {
        this.fetchBosses();
    }

    render() {
        return (
            <div className="app">
                <Header />
                <BossList 
                    bosses={this.state.bosses}
                />
                <Footer numOfBosses={this.state.bosses.length} />
            </div>    
        );
    }
}

export default App