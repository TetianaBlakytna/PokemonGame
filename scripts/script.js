let playerPokemon;
const pokemonCards = document.querySelectorAll(".pokemon-card");
console.log(pokemonCards);
const pokemonNames = Object.keys(pokemon);

pokemonCards.forEach((card) => {
  card.addEventListener("click", () => {
    playerPokemon = { ...pokemon[card.id] };
    console.log(card.id);
    console.log(playerPokemon);
    let availableOpponents = [];
    for (let i = 0; i < pokemonNames.length; i++) {
      if (pokemonNames[i] !== card.id) {
        availableOpponents.push(pokemonNames[i]);
      }
    }
    console.log(availableOpponents);

    let randomIndex = Math.floor(Math.random() * availableOpponents.length);

    let opponentName = availableOpponents[randomIndex];

    opponentPokemon = { ...pokemon[opponentName] };
    document.getElementById("battle-screen").style.display = "block";
    document.getElementById("player-pokemon-name").textContent = playerPokemon.name;
    document.getElementById("player-pokemon-health").textContent = `Health: ${playerPokemon.health}`;
    document.getElementById("player-pokemon-attack-power").textContent = `Attack Power: ${playerPokemon.attackPower}`;

document.getElementById("opponent-pokemon-name").textContent = opponentPokemon.name;
    document.getElementById("opponent-pokemon-health").textContent = `Health: ${opponentPokemon.health}`;
    console.log("Opponent:", opponentPokemon);
        document.getElementById("opponent-pokemon-attack-power").textContent = `Attack Power: ${opponentPokemon.attackPower}`;
  });
});

//battle

const attackButton = document.getElementById("attack-button");

attackButton.addEventListener("click", () => {
  if (playerPokemon && opponentPokemon) {
    opponentPokemon.health -= playerPokemon.attackPower;
    document.getElementById("opponent-pokemon-health").textContent = `Health: ${opponentPokemon.health}`;
    console.log("Opponent's health:", opponentPokemon.health);

    if (opponentPokemon.health <= 0) {
      alert(`${playerPokemon.name} wins!`);
      document.getElementById("battle-screen").style.display = "none";
      return;
    }

    playerPokemon.health -= opponentPokemon.attackPower;
    document.getElementById("player-pokemon-health").textContent = `Health: ${playerPokemon.health}`;
    console.log("Player's health:", playerPokemon.health);

    if (playerPokemon.health <= 0) {
      alert(`${opponentPokemon.name} wins!`);
      document.getElementById("battle-screen").style.display = "none";
      return;
    }}}); 