var $ = require('jquery');

var Mustache = require('mustache');

$(function() {
 
  $.getJSON('js/data.json', function(data) {	// jquery to get json, put into data object
    var template = $('#speakerstpl').html();	// get template in index.html
    var html = Mustache.to_html(template, data);	// load data into template, creates html
    $('#speakers').html(html);    // feed html into speakers id
  }); //getJSON
  
}); //function

$(function() {
 
  $.getJSON('js/day1.json', function(data) {	// jquery to get json, put into data object
    var template = $('#programtpl').html();	// get template in index.html
    var html = Mustache.to_html(template, data);	// load data into template, creates html
    $('#day1').html(html);    // feed html into speakers id
  }); //getJSON
  
}); //function