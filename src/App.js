import React, {Component} from 'react';
import {Content, Header, Footer, Page} from './components';

class App extends Component {
    render() {
        return (
            <Page>
                <Header/>
                <Content/>
                <Footer/>
            </Page>
        );
    }
}

export default App;
