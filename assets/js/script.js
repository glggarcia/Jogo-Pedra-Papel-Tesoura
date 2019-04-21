
/* Criação das Variáveis de Resultado */
let playerScore = 0;
let computerScore = 0;
let rodadaAtual = 1;

const vencedor = document.getElementById('vencedor');
const rodada   = document.getElementById('rodada');

/* Criação da constante Pedra Papel e Tesoura */
const pedra   = document.getElementById('pedra');
const papel   = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');

const pontuacaoJogador    = document.getElementById("pontuacao-jogador");
const pontuacaoComputador = document.getElementById("pontuacao-computador");

const escolhaJogador    = document.getElementById("escolha-jogador");
const escolhaComputador = document.getElementById("escolha-computador");

let playerSelection = 'null';
let computerSelection = 'null';

pedra.addEventListener('click', () => {
    playerSelection = 'pedra';
    playRound(playerSelection);
});

papel.addEventListener('click', () => {
    playerSelection = 'papel';
    playRound(playerSelection);
})

tesoura.addEventListener('click', () =>{
    playerSelection = 'tesoura';
    playRound(playerSelection);
});


function computerPlay(){
    var opcoes = ['pedra', 'papel', 'tesoura'];
    return opcoes[Math.floor(Math.random() * opcoes.length)];
}

function estilo(nomeVencedor){
    
    if(nomeVencedor == 'Computador'){
        vencedor.style.color = 'red';
    } else if(nomeVencedor == 'Jogador') {
        vencedor.style.color = 'blue';
    } else {
        vencedor.style.color = '#000';
    }
    vencedor.innerHTML = nomeVencedor;
}

function enviarEscolha(playerSelection, computerSelection){
    escolhaJogador.innerHTML    = playerSelection;
    escolhaComputador.innerHTML = computerSelection;
}

function playRound(playerSelection){
    rodada.innerHTML = "Rodada " + rodadaAtual;
    computerSelection = computerPlay();
    if (computerSelection == 'pedra')
    {
        if(playerSelection == 'tesoura')
        {
            computerScore ++;
            estilo('Computador');
        }
        else if(playerSelection == 'papel')
        {
            playerScore ++;
            estilo('Jogador');
        } 
        else 
        {
            estilo('Ninguem');
        }
    } else if (computerSelection == 'tesoura')
    {
        if(playerSelection == 'papel')
        {
            computerScore ++;
            estilo('Computador');
        }
        else if(playerSelection == 'pedra')
        {
            playerScore ++;
            estilo('Jogador');
        } 
        else 
        {
            estilo('Ninguem');
        }
    } else 
    {
        if(playerSelection == 'pedra')
        {
            computerScore ++;
            estilo('Computador');
        } 
        else if(playerSelection == 'tesoura')
        {
            playerScore ++;
            estilo('Jogador');
        } 
        else 
        {
            estilo('Ninguem');
        }
    }
    rodadaAtual ++;
    enviarEscolha(playerSelection, computerSelection);
    pontuacaoJogador.innerHTML    = playerScore;
    pontuacaoComputador.innerHTML = computerScore;
    
}



