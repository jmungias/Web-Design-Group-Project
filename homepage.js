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
        <div class="course-nav">
            <button class="course-nav-button">
                <img src="side-dropdown.png"/>
            </button>
            <div class="course-nav-text">
                1-JAN-2025IT202A
            </div>
        </div>
        <div class="course-nav">
            <button class="course-nav-button">
                <img src="side-dropdown.png"/>
            </button>
            <div class="course-nav-text">
                1-JAN-2025IT202A
            </div>
        </div>
        <div class="course-nav">
            <button class="course-nav-button">
                <img src="side-dropdown.png"/>
            </button>
            <div class="course-nav-text">
                1-JAN-2025IT202A
            </div>
        </div>
        <div class="course-nav">
            <button class="course-nav-button">
                <img src="side-dropdown.png"/>
            </button>
            <div class="course-nav-text">
                1-JAN-2025IT202A
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