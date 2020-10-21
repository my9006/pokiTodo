import React, { useEffect } from 'react'
import pok from './helper/PokemonGetter'

let Pokemon = () => {
    const [url, setUrl] = React.useState('');

    React.useEffect(() => {
        pok().then(val => setUrl(val));
    }, []);

    return url
}

export default Pokemon;