/* GLOBAL VARIABLES */

//number of items that will appear on a page
var itemsPerPage = 10;

//we will use this to build a string to add the page links to
var pages = '';

//dynamically add the search input to the DOM
$(".page-header").children().first().after('<div class="student-search"><input placeholder="Search for students..."></div>');

var studentListItems = [];

/* EVENT HANDLERS */

//hide all elements after itemPerPage
$(document).ready(function(){
//store a jQuery element representing the student list
var studentListItems = $('.student-list li');
studentListItems.slice(itemsPerPage).hide();	

});

//This click handler will store the text of the html element clicked and convert it to an integer
//Then hide list of students, and then use slice to show list of students based on page clicked
$('.pagination ul li').on("click", function(){
	//count number of students, and divide by itemsPerPage to get number of pages required to build pagination
	var pageClicked = parseInt($(this).text());
	$(studentListItems).hide();
	$(studentListItems).slice(itemsPerPage*pageClicked-itemsPerPage, itemsPerPage*pageClicked).show();
});


//add pagination elements
$('.student-list').after('<div class="pagination"><ul></ul></div>');

//build string for pagination buttons
for(i = 1; i <= Math.ceil($('.student-list li').length / itemsPerPage); i++){
	pages += '<li>';
	pages += '<a href="#">' + i + '</a>';
	pages += '</li>';
} 

//add the pages list items to the unordered pagination list
$('.pagination').children().html(pages);





