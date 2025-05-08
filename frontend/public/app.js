async function getPokemon() {
    const name = document.getElementById('pokemonName').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    try {
      const res = await axios.get(`http://localhost:3000/api/pokemon/${name}`);
      const data = res.data;
      resultDiv.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Peso: ${data.weight}00 gr</p>
        <p>Altura: ${data.height}0 cm</p>
      `;
    } catch (err) {
      resultDiv.innerHTML = `<p style="color:red;">Pokémon no encontrado</p>`;
    }
  }