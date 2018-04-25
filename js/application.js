$(document).ready(function() {
  //runs when the DOM is ready
    //function showDesc shows the description
    function showDesc(event) { 
        event.preventDefault();
        $(this).find('span').fadeToggle('fast');        
    }
  
  $('.landing').on('mouseenter', 'li', showDesc);
  $('.landing').on('mouseleave', 'li', showDesc);
  
});

