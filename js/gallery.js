/*********************************
  JavaScript Gallery
  author: Sara Garza
  last updated: 7/30/16
**********************************/

/*********************************
What I want the program to do?

1. Have a menu of galleries available
to view on left side.
2. When user selects a gallery to
view
	a.Photos load on right side of
	the screen
	b.User is able to scroll through
	photos left and right
**********************************/


/*********************************
	Menu
**********************************/
$(function () {
var data = {
	"menu": [{
		"name": "Bands",
		"link": "#",
		"sub": [{
			"name": "Dresden Dolls",
			"link": "0-0",
			"sub": null
		}, {
			"name": "J Metro",
			"link": "0-1",
			"sub": null
		}]
	}]
};


    var getMenuItem = function (data) {
        var item = $("<li>")
            .append(
        $("<a>", {
            href: data.link,
            html: data.name
        }));
        if (data.sub) {
            var subList = $("<ul>");
            $.each(data.sub, function () {
                subList.append(getMenuItem(this));
            });
            item.append(subList);
        }
        return item;
    };

    var $menu = $("#menu");
    $.each(data.menu, function () {
        $menu.append(
            getMenuItem(this)
        );
    });
    $menu.accordion({
    	collapsible: true,
    	active: false,
        navigation: true,
        clearStyle: true
    });
});

/*********************************
    Gallery: Slide Show
**********************************/
var slideIndex = 1;

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for(i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    //x[slideIndex-1].style.display = "block";
}

/*********************************
    Menu: On click
**********************************/

var menuLink = {
    "0-0": [{
        "link": "..images/gallery/bands/dresden-dolls",
        "fileCount": "5"
    }],
    "0-1": [{
        "link": "..images/gallery/bands/jmetro",
        "fileCount": "18"
    }]
};

var imgHTML = '<img class="mySlides" src="%data%">';

var addPhotos = function (dataLink) {
    $("#main").empty();

    var x;
    if(menuLink.hasOwnProperty(dataLink)){
        for (x = 1; x <= menuLink[dataLink].fileCount; x++){
            var formattedImgHTML = imgHTML.replace("%data%", menuLink[dataLink].link);
            $('#main').append(formattedImgHTML);
        }
    }
 };

var menuOnClick = function () {
    var link = $("li > a").attr("[href]");
    addPhotos(link);
    showDivs(slideIndex);
};

$("ui-accordion-content > a").click(function (e) {
    e.preventDefault();
    menuOnClick();

});

