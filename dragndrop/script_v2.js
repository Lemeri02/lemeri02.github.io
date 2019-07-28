let arr = $.getJSON("https://kodaktor.ru/cart_data.json", function(data){
    for (let key in arr.responseJSON) {
        $('ul.clear').append(`<li data-id="${key}"><img class="image" src="${key}.webp"><h2 class="key">${key}</h2><h3>$${arr.responseJSON[key]}</h3></li>`);  }

    let budget = 0;
    let totalQuantity = [];
    let totalPrice = [];
 
    $(function() {
        $('#product li').draggable({
            cursor: 'move',
            helper: 'clone',
            revert: true,
            drag: function() {}});
    
        $('.cart').droppable({
            drop:function(event, ui) {
                let cart = $(this), 
                move = ui.draggable,
                itemId = cart.find("ul li[data-id='"+ move.attr("data-id") + "']");
                
                if (itemId.html() != null) {
                    let goodCounter = itemId.find("span.count");
                    goodCounter.text(parseInt(goodCounter.text()) + 1);
                    let price = parseInt(itemId.find("span.name").text().replace('$',''));
                    let total = parseInt(goodCounter.text()) * price;
                   // let quantity = parseInt(goodCounter.text());
                    itemId.find('span.price').text(`Сумма: $${total}`);
                    totalPrice.push(price);
                    totalQuantity.push(1);
                    let summa = totalPrice.reduce(function(sum, val){
                                return sum + val;
                                }, 0);
                    let quantity = totalQuantity.reduce(function(sum, val){
                                    return sum + val;
                                }, 0);
                    updateCart(summa, quantity);
                    console.log(totalQuantity);
                }
                else {
                    addCart(cart, move);
                    let total = +(move["0"].textContent).replace(/[^-0-9]/gim,'');
                    totalPrice.push(total); 
                    let summa = totalPrice.reduce(function(sum, val){
                        return sum + val;
                    }, 0);
                    totalQuantity.push(1);
                    let quantity = totalQuantity.reduce(function(sum, val){
                        return sum + val;
                    }, 0);
                    updateCart(summa, quantity);
                }
            }
        });

function addCart(cart, move) {
    let id = move.attr("data-id");
    let key = move.find("h2").html();
    let price = move.find("h3").html();
    let price2 = move.find('h3').text().replace('$','');
    cart.find("ul").append(
        `<li data-id="${id}" id="${id}">
        <img class="image" src="${key}.webp">
        <span class="key"> ${key}</span> <br/>
        <span>$ </span>
        <span class="name">${price}</span> <br/>
        <span>Количество: </span>
        <span class="count"> 1 </span> <br/>
        <span class="price"> Сумма: $${price2}</span> <br/>
        <h3></h3>`
        );
    }
});

function updateCart(summa, quantity){ 
    console.log(summa)
    $('#summa').text(`ИТОГО: $${summa}`);
    $('#quantity').text(`КОЛИЧЕСТВО: ${quantity} шт`);
    let budget = parseInt($('input').val());
    if (summa >= budget) {
    alert(`Ваша кредитная карта не расчитана на сумму больше ${budget}`);
    clearCart()
}
}
});

$('#clear_cart').on('click', function(){
    clearCart()
    location.reload(true);
})

function clearCart(){
    $('#tr').remove();
    $('.total p').remove();
    location.reload(true);
}