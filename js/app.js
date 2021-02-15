'use strict';

function Dog(image_url, title, description,keyword,horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;

}

Dog.prototype.render = function () {
  let dogSection = $('.dog-template').clone();
  $('main').append(dogSection);
  dogSection.find('img').attr('src', this.image_url);

  dogSection.find('h2').text(this.title);
  dogSection.find('p').text(this.description);
  dogSection.removeClass('dog-template');
};

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


