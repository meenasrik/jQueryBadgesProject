$(function() {

  // your code will go here
    
    $.ajax({
        url: 'https://www.codeschool.com/users/srimee.json',
        dataType: "jsonp",
        success: function(response) {
            // handle response
            console.log(response.courses.completed);
            
        getBadges(response.courses.completed);
            
        }
        
    });
    
    function getBadges(courses) {
        
        //loop over the array and create one div for each course
        courses.forEach(function(item) {
            
            //create div and add class course
            var $courseName = $('<div />', {
                class : "course"
            }).appendTo('#badges');
                               
             console.log(item.title);   
            //create h3 inside div with title as course names
            $('<h3 />', {
                text : item.title
            }).appendTo($courseName);
            
            //create image with src link as the badge property value
            $('<img />', {
                src: item.badge
            }).appendTo($courseName);
            
            $('<a/>', {
                href: item.url,
                target: '_blank',
                class: 'btn btn-primary',
                text: "See Course"
            }).appendTo($courseName);
        });  
    } 
});
