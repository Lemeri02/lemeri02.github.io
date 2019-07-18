fetch('https://kodaktor.ru/cart_data.json')
.then( (result) => result.json())
.then( ({hdd, sdd, usbdrive}) => {
    document.getElementById('hddPrice').textContent = hdd;
    document.getElementById('sddPrice').textContent = sdd;
    document.getElementById('usbPrice').textContent = usbdrive;
    console.log(hdd);
});

$(function() {
    $('#drag, #drag2').draggable({
        containment: 'parent',
        cursor: 'move',
         
        //helper: 'clone',
        revert: true,
    });

    $('#box').droppable({
        drop:function(event, ui) {
            $(this).addClass("ui-state-highlight").find('> span').html('OK!');


        }
    });
});
