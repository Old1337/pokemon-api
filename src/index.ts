import IPokemon from "./interfaces";

const container: HTMLElement | null = document.getElementById("app");

// CONSTANTS
const POKEMONS: number = 20;

const fetchData = (): void => {
  for (let i = 1; i <= POKEMONS; i++) {
    getPokemon(i);
  }
};

const getPokemon = async (id: number): Promise<void> => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await data.json();
  const pokemonType = pokemon.types
    .map((poke: any) => poke.type.name)
    .join(", ");

  const transformedPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    image: `${pokemon.sprites.front_default}`,
    type: pokemonType,
  };

  showPokemon(transformedPokemon);
};

fetchData();

const showPokemon = (pokemon: IPokemon) => {
  // create elements
  const card = document.createElement("div");
  const id = document.createElement("span");
  const image = document.createElement("img");
  const title = document.createElement("h1");
  const type = document.createElement("span");

  // add classes
  card.className = "card";
  id.className = "card--id";
  image.className = "card--image";
  title.className = "card--name";
  type.className = "card--details";

  // append content

  image.src = pokemon.image;
  id.textContent = `#${pokemon.id}`;
  title.textContent = `${pokemon.name}`;
  type.textContent = `${pokemon.type}`;

  // append childs
  container?.appendChild(card);
  card.appendChild(id);
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(type);
};
