//number of items that will appear on a page
var itemsPerPage = 10;

//we will pages var to build a string to add the pagination links to
var pages = '';

//array to hold all students list items
var studentListItems = $('.student-list li');

$(document).ready(function(){
	//dynamically add the search input to the DOM
	$(".page-header").children().first().after('<div class="student-search"><input placeholder="Search for students..."></div>');
	
	//show student list because its hidden on page load via css
	$('.student-list').show();
	
	//hide all student list items after the nth list item (nth being determined by itemsPerPage var)
	$(studentListItems).slice(itemsPerPage).hide();

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

	//This click handler will store the text of the html element clicked and convert it to an integer
	//Then hide list of students, and then use slice to show list of students based on page clicked
	$('.pagination ul li').on("click", function(){
		
		//count number of students, and divide by itemsPerPage to get number of pages required to build pagination
		var pageClicked = parseInt($(this).text());
		
		//hide studentListItems 
		$(studentListItems).hide();
		
		//show studentListItems based on page clicked
		$(studentListItems).slice(itemsPerPage*pageClicked-itemsPerPage, itemsPerPage*pageClicked).show();
	});	
});








