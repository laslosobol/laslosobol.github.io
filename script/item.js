$('.radio-group .radio').click(function(){
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
    var val = $(this).attr('data-value');
    $(this).parent().find('input').val(val);
});

function getValue(){
    var x = document.getElementById("item-amount");
    console.log(x.value)
}