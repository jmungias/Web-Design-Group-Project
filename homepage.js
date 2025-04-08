let courses = {
    web_design: {
        date:"1-JAN-2025",
        name: "IT 202(A) Web Design",
        prof: "Dara Wangh",
        description: "An introduction to modern technologies for designing websites. Topic include the basics of coding and styling webpages, building responsive webpages, forms, tables, adding JavaScript and multimedia elements, testing and debugging webpages, publishing pages on the Web."
    },
    web_design_lab:{
        date:"1-JAN-2025",
        name: "IT 202(AL) Web Design",
        prof: "Ed Tymchyshyn",
        description: "An introduction to modern technologies for designing websites. Topic include the basics of coding and styling webpages, building responsive webpages, forms, tables, adding JavaScript and multimedia elements, testing and debugging webpages, publishing pages on the Web."
    }

}
let myCoursesDropDownToggle = false;

const myCourses = document.querySelector(".mycourses-dropdown")
let myCoursesDropDown = myCourses.innerHTML
console.log(myCoursesDropDown)

const myCoursesButton = document.querySelector(".mycourses-nav-button")
myCoursesButton.addEventListener("click", toggleMyCourses)

function toggleMyCourses (){
    console.log(myCoursesDropDownToggle)
    if (!myCoursesDropDownToggle){
        myCourses.innerHTML =
        `<div class="course-nav">
                                <button class="course-nav-button">
                                    <img src="side-dropdown.png"/>
                                </button>
                                <div class="course-nav-text">
                                    1-JAN-2025IT202A
                                </div>
                            </div>
                            <div class="course-nav participants-nav" style="margin-left:7%">
                                <button class="course-nav-button">
                                    <img src="side-dropdown.png"/>
                                </button>
                                <div class="course-nav-text participants-link" onclick="window.location.href='participantspage.html'">
                                    <a>Participants</a>
                                </div>
                            </div>
                            <div class="course-nav">
                                <button class="course-nav-button">
                                    <img src="side-dropdown.png"/>
                                </button>
                                <div class="course-nav-text">
                                    1-JAN-2025IT301A
                                </div>
                            </div>
                            <div class="course-nav">
                                <button class="course-nav-button">
                                    <img src="side-dropdown.png"/>
                                </button>
                                <div class="course-nav-text">
                                    1-JAN-2025IT302A
                                </div>
                            </div>
                            <div class="course-nav">
                                <button class="course-nav-button">
                                    <img src="side-dropdown.png"/>
                                </button>
                                <div class="course-nav-text">
                                    1-JAN-2024CMPT211A
                                </div>
                            </div>
                            <div class="course-nav">
                                <button class="course-nav-button">
                                    <img src="side-dropdown.png"/>
                                </button>
                                <div class="course-nav-text">
                                    1-JAN-2024IT210A
                                </div>
                            </div>
                            <div class="more">
                                <button class="more-button"></button>
                                <div class="more-text">More...</div>
                            </div>`;
        myCoursesDropDownToggle = true;
    } else{
            myCourses.innerHTML =null;
            myCoursesDropDownToggle = false;
    }
}

topDropDownToggle = false;

const topDropDownButton = document.querySelector(".dropdown-icon")
const topDropDown = document.querySelector(".top-dropdown")
topDropDownButton.addEventListener("click", toggleTopDropDown)

function toggleTopDropDown(){
    if (!topDropDownToggle){
        topDropDownToggle = true
        topDropDown.classList.add("top-dropdown-off")
    }else{
        topDropDownToggle = false
        topDropDown.classList.remove("top-dropdown-off")
    }
}

let sitesDropDownToggle = false;

const sites = document.querySelector(".sites-dropdown")
let sitesDropdown = sites.innerHTML
console.log(sitesDropdown)

const sitesButton = document.querySelector(".sites-nav-button")
sitesButton.addEventListener("click", toggleSites)

function toggleSites (){
    console.log(sitesDropDownToggle)
    if (!sitesDropDownToggle){
        sites.innerHTML =
        `<div class="sites-nav">
            <button class="sites-button">

            </button>
            <div class="sites-text">
                My Courses
            </div>
        </div>
        <div class="sites-nav">
            <button class="sites-button">
                
            </button>
            <div class="sites-text">
                Site blogs
            </div>
        </div>
        <div class="sites-nav">
            <button class="sites-button">
                
            </button>
            <div class="sites-text">
                Site badges
            </div>
        </div>
        <div class="sites-nav">
            <button class="sites-button">
                
            </button>
            <div class="sites-text">
                Tags
            </div>
        </div>`;
        sitesDropDownToggle = true;
    } else{
            sites.innerHTML =null;
            sitesDropDownToggle = false;
    }
}

sitesDropDownToggle = false;

const sitesDropDownButton = document.querySelector(".sites-nav-button")
const sitesDropDown = document.querySelector(".sites-dropdown")
sitesDropDownButton.addEventListener("click", sitesToggleDropDown)

function toggleTopDropDown(){
    if (!topDropDownToggle){
        topDropDownToggle = true
        topDropDown.classList.add("top-dropdown-off")

        // ✅ Add event listener after the button exists in DOM
        setTimeout(() => {
            const gradesButton = document.getElementById("grades");
            if (gradesButton) {
                gradesButton.addEventListener("click", () => {
                    window.location.href = 'grades.html';
                });
            }
        }, 0);

    } else {
        topDropDownToggle = false
        topDropDown.classList.remove("top-dropdown-off")
    }
}

document.getElementById("grades").addEventListener("click", () => {
    window.location.href='grades.html'
});