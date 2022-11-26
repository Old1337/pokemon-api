var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const container = document.getElementById("app");
const POKEMONS = 20;
const fetchData = () => {
    for (let i = 1; i <= POKEMONS; i++) {
        getPokemon(i);
    }
};
const getPokemon = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = yield data.json();
    const pokemonType = pokemon.types
        .map((poke) => poke.type.name)
        .join(", ");
    const transformedPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        image: `${pokemon.sprites.front_default}`,
        type: pokemonType,
    };
    showPokemon(transformedPokemon);
});
fetchData();
const showPokemon = (pokemon) => {
    const card = document.createElement("div");
    const id = document.createElement("span");
    const image = document.createElement("img");
    const title = document.createElement("h1");
    const type = document.createElement("span");
    card.className = "card";
    id.className = "card--id";
    image.className = "card--image";
    title.className = "card--name";
    type.className = "card--details";
    image.src = pokemon.image;
    id.textContent = `#${pokemon.id}`;
    title.textContent = `${pokemon.name}`;
    type.textContent = `${pokemon.type}`;
    container === null || container === void 0 ? void 0 : container.appendChild(card);
    card.appendChild(id);
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(type);
};
export {};
