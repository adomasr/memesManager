import React from 'react';

import Sidebar from '../Components/Sidebar';
import MemesList from '../Components/MemesList';
import useLikedMemes from '../customHooks/useLikedMemes';

export default function Library() {
    return (
        <div className='container-fluid'>
            <div className="row">
                <Sidebar/>
                <MemesList customHook={useLikedMemes}/>
            </div>      
        </div>
    );
};