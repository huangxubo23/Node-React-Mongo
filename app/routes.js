import React from 'react';
import {Route, NotFoundRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddCharacter from './components/AddCharacter';
import Character from './components/Character';
import CharacterList from './components/CharacterList';
import Stats from './components/Stats';

export default (
    <Route handler={App}>
        <Route path='/' handler={Home} />
        <Route path='/add' handler={AddCharacter} />
        <Route path='/characters/:id' handler={Character} />
        <Route path='/shame' handler={CharacterList} />
        <Route path='/stats' handler={Stats} />
        <Route path=':category' handler={CharacterList}>
            <Route path=':race' handler={CharacterList}>
                <Route path=':bloodline' handler={CharacterList} />
            </Route>
        </Route>
    </Route>
);