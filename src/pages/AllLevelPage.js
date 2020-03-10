import React from 'react';
import Challenge from '../components/Challenge';
import { levels } from '../data/levels';

export default function AllLevelPage()
{
    return (
        <div style={{ display: "inline-flex", flexWrap: "wrap" }}>
            <h3>{levels.length} niveaux</h3>
            {levels.map((lvl, idx) => <div key={idx} style={{ border: "1px solid #666", flexGrow: 1 }}>
                <Challenge level={lvl}>
                    <div style={{ textAlign: 'center' }}>{lvl.solution}</div>
                </Challenge>
            </div>)}
        </div>
    );
}