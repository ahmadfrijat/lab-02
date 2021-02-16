'use strict';

let hornArr = [];
let keywordArr = [];



function Horn(element) {
    this.image_url = element.image_url;
    this.title = element.title;
    this.description = element.description;
    this.keyword = element.keyword;
    this.horns = element.horns;
    hornArr.push(this);
    if (!keywordArr.includes(this.keyword)) {
        keywordArr.push(this.keyword);
    }
}
console.log(keywordArr);

Horn.prototype.render = function () {
    let newDiv = $('#neigh-template').html();
    let html = Mustache.render(newDiv, this);
    $('#newtemplate').append(html);

    // if (!keywordArr.includes(this.keyword)) {
    //     keywordArr.push(this.keyword);

    //     let options = $('#option').html();
    //     let sndHtml = Mustache.render(options, this);
    //     $('#selectClone').append(sndHtml);
    // }

}
// -------------------------
// -------------------------
// -------------------------


Keywords.array = [];

function bulder() {
    keywordArr.forEach(element => {
        let key = new Keywords(element);
        Keywords.array.push(key);

    });
    Keywords.array.forEach(element => {
        // console.log(element);
        let options = $('#option').html();
        let sndHtml = Mustache.render(options, element);
        $('#selectClone').append(sndHtml);


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
function Keywords(element) {
    this.keyOption = element;
}
// ----------------------------------
// -------------------------
// -------------------------

function selection() {
    $('#selectClone').on('change', function () {
        let selected = $(this).val();
        // console.log(selected);
        $('div').hide();
        if (selected === 'default') {
            $('div').show();
            // console.log("kkk");
        }
        hornArr.forEach(val => {
            if (val.keyword === selected) {
                $(`div[class=${selected}]`).show();
                // console.log("rrrr");
            }
        })
    })
}

function pages() {

    $('button').on('click', function () {
        let bclass = $(this).attr('class');
        // console.log(bclass);
        $('div').remove();
        // $('#selectClone').empty();
        hornArr = [];
        keywordArr = [];
        Keywords.array = [];
        // console.log(Keywords.array);
        renderPages(`./data/${bclass}.json`);

    })
}
// ---------------------sort---------------------------
// --------------------------------------------------
function sortion() {

    $('.sortBy').on('click', function () {
        // console.log("jjjj");
        if ($('.sortBy').val() === 'title') {
            // console.log("llllllllllllllllllllllllllll");
            sortAlgorithem(hornArr, 'title');
        }
        if ($('.sortBy').val() === 'horns') {
            sortAlgorithem(hornArr, 'horns');
        }

    })
}
function sortAlgorithem(array, key) {
    // console.log("mymymymy")
    array.sort(function (a, b) {
        // console.log("in sorting");
        let i = a[key];
        let j = b[key];
        if (i < j) return -1;
        else if (i > j) return 1;
        else return 0;

    })
    $('div').remove();
    hornArr.forEach(val => {
        val.render();
    })
}

pages();
renderPages('./data/page-1.json');
function renderPages(dataJSON) {
    $.get(dataJSON)
        .then(data => {
            data.forEach((element) => {
                let newHorn = new Horn(element);
                newHorn.render();
            });
            bulder();

            selection();
            sortion();
            // sortAlgorithem();
        })

}

console.log(Keywords);

// function populateDogsData() {
//     const ajaxSettings = {
//       method: 'get',
//       dataType: 'json'
//     };
//     $.ajax('./data/page-1.json', ajaxSettings)
//       .then(data => {
//         data.forEach(element => {
//           let jsDog = new Horn(element)
//           jsDog.render();
//         });
//         keywordArr.forEach(element => {
//                  theOption(element);

//                     });
//       });


//   }
//   (() => selection());

//   $('document').ready(populateDogsData);

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
