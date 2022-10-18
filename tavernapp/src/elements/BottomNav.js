import { NavLink } from "react-router-dom";
import React from 'react';

export default function BottomNav() {
    return (
        <div className="bottom-nav">
            <NavLink to="/community" end><img src="/img/community.png" alt="Community"></img></NavLink>
            
        </div>
    )
}