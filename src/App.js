import React, {Component} from 'react';
import {Content, Footer, Header, Page} from './components';

class App extends Component {
    render() {
        return (
            <Page>
                <div>
                    <Header/>
                    <Content/>
                </div>
                <Footer/>
            </Page>
        );
    }
}

export default App;
