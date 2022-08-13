const morador = {  // Objeto
    nome: 'Matheus',
    endereco: 'Caetes',
    cidade: 'Abreu',
    mostrarMorador() { // Método
        console.log(this)
        console.log(`${this.nome} ${this.endereco} ${this.cidade}`) //This é o self do python
    }
}

morador.mostrarMorador() // Agora ta referenciando o objeto no qual foi criado

/*-----------Ou-------------*/

const dev = {
    linguagem: 'Javascript',
    cargo: 'Júnior',
    empresa: 'Indefinido',
    mostrarDev() {
        const { linguagem, cargo, empresa } = this // Igual os componentes dos react

        console.log(`${linguagem}, ${cargo}, "${empresa}`)
    }
}

dev.mostrarDev()

/* ------------------Outro exemplo--------------- */

const dev2 = {
    linguagem: 'Javascript',
    cargo: 'Júnior',
    empresa: 'Indefinido',
    mostrarDevs() {
        const { linguagem, cargo, empresa } = this // Igual os componentes dos react

        return (`${linguagem}, ${cargo}, "${empresa}`) // Vai retornar os valores
    },
    mostrarTudo() {
        console.log(this)
        const Tudo = this.mostrarDevs() // E aqui chama eles e armazena
        console.log(`Um progamdor qualquer possui conhecimentos em ${Tudo}`)
    }
}
// Objeto.método
dev2.mostrarTudo() // O this muda de acordo de como ele é chamado
// Mudando como é chamado
const mostrarTudo = dev2.mostrarTudo
// Não tem conexão com o objeto então referencia o window
mostrarTudo() // Pra invocar um método que usa o this precisa referenciar o objrto antes, se não se refere ao global

const dev3 = {
    linguagem: 'Javascript',
    cargo: 'Júnior',
    empresa: 'Indefinido',
    mostrarDevs2() {
        const { linguagem, cargo, empresa } = this // Igual os componentes dos react

        return (`${linguagem}, ${cargo}, "${empresa}`) // Vai retornar os valores
    },
    mostrarTudo2() {
        console.log(this)
        const Tudo = this.mostrarDevs2() // E aqui chama eles e armazena
        console.log(`Um progamdor qualquer possui conhecimentos em ${Tudo}`)
    },
    pais: () => { // Array function não tem this próprio, sempre referencia o objeto global
        console.log(this) // O this é do escopo q a function foi declarada no caso a globalç
        console.log(`${this.cargo} hahahahaha`) // Não declare dentro de uma array function
    }
}

dev3.pais()
