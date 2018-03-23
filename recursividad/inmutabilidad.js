const jorge = {
  nombre: 'Jorge L.',
  apellido: 'Alfaro',
  edad: 25,
};

birthday = (persona) => {
  const clone = Object.assign({}, persona);
  clone.edad++;
  return clone;
};

console.log(birthday(jorge));
