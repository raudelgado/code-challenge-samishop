import React from 'react';
import './Home.css';
import { Header } from '../components/Header/Header';
import CharacterInformation from './../components/CharacterInformation/CharacterInformation';
import { Loading } from '../components/Loading/Loading';


export const Home = () => {
    return (
        <div>
            <Header />
            <div>Home</div>
            <CharacterInformation id={1} />
            <Loading />
        </div>
    )
}
