

var skills = ["Digital Photography", "Event Photography", "Illustrator", "InDesign",
"Industry Work", "Organization", "Set Photographer", "Photoshop", "Production Assistance",
"Travel Photography"];

var gear = ["Canon 60D", "Microsoft Suite", "Photoshop Suite"];

var bio = {
	"name": "Jill English",
	"role": "Production Coordinator",
	"location": "DFW Metroplex",
	"picture": "images/jilly-photo.jpg",
	"summary": "I perform any and all of my task quickly, efficiently, and 
	without stepping on any toes; as well as being highly motivated, 
	a great problem solver, creative, and enthusiastic. I am gaining skills as 
	a Story/Assoc. Producer, and I love researching for projects.",
	"skills": skills
};

var work = {
	"current": [
				{
					"employer": "Invodo INC",
					"jobTitle": "Studio Services Coordinator",
					"desc": ""
				}
			],

	"proAssistant": [
		{
			"employer": "MINDER",
			"project": "Bose Headphones Commercial",
			"dates": "11/14"
		},
		{
			"employer": "Brutally Honest Inc.",
			"project": "L.I.S (aka Anonymous) Pilot",
			"dates": "9/14"
		},
		{
			"employer": "Oceanwatch Productions",
			"project": "Red Bull Cliff Diving World Series"
			"dates": "6/14"
		}
		],

	"stillPhotographer": [
		{
			"employer": "Hadley Media",
			"project": "Adult Swin Fun House Tour",
			"dates": "3/14"
		},
		{
			"employer": "Hadley Media",
			"project": "Adult Swin Fun House Tour",
			"dates": "3/14"
		},
		{
			"employer": "Hadley Media",
			"project": "Adult Swin Fun House Tour",
			"dates": "3/14"
		},
		{
			"employer": "Hadley Media",
			"project": "Adult Swin Fun House Tour",
			"dates": "3/14"
		},
		{
			"employer": "Hadley Media",
			"project": "Adult Swin Fun House Tour",
			"dates": "3/14"
		},
		{
			"employer": "Hadley Media",
			"project": "Adult Swin Fun House Tour",
			"dates": "3/14"
		}
		]
};

var education = {
	"name": "Stephen F. Austin University",
	"url": "https://sfasu.edu"
	"location": "Nacogdoches, Tx",
	"dates": "2006-2010",
	"degree": "Bachlors"
	"major": "Cinematography",
	"minor": "Photography"
};

/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

var HTMLsummaryStart = '<div class="summary"><h2>Summary</h2></div>';
var HTMLsummaryPara = '<p>%data%</p>';

var HTMLeducationStart = '<div class="education"><h2>Education</h2></div>';
var HTMLschoolURL = '<a href="%data%"><h3>';
var HTMLschoolName = '%data%</h3></a>';
var HTMLschoolDates = '<div class="date-text>%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolDegree = '<em>%data% of %major% with a minor in %minor%';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var displayWork = function(){
	for(job in work.jobs) {
		$("#resume").append(HTMLworkStart);
		var formattedJobEmployer = HTMLworkEmployer.replace("%data%, work.jobs[job].employer");
		var formattedWorkTitle - HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].)
	}
}

