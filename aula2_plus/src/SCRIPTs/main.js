function urlBuilder(number){}

let card = new cardManager(urlBuilder)
let board = new boardManager("board", 50, card)

let menu = document.getElementById('menu')
let select = document.getElementById('numCards')
let start = document.getElementById('start')

for(let i=4; i<=10; i+=2){
    let n = i*i
    let opcao = document.createElement('option')
    opcao.value = n
    opcao.innerHTML=n

    select.appendChild(opcao)
}

start.addEventListener('click', ()=>{
    menu.classList.add('hidden')
    board.node.classList.remove('hidden')
    board.fill(select.value)
})

start.click()

