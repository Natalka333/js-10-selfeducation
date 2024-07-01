const murkUpAllBreed = ({ id, url, name, description, origin, temperament }) => {
    return `
    <div class="cat-container"><img class="cat-picture" src="${url}" alt="${id} width="500px"></div >
		<div class="cat-box">
	<h2 class="cat-info">${name}</h2>
  <p class="cat-desc"><b>Description:</b> ${description}</p>
  <p class="cat-temp"><b>Temperament:</b> ${temperament}</p>
  <p class="cat-origin"><b>Origin:</b> ${origin}</p></div>
    `
}

export { murkUpAllBreed };