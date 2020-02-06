$(function() {
    $('#js-shopping-list-form').on('submit', function(event){
        event.preventDefault();
        let newItem = $('#shopping-list-entry').val();
        $('li:first').clone().appendTo('ul');
        $('ul li:last-child .shopping-item').text(newItem);
    });
    $('ul').on('click', 'li .shopping-item-toggle', function(event){
        $(this).parent().parent().find('span:eq(0)').toggleClass('shopping-item__checked');
    });
    $('ul').on('click', 'li .shopping-item-delete', function(event){
        $(this).parent().parent().remove();
    });
});