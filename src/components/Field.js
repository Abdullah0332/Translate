import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Field extends Component {

    render(){

        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {(value) => value === 'english' ? 'Name' : 'Naam'}
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        )
    }
}
