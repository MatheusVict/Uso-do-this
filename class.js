class MinhaClasse {
    constructor (value) {
        this.prop1 = value
    }

    thisIgualObj () {
        console.log(this === obj)

        setTimeout(() => {
            console.log(this === obj) // Esse tbm referencia o obj pois foi declaro no metodo acima
        }, 1000)
    }
}

const obj = new MinhaClasse('value')

obj.thisIgualObj() // Chamou a const dps o métodos
// Dentro de uma classe ou de um constructor o this referencia o obejto criado a partir dessa classe

/* -------------Usando o this---------- */
class Gato {
    constructor(name) {
        this.name = name
    }

    gatoNome() {
        return this.name
    }
}

const meuGato = new Gato('Tú')

console.log(meuGato.gatoNome())

/* ---------Sem usar o this e o new --------*/

const makecat = nome => ({ // Gera uma função q retorna uma funcção pegar nome q gera uma funçao nome
    pegaNome: () => nome
})

const minhaFofa = makecat('Tú linda') // Sem usar o new declara q a const recebe 

console.log(minhaFofa.pegaNome()) // Dps só da o console

/* ------------Segundo Jeito de fazer sem o this e new----------- */

const form = document.querySelector('[name="cep"]')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    // console.log(form)
    console.log('oi')
})

