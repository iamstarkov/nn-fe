import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {distanceInWordsToNow} from 'date-fns';
import {api} from '../../utils';
import "./style.css"


export class    NewsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {item: {}}
    }

    componentDidMount() {
        api.getItem(this.props.id).then(item => this.setState({item}));
    }

    render() {
        const item = this.state.item;
        if (item.time === undefined) return <div>Loading ...</div>;
        const timeInMs = item.time * 1000;
        const age = distanceInWordsToNow(new Date(timeInMs));
        const comments = (item.descendants === 0) ? "discuss" : item.descendants + " comments";
        return (
            <div>
                <div className={"news_item"}>
                    <a href={item.url} className={"title"}>{item.title}</a>
                    <br/>
                    <Link to={`/item/${item.id}`}>{item.score}</Link>
                    {' by '}
                    <Link to={`/item/${item.id}`}>{item.by}</Link>
                    {' '}
                    <Link to={`/item/${item.id}`}>{age}</Link>
                    {'  | '}
                    <Link to={`/item/${item.id}`}>{comments}</Link>
                </div>
            </div>
        )
    }
}