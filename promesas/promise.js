const DESPERTAR = 3000;
const DUCHA = 2000;
const VESTIRSE = 2000;
const DESAYUNAR = 3000;
const ESTUDIAR = 5000;

const agenda = document.getElementById('agenda');

function despertar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ahora me estoy duchando!');
    }, DESPERTAR);
  });
}

function ducharse(msg) {
  agenda.innerHTML = msg;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ahora me estoy vistiendo!');
    }, DUCHA);
  });
}

function vestirse(msg) {
  agenda.innerHTML = msg;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ahora me estoy desayunando!');
    }, VESTIRSE);
  });
}

function desayunar(msg) {
  agenda.innerHTML = msg;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ahora me estoy estudiando!!!');
    }, DESAYUNAR);
  });
}

function estudiar(msg) {
  agenda.innerHTML = msg;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('EXITO');
    }, DESAYUNAR);
  });
}

despertar().
then(txt => ducharse(txt)).
then(txt => vestirse(txt)).
then(txt => desayunar(txt)).
then(txt => estudiar(txt));
