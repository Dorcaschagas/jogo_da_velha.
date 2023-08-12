const play = document.querySelectorAll('.play')
const listPlayPossibilidades = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
let jg1 = 'X', jg2 = 'O'
let jogadorAtual = jg1
let c = 0
    
for(let i=0; i<play.length; i++){
    play[i].addEventListener('click', () =>{
        play[i].innerHTML = jogadorAtual

        c++
        if(c === 1){
            jogadorAtual = jg2
        } else {
            jogadorAtual = jg1
            c = 0
        }
        posicao(play)
    })
}

function posicao(valor){
    const listaJg1 = []
    const listaJg2 = []
    let ganhador = false
    valor.forEach((ind, val) => {
        if(ind.innerHTML){
            if(ind.innerHTML === 'X'){
                listaJg1.push(val)
            } else {
                listaJg2.push(val)
            }
        }
    });

    if(listaJg2.length >= 3){
        listPlayPossibilidades.forEach(element => {
            ganhador = element.every((valor) => listaJg2.includes(valor))
            if(ganhador){
                msg('jogador O venceu!')
            }
        });
    }

    if(listaJg1.length >= 3){
        listPlayPossibilidades.forEach(element => {
            ganhador = element.every((valor) => listaJg1.includes(valor))
            if(ganhador){
                msg('jogador X venceu!')
            }
        });
    }

    if(listaJg1.length === 5){
        msg('Empate!')
    }
}

function msg(mensagem){
    document.getElementById('msg').innerHTML = mensagem
    
    const button = document.createElement("button")
    button.classList.add('botao')
    button.textContent = 'Jogar Novamente'
    button.addEventListener("click", () => {
        location.reload()
    });
    document.body.appendChild(button)
}

