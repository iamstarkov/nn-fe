import React, {Component} from 'react';
import {api} from '../../utils';
import {NewsItemList} from "../";
import './style.css';


const isArraysEqual = (arr1 = [], arr2 = []) => arr1.toString() === arr2.toString();

export class PageNewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ids: undefined,
        };
        this.fetchIds = () => {
            api.getItemsIds()
                .then(ids => {this.setState({ids})})
                .catch(err => console.error(err));
        }
    }

    componentDidMount() {
        console.log("mounted", this);
        this.fetchIds();
    }

    shouldComponentUpdate(nextProps, nextState) {
        const shouldUpdate = !isArraysEqual(this.state.ids, nextState.ids);
        console.log('should update', shouldUpdate);
        return shouldUpdate
    }

    render() {
        const { ids } = this.state;
        console.log('render data:', ids);
        if (!ids) {
            return <div>Loading…</div>
        }
        return (
            <div>
                <NewsItemList ids={ids}/>
                <button onClick={this.fetchIds}>Refresh</button>
            </div>
        );
    }
}