const hamburgueria = {
    "Xburguer": 13.00,
    "Xeggsalada": 17.00,
    "Xcheddar": 20.00,
    "Xeggbacon": 18.00,
    "Xcatupiry": 19.00,
    "Batatap": 14.00,
    "Batatam": 18.00,
    "Batatag": 24.00,
    "Coca": 10.00,
    "Suco": 11.00
};

let total = 0;

function adicionarPedido(){
    const item = document.getElementById("item").value;
    const quantidade = Number(document.getElementById("quantidade").value);

    if (item === ""){
        alert("Selecione um item");
        return
    }
        
    if (item <= 0){
        alert("Digite uma quantidade maior do que zero");
        return
    }

    const subtotal = hamburgueria[item] * quantidade;
    total += subtotal;

    const pedidos = document.getElementById("pedidos");
    const pedido = document.createElement("div");

    pedido.classList.add("item-pedido");
    pedido.innerHTML = `
        <span>${quantidade}x ${item}</span>
        <span>${subtotal.toFixed(2)}</span>`;

    pedidos.appendChild(pedido);

    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("item").value = "";
    document.getElementById("quantidade").value = 1;
}

function finalizarPedido(){
    if(total === 0)
        alert("Você ainda não adicionou nenhum item");

    alert(
        `Compra finalizada!\n\n
        Total: R$ ${total.toFixed(2)}\n\n
        Obrigado pela preferencia`
    )
}