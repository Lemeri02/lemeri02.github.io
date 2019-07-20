fetch('https://kodaktor.ru/cart_data.json')
.then( (result) => result.json())
.then( ({hdd, sdd, usbdrive}) => {
    document.getElementById('hddPrice').textContent = "$ "+hdd;
    document.getElementById('sddPrice').textContent = "$ "+sdd;
    document.getElementById('usbPrice').textContent = "$ "+usbdrive;
    console.log(hdd);
});

let budget = 0;
let goods = 0;


$(function() {
    $('.item').draggable({
        //containment: 'parent',
        cursor: 'move',
         
        helper: 'clone',
        revert: true,
    });

    $('.cart').droppable({
        hoverClass: "drop-hover",
        activate: function() {
            $('.cart').css({'background-color': 'yellow'})
        },
        deactivate: function() { 
            $('.cart').css({'background-color': '#EAEAEC'})
        },
        drop:function(event, ui) {
            $(this).addClass("ui-state-highlight").find('> span').html('OK!');
            $(ui.draggable).clone(true).css({
                position: 'relative',
                top: 'auto',
                left: 'auto'
              }).appendTo(this);
              $(ui.draggable).
              console.log(ui.draggable);
              console.log(ui.droppable);
              console.log(this);

        }
        
    });
});
