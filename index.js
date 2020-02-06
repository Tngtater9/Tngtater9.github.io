$(function() {
    $('#js-shopping-list-form').on('submit', function(event){
        event.preventDefault();
        let newItem = $('#shopping-list-entry').val();
        const newEntry = '<li>'+
        '<span class="shopping-item"></span>'+
        '<div class="shopping-item-controls">'+
          '<button class="shopping-item-toggle">'+
            '<span class="button-label">check</span>'+
          '</button>'+
          '<button class="shopping-item-delete">'+
            '<span class="button-label">delete</span>'+
          '</button>'+
        '</div>'+
      '</li>';
        $(newEntry).appendTo('.shopping-list');
        $('ul li:last-child .shopping-item').text(newItem);
        $('#shopping-list-entry').val("");
    });
    $('ul').on('click', 'li .shopping-item-toggle', function(event){
        $(this).parent().parent().find('span:eq(0)').toggleClass('shopping-item__checked');
    });
    $('ul').on('click', 'li .shopping-item-delete', function(event){
        $(this).parent().parent().remove();
    });
});