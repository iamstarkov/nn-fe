import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from "..";
import "./style.css"
import * as actions from '../../actions';
import {toggleTheme} from "../../actions";
import { connect } from 'react-redux';

const mainMenu = [
    {text: 'New', url: 'https://news.ycombinator.com/newest'},
    {text: 'Show', url: 'https://news.ycombinator.com/show'},
    {text: 'Submit', url: 'https://news.ycombinator.com/submit'},
];

export const Header = (props) => (
    <div className="header">
        <Link to="/" className='header__logo'>
           <img src="https://news.ycombinator.com/y18.gif" alt={"React news logo"}/>
            React news
        </Link>
        <div className="header__menu">
            <Menu links={mainMenu}/>
        </div>
        <button onClick={e => {props.toggleTheme()}}>toggle theme</button>
    </div>
);

const mapDispatchToProps = {
    toggleTheme: actions.toggleTheme,
};

export default connect(null, mapDispatchToProps)(Header);