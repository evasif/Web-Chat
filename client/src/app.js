import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container/Container';
import '../styles/site';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container/>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
