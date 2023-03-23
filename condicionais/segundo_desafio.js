/* Programa p calcular o valor de uma viagem

vc tera 3 var. sendo elas:

1 - Preco do etanol
2 - Preco Gasolina
3 - o tipo combustivel no carro
4 -Gasto medio de combustivel do carro por KM
5 - distancia em KM da viagem */

const precoEtanol = 5.79
const precoGasolina = 6.70
const kmPorLitro = 10
const distanciaKM = 100
const tipoCombustivel = 'Etanol'
const litroConsumido = distanciaKM / kmPorLitro


if (tipoCombustivel === 'Etanol') {
    const valorGasto = litroConsumido * precoEtanol
    console.log('O valor de Etanol será de R$' , valorGasto.toFixed(2))
} else {
    const valorGasto = litroConsumido * precoGasolina
    console.log('O valor de Gasolina será de R$' , valorGasto.toFixed(2))
}
