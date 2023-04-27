//ES6 => introdução das classes

class Carro{
    constructor(modelo,rodas,paraquedas){
        this.modelo = modelo;
        this.rodas = rodas;
        this.paraquedas = paraquedas;
    }

    setModelo(modelo){this.modelo = modelo;}
    setrodas(roda){this.rodas = rodas;}
    setparaquedas(paraquedas){this.paraquedas = paraquedas;}

    getvelocidade (){
        return (this.modelo.velocidade + this.rodas.velocidade + this.paraquedas.velocidade);
    }
    getbooster (){
        return (this.modelo.booster + this.rodas.booster + this.paraquedas.booster);
    }
    getdrift (){
        return (this.modelo.drift + this.rodas.drift + this.paraquedas.drift);
    }

}

class peca{
    constructor(id,nome,velocidade,booster,drift){
        this.id = id;
        this.nome = nome;
        this.velocidade = velocidade;
        this.booster = booster;
        this.drift = drift;
    }
}


//ES6 => introdução de Let e Const

const vazio = new peca("0","vazio",0,0,0);

const kart = new peca("M1","Kart do Mario",20,30,10);
const falcon = new peca("M2","Blue Falcon",25,25,5);
const moto = new peca("M3","Moto do Link",30,20,5);
const jeep = new peca("M4","Jeep do D.K.",10,10,30);

const roda1 = new peca("R1","Roda de F1",20,20,20);
const roda2 = new peca("R2","Roda macia",5,25,30);
const roda3 = new peca("R3","Roda de ouro",10,10,25);
const roda4 = new peca("R4","Roda antiga",5,10,10);

const mario = new peca("P1","Padrão",10,30,5);
const peach = new peca("P2","Sombrinha",30,10,5);
const zelda = new peca("P3","Tri-force",20,20,5);
const lakitu = new peca("P4","Nuvens",15,30,15);



let carro = new Carro(vazio, vazio, vazio);
let carroteste = new Carro(kart, roda1, mario);
atualizarLista();

//console.log(carroteste.getvelocidade());
//console.log(carroteste.getbooster());
//console.log(carroteste.getdrift ());



function atualizarLista(){
    let coluna = document.querySelector(".estatistica");
    let Lista = coluna.querySelectorAll('.valores');
    let modelo_nome = Lista[0];
    let roda_nome = Lista[1];
    let para_nome = Lista[2];
    let velocidade_valor = Lista[4];
    let booster_valor = Lista[5];
    let drift_valor = Lista[6];

    modelo_nome.innerHTML = "Modelo : " + carro.modelo.nome;
    roda_nome.innerHTML = "Roda : " + carro.rodas.nome;
    para_nome.innerHTML = "Planador : " + carro.paraquedas.nome;
    velocidade_valor.innerHTML = "Velocidade : " + carro.getvelocidade();
    booster_valor.innerHTML = "Booster : " + carro.getbooster();
    drift_valor.innerHTML = "Drift : " + carro.getdrift();   


    console.log(coluna);
}


function selecao(objeto, id){
    let Lista = objeto.parentElement;
    let anterior = Lista.querySelector(".selecionado");

    if(anterior != null){
        anterior.classList.remove('selecionado');
        anterior.classList.add('option'); 
    }

    objeto.classList.add('selecionado');
    objeto.classList.remove('option');
    registrar(id);
    atualizarLista();
}




function registrar(id){
    switch (id){
        case 'M1':
            carro.modelo = kart;
            break;
        case 'M2':
            carro.modelo =  falcon;
            break;
        case 'M3':
            carro.modelo =  moto;
            break;
        case 'M4':
            carro.modelo =  jeep;
            break;
        case 'R1':
            carro.rodas = roda1;
            break;
        case 'R2':
            carro.rodas = roda2;
            break;
        case 'R3':
            carro.rodas = roda3;
            break;
        case 'R4':
            carro.rodas = roda4;
            break;
        case 'P1':
            carro.paraquedas = mario;
            break;
        case 'P2':
            carro.paraquedas = peach;
            break;
        case 'P3':
            carro.paraquedas = zelda;
            break;
        case 'P4':
            carro.paraquedas = lakitu;
            break;
        default:
            return vazio;
    }

}