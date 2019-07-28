
/* fetch('https://kodaktor.ru/cart_data.json')
.then( (result) => result.json())
.then( ({hdd, sdd, usbdrive}) => {
    document.getElementById('hdd-card').textContent = hdd;
    document.getElementById('sdd-card').textContent = sdd;
    document.getElementById('usb-card').textContent = usbdrive;
    setPrice(hdd, sdd, usbdrive);
});  */

/* let setPrice = function setPrice(hdd, sdd, usbdrive) {
    let hdd1 = {name: "HDD", price: hdd, quantity: 1}
    let sdd1 = {name: "SDD", price: sdd, quantity: 1}
    let usbdrive1 = {name: "USBDrive", price: usbdrive, quantity: 1}
    console.log( hdd1, sdd1, usbdrive1);
    //sendObject(hdd1, sdd1, usbdrive1);
}

let  sendObject = function(hdd1, sdd1, usbdrive1){
     console.log("hdd1")
}; */

let arr = $.getJSON("https://kodaktor.ru/cart_data.json", function(data){
    console.log(arr.responseJSON.hdd);
});
 
 

let budget = 0;
let goods = 0;
 
$(function() {
    $('#product li').draggable({
        //containment: 'parent',
        cursor: 'move',
        helper: 'clone',
        revert: true,
        drag: function() {
            
        }
    });

    $('.cart').droppable({
/*         hoverClass: "drop-hover",
        activate: function() {
            $('.cart').css({'background-color': 'yellow'})
        },
        deactivate: function() { 
            $('.cart').css({'background-color': '#EAEAEC'})
        }, */
        drop:function(event, ui) {
            let cart = $(this), 
            move = ui.draggable, 
            itemId = cart.find("ul li[data-id='"+ move.attr("data-id") + "']");
           // console.log(itemId);
         /*             let hddPrice =  parseInt($("#hdd-card").text());
            let sddPrice = parseInt($("#sdd-card").text());
            let usbDrive = parseInt($("#usb-card").text());
            let array = {hdd:hddPrice, sdd: sddPrice, usb:usbDrive }
             
            for (i=0; i<array.length; i++){
                addPrice(i);   
               console.log(array[i]);
               console.log();
                }
              console.log(array); */
            if (itemId.html() != null) {
                setPrice(console.log(hdd1))

                   //itemId.find("input").val(parseInt(itemId.find("input").val()) + 1);
                 itemId.find("span.count").text(parseInt(itemId.find("span.count").text()) + 1);
                 let price = parseInt(itemId.find("span.name").text().replace('$',''));
                 let total = parseInt(itemId.find("span.count").text()) * price
                 itemId.find('span.price').text(total);

                 //let totalTotal =  $('li > span.price').reduce((sum, val) => sum+val);
                 //let totalTotal =  document.querySelectorAll('.price').reduce((sum, val) => sum+val);
                 /* let totalTotal = Array.prototype.reduce.apply((document.querySelectorAll('.price')),  (sum, val) => sum + val); */
                 //let totalTotal = $('li > span.price').text();

                 let totalTotal =  [$('.price').text()].reduce((sum, val) => sum+val);
                 console.log(totalTotal);
                 //console.log("ul li[data-id='"+ move.attr("data-id") + "']");
                 //console.log($("ul li[data-id='"+ move.attr("data-id") + "']")[0] );
                 console.log(itemId.find("li[data-id='"+ move.attr("data-id") + "']" + '.price') );
               
                 /* totalff(totalPrice); */
                getSumm(total);
                
               /*  let totalPrice = +itemId["0"].childNodes[2].textContent;
                summa = 0;
                let jdshfkjsdhjfk = summa += totalPrice */
              
                console.log(  total );
                
                updateCart()
                
                
                

                //console.log(move.find("span").html());
                // console.log(totalTotal2);
                // console.log( );
                //console.log(itemId.find("input").val());
                //console.log(itemId.html()); 
                 
                 
            }
            else {
                // Иначе добавляем товар в корзину (функция ниже)
                addCart(cart, move);
                console.log(cart[0])
                // И добавляем количество
                //move.find("input").val(parseInt(move.find("input").val()) + 1);
                //move.find("input").val(parseInt(move.find('span').text()));
               // move.find('span').text(parseInt(move.find('span').text()));
               // console.log(  parseInt(move.find('span').text()));
               // console.log( cart.html());
                //console.log( move.html());
                console.log(+(move["0"].textContent).replace(/[^-0-9]/gim,''));
                updateCart()
            }
         
            function addPrice(i) {
           // console.log(array[i]);
            }
            //$(this).addClass("ui-state-highlight").find('> span').html('OK!');
    /*         $(ui.draggable).clone(true).css({
                position: 'relative',
                top: 'auto',
                left: 'auto'
              }).appendTo(this); */
        }
        
    });
   /*  function addCart(cart, move) { $('#tr').append($("<li></li>").text(move.text()));}; */
    function addCart(cart, move) {
        cart.find("ul").append('<li data-id="' + move.attr("data-id") + '"id="' + move.attr("data-id") + '">'
                + '<span class="name">' + move.find("h3").html() + '</span>'
                  //'<input class="count" value="1" type="text">' 
                +'<span class="count"> 1 </span>'
                + '<span class="price">'+ move.find('h3').text().replace('$','') +'</span>'
                + '<button class="delete">&#10005;</button>' + '<h3></h3>');
                console.log( move.attr("data-id"));
                console.log( );
                let dataId =   move.attr('data-id')  ;
                //let rrr = $(`#${dataId}`).setAttribute('data-quantity', 1);
                //console.log(rrr)
                //let ggg = document.get(`#${dataId}`)
                //console.log(gg)
    }
    
    let array1 = [];
    function getSumm(total) {
        array1 =[];
        array1.push(total)
               
            };
console.log(array1 );
});


function updateCart(){ 
    let totalCart = 0.0;
    let cartItems = document.querySelectorAll("#tr > li");
    for (let i = 0; i < cartItems.length; i++) {
        let cartItem = cartItems[i];
        let quantity = cartItem.getAttribute('data-quantity');
console.log(quantity)

    }
    console.log(document.querySelectorAll("#tr > li"));
    document.querySelector("#tr > li:nth-child(1)")
}

function addCartItem() {
    

}

function updateCartItem() {

}


 
