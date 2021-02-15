'use strict';
var arr=[];

function Dog(image_url, title, description,keyword,horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  arr.push(this)
}

// $('document').ready(function(){
// $('select').on('click',function(){
// // $(this).siblings('option')
// let newSelect=$(this).val()
// // console.log(newSelect);
// newSelect.render();
// })


// })


Dog.prototype.render = function () {
  var dogSection = $('.dog-template').clone();
  $('main').append(dogSection);
  dogSection.find('img').attr('src', this.image_url);
  dogSection.find('h2').text(this.title);
  dogSection.find('p').text(this.description);
  dogSection.removeClass('dog-template');
 
};


// Dog.prototype.newOption= function() {
//   let newSelect=$(this).val()
//   if (newSelect===this.keyword) {
//     $('section').remove();
//   }
// }


$('document').ready(function(){
  $('select').on('change',function(){
  // $(this).siblings('option')
  let newSelect=$(this).val()
  // console.log(newSelect);
  if (newSelect) {
    $('section').remove();
    if (newSelect === this.keyword) {
 
    }
  }
  })
  
  
 })
function populateDogsData() {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };

  $.ajax('page-1.json', ajaxSettings)
    .then(data => {
      data.forEach(element => {
        let jsDog = new Dog(element.image_url, element.title,element.description);
        jsDog.render();
      });
    });
}


$('document').ready(populateDogsData);


