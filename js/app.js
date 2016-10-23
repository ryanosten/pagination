var studentListItems = $('.student-list li');

//hide all elements after 10th element
studentListItems.slice(10).hide();

//count number of records, and divide by 10 to get number of pages required
var numPages = Math.ceil(studentListItems.length / 10);

//add pagination structure
$('.student-list').after('<div class="pagination"><ul></ul></div>');

//build string to add the page links
var pages = '';

for(i = 1; i <= numPages; i++){
	pages += '<li>'
	pages += '<a href="#">' + i + '</a>'
	pages += '</li>'
} 

//add the pages list items to the unordered pagination list
$('.pagination').children().html(pages);

$('.pagination ul li').on("click", function(){
	//get the text of the html element clicked and convert it to an integer
	var pageClicked = parseInt($(this).text());
	
	//hide list of students
	studentListItems.hide();
	//slice list and show list based on pageClicked
	studentListItems.slice(10*pageClicked-10, 10*pageClicked).show();

});




