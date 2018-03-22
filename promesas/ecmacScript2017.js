function handleError(err) {
  console.log(`Request failed: ${err}`);
}

async function getLuke() {
  try {
    const res = await fetch('https://www.swapi.co/api/people/1/');
    const luke = await res.json();
    const resHome = await fetch(luke.homeworld);
    luke.homeworld = await resHome.json();
    console.log(`${luke.name} nacío en ${luke.homeworld.name}`);
  }catch (err) {
    handleError(err);
  }
}

getLuke();
