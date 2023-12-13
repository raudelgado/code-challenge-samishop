import React from 'react'
import './CharacterInformation.css'
import { useQuery, gql } from '@apollo/client';

export const queryCharacterInformation = gql`
query queryCharacterInfo($idPerson: ID) {
    person(id: $idPerson) {
        eyeColor
        hairColor
        skinColor
        birthYear
        vehicleConnection {
            vehicles {
            name
        }
    }
    }
}
`;

const CharacterInformation = ({ id }) => {
    console.log('ID:', id);

    const { loading, error, data } = useQuery(queryCharacterInformation, {
        variables: { idPerson: id },
    });

    console.log('Loading:', loading);
    console.log('Error:', error);
    console.log('Data:', data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const character = data.person;

    return (
        <div>
            <h2>Character Information</h2>
            <p>Eye Color: {character.eyeColor}</p>
            <p>Hair Color: {character.hairColor}</p>
        </div>
    );
};


export default CharacterInformation
