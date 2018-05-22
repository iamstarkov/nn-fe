import React from 'react';
import {api} from '../../utils';
import {NewsItemList} from "../";
import './style.css';

export const PageNewsList = () => (
        <NewsItemList ids={api.getItemsIds()}/>
);