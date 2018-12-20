$(document).ready(function(){
   
  // add an item to your christmas list
   $('.nav-menu-add-to-list').on('click', function(){
    $('.nav-menu-view-list').css('text-decoration', 'none');
    $('.nav-menu-add-to-list').css('text-decoration', 'underline');
    $('.container').html(addToList);
  });
  
  //add your items to local storage
  if (localStorage['index'] === undefined) {
    localStorage.setItem('index', 0);
  }
  $('body').on('click', '.add-item-button', function(){
    if (localStorage['index'] === undefined) {
    localStorage.setItem('index', 0);
    }
    var index = localStorage['index']
    var formData = {};
    formData.recipient = $('.add-item-recipient').val();
    formData.description = $('.add-item-description').val();
    formData.url = $('.add-item-link').val();
    formData.cost = $('.add-item-cost').val();
    formData.checked = false;
    console.log(formData);
    localStorage.setItem(index, JSON.stringify(formData));
    localStorage.setItem('index', Number(index) + 1)

  });
  //display your list from local storage
  $('.outer-container').ready(function(){
    for (var i = 0; i < localStorage.length - 1; i++) {
      var parsedLS = JSON.parse(localStorage[i]);
      if (parsedLS.checked === false) {
        var addListItems = '<div class = "list-item-unchecked" id = "' + i + '"><div class = "list-has-purchased">Purchased<input type="checkbox" value="true" class = "checkbox-has-purchased"></div><div class = "list-recipient">' + parsedLS['recipient'] + '</div><div class = "list-description">' + parsedLS['description'] + '</div><div class = "list-url"><a href="' + parsedLS['url'] + '" target="_blank" >Link to Product</a></div><div class = "list-cost">$' + parsedLS['cost'] + '</div></div>'
      } else {
        var addListItems = '<div class = "list-item-checked" id = "' + i + '"><div class = "list-has-purchased">Purchased<input type="checkbox" value="true" class = "checkbox-has-purchased"></div><div class = "list-recipient">' + parsedLS['recipient'] + '</div><div class = "list-description">' + parsedLS['description'] + '</div><div class = "list-url"><a href="' + parsedLS['url'] + '" target="_blank" >Link to Product</a></div><div class = "list-cost">$' + parsedLS['cost'] + '</div></div>'
      } 
      $('.container').append(addListItems);

    }
  });
    //display your list from local storage when "View List" clicked
  $('.nav-menu-view-list').on('click', function(){
    $('.nav-menu-add-to-list').css('text-decoration', 'none');
    $('.nav-menu-view-list').css('text-decoration', 'underline');
    $('.container').html('');
    for (var i = 0; i < localStorage.length - 1; i++) {
      var parsedLS = JSON.parse(localStorage[i]);
      if (parsedLS.checked === false) {
        var addListItems = '<div class = "list-item-unchecked" id = "' + i + '"><div class = "list-has-purchased">Purchased<input type="checkbox" value="true" class = "checkbox-has-purchased"></div><div class = "list-recipient">' + parsedLS['recipient'] + '</div><div class = "list-description">' + parsedLS['description'] + '</div><div class = "list-url"><a href="' + parsedLS['url'] + '" target="_blank" >Link to Product</a></div><div class = "list-cost">$' + parsedLS['cost'] + '</div></div>'
      } else {
        var addListItems = '<div class = "list-item-checked" id = "' + i + '"><div class = "list-has-purchased">Purchased<input type="checkbox" value="true" class = "checkbox-has-purchased"></div><div class = "list-recipient">' + parsedLS['recipient'] + '</div><div class = "list-description">' + parsedLS['description'] + '</div><div class = "list-url"><a href="' + parsedLS['url'] + '" target="_blank" >Link to Product</a></div><div class = "list-cost">$' + parsedLS['cost'] + '</div></div>'
      } 
      $('.container').append(addListItems);
    }
  });
    //update the class if purchased is checked or unchecked
  $('.list-has-purchased').on('click', function(){ 
    console.log('i ran');

    // $(".btn").removeClass("course-btn-tab-selected").addClass("course-btn-tab");;                 
    //  $(this).addClass("course-btn-tab-selected");  
  });     
  // delete from local storage when delete button clicked
  $('.nav-menu-clear-list').on('click', function(){
    localStorage.clear();
    localStorage.setItem('index', 0);
  });
});
var addToList = '<div class = "add-item-form"><div class = "add-item-input"><p>Gift Recipient</p><textarea class = "add-item-recipient"></textarea></div><div class = "add-item-input"><p>Item/Description</p><textarea class = "add-item-description"></textarea></div><div class = "add-item-input"><p>Link to Item</p><textarea class = "add-item-link"></textarea></div><div class = "add-item-input"><p>Item Cost</p><textarea class = "add-item-cost"></textarea></div><div class = "add-item-button" type="button">Add Item</div></div>'
