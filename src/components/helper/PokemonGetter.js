let getPok = async () => {
    let baseURL = `https://pokeapi.co/api/v2/pokemon-form`
    let initialCall = await fetch(baseURL);
    let callToJson = await initialCall.json();
    let count = callToJson.count
    let fullFetch = await fetch(`${baseURL}?offset=0&limit=${count}`)
    let fullFetchToJson = await fullFetch.json();
    let randomPokemon = Math.floor(Math.random() * count);
    let getRandomPokemonObject = fullFetchToJson.results[randomPokemon];
    let getPokemon = await fetch(getRandomPokemonObject.url);
    let pokemonToJson = await getPokemon.json();
    let getPokemonSpritesUrl = await pokemonToJson.sprites.front_default;
    return getPokemonSpritesUrl;
}

export default getPok;