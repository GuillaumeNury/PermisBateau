import React from 'react';

export default function IndexPage()
{
    return (
        <div>
            <div><a href="#/challenge" className="button primary">Lancer le test</a></div>
            <div><a href="#/level-builder" className="button">Générateur de niveaux</a></div>
            <div><a href="#/all" className="button">Voir tous les niveaux</a></div>
        </div>
    );
}