'use strict';

$.get('./data/page-1.json')
    .then(data => {
        //    console.log(data);
        data.forEach((element) => {

            let newHorn = new Horn(element);
            newHorn.render();

            //    console.log(element);
        });
        keywordArr.forEach(element => {
            theOption(element);
        });

    })
    .then(() => selection());



function Horn(element) {
    this.image_url = element.image_url;
    this.title = element.title;
    this.description = element.description;
    this.keyword = element.keyword;
    // console.log(this.keyword);
    this.horns = element.horns;
    hornArr.push(this);
    if (keywordArr.includes(this.keyword) === false) {
        keywordArr.push(this.keyword);
    }
}
let hornArr = [];
let keywordArr = [];
console.log(keywordArr);

Horn.prototype.render = function () {


    let sectionClone = $('.photo-template').clone();
    sectionClone.removeClass('photo-template');
    sectionClone.find('h2').text(this.title);
    sectionClone.find('img').attr('src', this.image_url);
    sectionClone.find('p').text(this.description);
    $('main').append(sectionClone);


}
function theOption(element) {

    let options = $('<option></option>').text(element);
    $('select').append(options);
    
}


function selection() {
    $('select').on('change', function () {

        let selected = $(this).val();
        console.log(selected);
        let allselected = hornArr.filter((element) => element.keyword === selected);
        console.log(allselected);
        $('section:not(:first)').remove();
        allselected.forEach(value => {
            value.render();
        });



    });
}