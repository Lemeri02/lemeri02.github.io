
fetch('https://kodaktor.ru/cart_data.json')
.then( (result) => result.json())
.then( ({hdd, sdd, usbdrive}) => {
    document.getElementById('hdd-card').textContent = hdd;
    document.getElementById('sdd-card').textContent = sdd;
    document.getElementById('usb-card').textContent = usbdrive;
}); 

let budget = 0;
let goods = 0;
console.log("d");

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
            console.log(itemId);
            let hddPrice =  parseInt($("#hdd-card").text());
            let sddPrice = parseInt($("#sdd-card").text());
            let usbDrive = parseInt($("#usb-card").text());
            let array = [hddPrice, sddPrice, usbDrive];
            for (i=0; i<array.length; i++){
                addPrice(i);   
                console.log(array[i]);
                    console.log();
                }
                console.log(array);
            if (itemId.html() != null) {
                 itemId.find("input").val(parseInt(itemId.find("input").val()) + 1);

            }
            else {
                // Иначе добавляем товар в корзину (функция ниже)
                addCart(cart, move);
                // И добавляем количество
                move.find("input").val(parseInt(move.find("input").val()) + 1);
            }
            function addPrice(i) {
            console.log(array[i]);
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
        cart.find("ul").append('<li data-id="' + move.attr("data-id") + '">'
                + '<span class="name">' + move.find("h3").html() + '</span>'
                + '<input class="count" value="1" type="text">'
                + '<button class="delete">&#10005;</button>' + '<h3></h3>');
    }
});
