import React, {useContext} from 'react';

import {ContextObj} from '../Components/Context';
import MemeCard from '../Components/MemeCard';


export default function useCreatedMemes() {
    const {completedMemes} = useContext(ContextObj);
    if (completedMemes.length < 1) return;
    return completedMemes.map((item, index)=> <MemeCard key={index} url={item.url}/>);
};