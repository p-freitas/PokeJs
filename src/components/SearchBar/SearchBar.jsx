import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Content } from './styles.js';

import SearchIcon from '../../assets/images/pokeball-icon.jpg'

const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState('')

    const initial = useRef(true);
    
    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);
        console.log(state)
        return () => clearTimeout(timer);
    }, [setSearchTerm, state]);


    console.log(setSearchTerm);

    const SearchTerm = (data) => {
        setState(data.target.value);
        setSearchTerm(state);
        console.log(state);
    };
    

    return (
        <Wrapper>
            <Content>
                <Link to={`/pokemon/${state}`}>
                    <img  src={SearchIcon} alt="search-icon" />
                </Link>
                <input
                    value={state}
                    type="text"
                    name="search"
                    id="search-input"
                    placeholder="Procurar"
                    onChange={data => SearchTerm(data)} />
            </Content>
        </Wrapper>
    )
};


export default SearchBar;