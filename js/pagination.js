//store a jQuery object representing the student list
var studentListItems = $('.student-list li');

//number of items that will appear on a page
var itemsPerPage = 10;

//count number of students, and divide by 10 to get number of pages required to build pagination
var numPages = Math.ceil(studentListItems.length / itemsPerPage);

//we will use this to build a string to add the page links to
var pages = '';

//hide all elements after 10th element
studentListItems.slice(itemsPerPage).hide();

//add pagination structure
$('.student-list').after('<div class="pagination"><ul></ul></div>');

//build string for pagination buttons
for(i = 1; i <= numPages; i++){
	pages += '<li>'
	pages += '<a href="#">' + i + '</a>'
	pages += '</li>'
} 

//add the pages list items to the unordered pagination list
$('.pagination').children().html(pages);

//click handler that checks the page link clicked and displays the appropriate list of students
$('.pagination ul li').on("click", function(){
	//get the text of the html element clicked and convert it to an integer
	var pageClicked = parseInt($(this).text());
	
	//hide list of students
	studentListItems.hide();
	//show list of students based on page link clicked
	studentListItems.slice(itemsPerPage*pageClicked-itemsPerPage, itemsPerPage*pageClicked).show();
});




