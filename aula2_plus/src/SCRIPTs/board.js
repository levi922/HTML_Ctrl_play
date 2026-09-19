class boardManager{
    cardManager
    node
    numImgs
    curNumCards

    constructor(id, numImgs, cardManager){
        this.node = document.getElementById(id)
        this.numImgs = numImgs
        this.cardManager = cardManager
    }

    clear(){
        this.node.innerHTML = ""
    }

    fill(numberCards){
        if(numberCards > 2*this.numImgs){
            console.error(`Error: não há imagens suficientes para as ${numberCards}cartas`)

            numberCards = 2*this.numImgs
        }

        this.clear()
        this.addcard(this.cardManager.gen(1))
    }

    addcard(card){
        this.node.appendChild(card)
    }

}