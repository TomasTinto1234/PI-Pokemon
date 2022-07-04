import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNamePokemons } from '../actions';
import "./SearchBar.css"

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getNamePokemons(name))
        setName("")
    }

    return ( 
        <div className='search'>
            <input type='text' placeholder='  Pokemon name...'
            onChange={e => handleInputChange(e)}></input>
            <button className="select" type='submit' onClick={e => handleSubmit(e)}>Search</button>
        </div>
    )
}
