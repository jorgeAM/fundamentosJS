function handleError(err) {
  console.log(`Request failed: ${err}`);
}

let luke;

/*llamada al metodo */
fetch('https://www.swapi.co/api/people/1/').
then(res => {
  luke = res;
  return get(luke.homeworld);
}).
then((homeworld) => {
  luke.homeworld = homeworld;
  console.log(`${luke.name} nací en ${luke.homeworld.name}`);
}).catch(err => handleError(err));
