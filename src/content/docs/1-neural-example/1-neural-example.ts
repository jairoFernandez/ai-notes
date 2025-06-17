// neurona.ts
const sigmoid = (x: number): number => 1 / (1 + Math.exp(-x));

const neuron = (x: number, w: number, b: number): number => {
  const z = w * x + b;
  return sigmoid(z);
};

// ejemplo de uso
const input = 1.0;
const weight = 0.8;
const bias = 0.2;

const output = neuron(input, weight, bias);
console.log("Salida de la neurona:", output);
