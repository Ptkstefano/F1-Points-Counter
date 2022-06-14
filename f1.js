class Piloto{
    constructor(nome, corridas, pontos, vitorias, podios, voltasRapidas, poles, dnfs){
        this.nome=nome;
        this.corridas=corridas;
        this.pontos=pontos;
        this.vitorias=vitorias;
        this.podios=podios;
        this.voltasRapidas=voltasRapidas;
        this.poles=poles;  
        this.dnfs=dnfs;
    }
}

class Corrida{
    constructor (nome, resultado, pole, voltaRapida, dnf){
    this.nome=nome;
    this.resultado=resultado;
    this.pole=pole;
    this.voltaRapida=voltaRapida;
    this.dnf=dnf;
    }
}

class CorridaSprint{
    constructor (nome, resultado){
    this.nome=nome;
    this.resultado=resultado;
    }
}

const nomesPilotos = ["João", "Patrick", "Guerreiro", "Boa", "Xada", "Operador", "Anderson", "Carlos", "Kadu", "Murilo"]


let listaPilotos =[]

nomesPilotos.forEach((piloto) => { 
    piloto = new Piloto(piloto, 0, 0, 0, 0, 0, 0, 0), 
    listaPilotos.push(piloto)
})

const bahrein = new Corrida(
    nome="Bahrein",
    resultado=["João", "Guerreiro", "Xada", "Operador", "Patrick", "Boa", "Anderson", "Carlos", "Kadu"],
    pole = "Operador",
    voltaRapida = "João",
    dnf = null)

const jeddah = new Corrida(
    nome = "Arábia Saudita",
    resultado = ["Patrick", "Boa", "Guerreiro", "João"],
    pole = "Boa",
    voltaRapida = "João",
    dnf = null

)

const australia = new Corrida(
    nome = "Austrália",
    resultado = ["Patrick", "Carlos", "Boa", "Guerreiro", "Anderson"],
    pole = "Operador",
    voltaRapida = "Guerreiro",
    dnf = ["Operador", "Murilo"]
)


const emiliaRomagna = new Corrida(
    nome = "Emilia Romagna",
    resultado = ["Patrick", "Boa", "Operador", "bot", "bot", "bot", "Anderson"],
    pole = "Boa",
    voltaRapida = "Operador",
    dnf = null
)


const portugal = new Corrida(
    nome = "Portugal",
    resultado = ["Carlos", "bot", "bot", "bot", "bot", "Patrick", "Boa", "bot", "Operador"],
    pole = "Boa",
    voltaRapida = "Carlos",
    dnf = null
)

 
const espanha = new Corrida(
    nome = "Espanha",
    resultado = ["Operador", "Boa", "Guerreiro"],
    pole = "Operador",
    voltaRapida = "Boa",
    dnf = null
)


const azerbaijao = new Corrida(
    nome = "Azerbaijão",
    resultado = ["Patrick", "Boa", "Operador"],
    pole = "Patrick",
    voltaRapida = "Patrick",
    dnf = null
)

const corridas = [bahrein, jeddah, australia, emiliaRomagna, portugal, espanha, azerbaijao]

const pontosPorPosicao = [25, 18, 15, 12, 10, 8 , 6, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


corridas.forEach(corrida => { 
    
    for (var i = 0; i < corrida.resultado.length; i++)
    {
        let piloto = listaPilotos.find(pilotoDaLista => pilotoDaLista.nome === corrida.resultado[i])
        if (piloto != undefined)
        {
            piloto.pontos += pontosPorPosicao[i]
            piloto.corridas++
            if (i === 0){
            piloto.vitorias++
            }
            if (i <= 3){
            piloto.podios++
            }
        }
    }

    let pilotoVolta = listaPilotos.find(pilotoDaL => pilotoDaL.nome === corrida.voltaRapida)
    if (pilotoVolta != undefined)
    {
    pilotoVolta.pontos++
    pilotoVolta.voltasRapidas++
    }

    let pilotoPole = listaPilotos.find(pilotoDaP => pilotoDaP.nome === corrida.pole)
    if (pilotoPole != undefined)
    {
    pilotoPole.poles++
    }
    
    if (corrida.dnf != null)
    {    for (var i = 0; i < corrida.dnf.length; i++)
        {
            let pilotoDNF = listaPilotos.find(piloto => piloto.nome === corrida.dnf[i])
            pilotoDNF.corridas++
            pilotoDNF.dnfs++
        }}

    })

console.log(listaPilotos)




