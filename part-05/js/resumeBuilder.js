/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name: "赵晓荣",
    role: "Web前端开发",
    contacts: [{
        "mobile": "18810706531",
        "email": "18810706531@163.com",
        "twitter": "www.blog.com",
        "github": "https://github.com/zhaoxr/",
        "blog": "https://blog.com/zhaoxr/",
        "location": "北京",
    }],
    welcomeMessage: "Successful people always ready, go do what losers refused to challenge",
    skills: ["HTML", "CSS", "JavaScript", "Vue", "requireJS"],
    biopic: "images/fry.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedGeneric = HTMLcontactGeneric.replace("%contact%", "welcome here");

    $("#header").prepend(formattedName, formattedRole);
    $("#header").append(formattedPic, formattedMsg, HTMLskillsStart);
    bio.contacts.forEach(function(ele) {
        var formattedMobile = HTMLmobile.replace("%data%", ele.mobile);
        var formattedEmail = HTMLemail.replace("%data%", ele.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", ele.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", ele.github);
        var formattedLocation = HTMLlocation.replace("%data%", ele.location);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
    })

    bio.skills.forEach(function(element, index) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[index]));
    });

}

var education = {
    schools: [{
        "name": "河南机电高等专科学校",
        "location": "河南省新乡市平原路(东段)699号",
        "degree": "专科",
        "majors": ["计算机网络技术", "C++程序设计"],
        "dates": "2010-09-09",
        "url": "http://www.hneeu.edu.cn/"
    }],
    onlineCourses: [{
        "title": "前端开发",
        "school": "优达学城",
        "dates": "2017 - ",
        "url": "https://cn.udacity.com/"
    }, {
        "title": "前端开发1",
        "school": "优达学城1",
        "dates": "2017 - ",
        "url": "https://cn.udacity.com/"
    }]
};
education.display = function() {


    education.schools.forEach(function(ele) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", ele.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", ele.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", ele.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", ele.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", ele.majors);

        $(".education-entry:last").prepend(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
    })
    $("#education").append(HTMLschoolStart);

    for (var i = 0; i < education.onlineCourses.length; i++) {
        // console.info(education.onlineCourses[i].title);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedTitle + formattedSchool, formattedDates, formattedURL);
    }
    $(".education-entry:last").before(HTMLonlineClasses)

}
var work = {
    jobs: [{
        "emplayer": "普通员工",
        "title": "web前端开发",
        "location": "北京市海淀区北四环西路111号",
        "dates": "2016-01-19",
        "description": "主要从事静态页面切图"
    }]
};
work.display = function() {
    $("#workExperience").append(HTMLworkStart);

    work.jobs.forEach(function(ele) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", ele.emplayer);
        var formattedTitle = HTMLworkTitle.replace("%data%", ele.title);
        var formattedDates = HTMLworkDates.replace("%data%", ele.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", ele.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", ele.description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedLocation, formattedDescription);
    })
}
var projects = {
    projects: [{
        "title": "红豆电信",
        "dates": "2017-06-01",
        "description": "主要开发代理商APP，网厅、微信营业厅，订单中心",
        "images": ["images/fry.jpg", "images/fry.jpg"]
    }]
};
projects.display = function() {
    $("#projects").append(HTMLprojectStart);

    projects.projects.forEach(function(ele) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", ele.title);
        var formattedDates = HTMLprojectDates.replace("%data%", ele.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", ele.description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription, formattedImage);

        for (var i = 0; i < ele.images.length; i++) {
            var formattedImage = HTMLprojectImage.replace("%data%", ele.images[i]);
            $(".project-entry:last").append(formattedImage);
        }


    })


}

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
