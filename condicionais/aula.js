const camisaAzul = true
const camisaVerde = false

const numero = 0

const eNumeroPar = numero % 2 === 0
console.log(eNumeroPar)


if (numero === 0)  {
    console.log("Número inserido é inválido. Digite um número de 0 - 100")
} else if (eNumeroPar) {
    console.log("Par!")
} else {
    console.log("Impar!")
}


