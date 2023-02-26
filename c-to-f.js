console.log("cellecius to farighn heat");

const converter = (celcius) => {
  return (celcius * (9 / 5) + 32).toFixed(2);
};

const [, , celcius] = process.argv;

console.log(converter(celcius));
