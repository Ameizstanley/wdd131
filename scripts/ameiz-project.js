const course = [
    {
        id: 1,
        language: "Spanish",
        flag:
        "https://media.gettyimages.com/id/565939839/photo/flag-of-spain-on-building-roof-spain.jpg?s=612x612&w=0&k=20&c=lDfn2EZj5aIXVUX4xeYj96anjcSRCS7DQNn39W0zv18=",
        level: "Beginner",
        duration: "12 weeks",
        frequency: "3 times a week",
        price: 100000,
        description: "Learn the basics of Spanish, including vocabulary, grammar, and pronunciation. Suitable for beginners with no prior knowledge.",
        backgroundColor: "#45ADA8",
        reviews: [
            {
                reviewer: "Precious",
                rating: 4,
                comment: "Great course for beginners! The instructor is very helpful.",
                date: "2023-10-01"
            },
            {
                reviewer: "Gift",
                rating: 5,
                comment: "I love the interactive approach of this course!",
                date: "2023-10-05"
            },
            {
                reviewer: "Chidinma",
                rating: 3,
                comment: "The course is good, but I wish there were more practice exercises.",
                date: "2023-10-10"
            },
            {
                reviewer: "Eze",
                rating: 4,
                comment: "The course is very informative and well-structured.",
                date: "2023-10-15" 
            }
        ]
    },
    {
        id: 2,
        language: "French",
        flag:
         "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/478C/production/_121561381_gettyimages-976199210.jpg.webp",
        level: "Intermediate",
        duration: "10 weeks",
        frequency: "2 times a week",
        price: 120000,
        description: "Enhance your French skills with a focus on conversation and grammar. Ideal for learners with basic knowledge.",
        backgroundColor: "#45ADA8",
        review:[
            {
                reviewer:"kelechi",
                rating:5,
                comment:"it was a wonderful experience",
                date:"2025-01-25"
            },
            {
                reviewer:"Chibuzor",
                rating:4,
                comment:"i never regretted registering for this course",
                date:"2024-06-18"
            },
            {
                reviwer:"Stanley",
                rating:3,
                comment:"the course wasnt bad shaa",
                date:"2025-02-14"
            }

        ]
    },
    {
        id:3,
        language:"German",
        flag:
        "https://media.istockphoto.com/id/619762776/photo/german-flags-at-reichstag-berlin-germany.jpg?s=1024x1024&w=is&k=20&c=S4owprZ9M6iNiDBqS-QWpD5NoFqgPvJ91lUCrGDtM1k=",
        level:"Beginner",
        duration:"12 weeks",
        frequency:"3 times per week",
        price:150000,
        description:"Learn the basics of German, including vocabulary, grammar, and pronunciation. Suitable for beginners with no prior knowledge.", 
        backgroundColor:"#45ADA8",
        review:[
            {
                reviewer:"chinanza",
                rating:4,
                comment:"the course was very helpful",
                date:"2023-10-01"
            },
            {
                reviewer:"Chidera",
                rating:5,
                comment:"I love the interactive approach of this course!",
                date:"2023-10-05"
            },
            {
                reviewer:"Chinonso",
                rating:3,
                comment:"The course is good, but I wish there were more practice exercises.",
                date:"2023-10-10"
            }
        ]       
    },
    {
        id:4,
        language:"Italian",
        flag:
        "https://media.istockphoto.com/id/474097126/photo/vittoriano-in-rome-altar-of-the-fatherland-waving-flags.jpg?s=2048x2048&w=is&k=20&c=J2qOF1zguh_Ly5j46jKxWR3TyrpUSLP3i6U2y00g_ek=",
        level:"Intermediate",
        duration:"10 weeks",
        frequency:"2 times per week",
        price:120000,
        description:"Enhance your Italian skills with a focus on conversation and grammar. Ideal for learners with basic knowledge.",   
        backgroundColor:"#45ADA8",
    },
    {
        id:5,
        language:"Chinese",
        flag:
        "https://img.freepik.com/free-vector/illustration-china-flag_53876-27015.jpg?t=st=1744624468~exp=1744628068~hmac=b4183fb12da14eb86c2d1e3ce770793bc0d64448001b23d21269fbddf13f0c4a&w=1480",
        level:"Advanced",
        duration:"8 weeks",
        frequency:"2 times per week",
        price:200000,
        description:"Master advanced Chinese language skills, including business vocabulary and cultural nuances. Suitable for advanced learners.",
        backgroundColor:"#45ADA8",
    },
    {
        id:6,
        language:"Japanese",
        flag:
        "https://media.istockphoto.com/id/1360807875/photo/japanese-state-flag-waving-on-the-wind.jpg?s=2048x2048&w=is&k=20&c=WEMY2HFzBZtWYGQFqq8V6Hww6hmF9jYhcdpmtaLpffo=",
        level:"Beginner",
        duration:"12 weeks",
        frequency:"3 times per week",
        price:150000,
        description:"Learn the basics of Japanese, including vocabulary, grammar, and pronunciation. Suitable for beginners with no prior knowledge.",
        backgroundColor:"#45ADA8",
    },
    {
        id:7,
        language:"Russian",
        flag:
        "https://media.istockphoto.com/id/113703276/photo/flag-from-russia.jpg?s=2048x2048&w=is&k=20&c=iHpukJJXpZtlhh4rkmJ10ptbRY6TkFMymmjj-taYlTM=",
        level:"Intermediate",
        duration:"10 weeks",
        frequency:"2 times per week",
        price:120000,
        description:"Enhance your Russian skills with a focus on conversation and grammar. Ideal for learners with basic knowledge.",
        backgroundColor:"#45ADA8",
    },
    {
        id:8,
        language:"Arabic",
        flag:
        "https://i0.wp.com/eloquentdisplays.com/wp-content/uploads/2020/03/saudi-arabia-flag-in-nigeria.jpg?fit=800%2C800&ssl=1",
        level:"Advanced",
        duration:"8 weeks",
        frequency:"2 times per week",
        price:200000,
        description:"Master advanced Arabic language skills, including business vocabulary and cultural nuances. Suitable for advanced learners.",
        backgroundColor:"#45ADA8",
    },
    {
        id:9,
        language:"Portuguese",
        flag:
        "https://media.istockphoto.com/id/483663073/vector/flag-of-portugal.jpg?s=2048x2048&w=is&k=20&c=l6CVcSYkp-_VrKzcaHwOsF7KNcfrkBVimUOdmJciEZU=",
        level:"Beginner",
        duration:"12 weeks",
        frequency:"3 times per week",
        price:150000,
        description:"Learn the basics of Portuguese, including vocabulary, grammar, and pronunciation. Suitable for beginners with no prior knowledge.",
        backgroundColor:"#45ADA8",
    },
    {
        id:10,
        language:"Korean",
        flag:
        "https://media.istockphoto.com/id/157528400/photo/south-korean-flag-in-front-of-gyeongbokgung-palace.webp?s=2048x2048&w=is&k=20&c=T9BfRVld0odvPSeSz4lff3xd3RVxIJ--Apk1-IkGbas=",
        level:"Intermediate",
        duration:"10 weeks",
        frequency:"2 times per week",
        price:120000,
        description:"Enhance your Korean skills with a focus on conversation and grammar. Ideal for learners with basic knowledge.",
        backgroundColor: "#45ADA8",
    }
];


function createCourseCard(course) {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");

    // Create course header
    const courseHeader = document.createElement("div");
    courseHeader.classList.add("course-header");
    courseHeader.style.backgroundColor = course.backgroundColor;

    const courseFlag = document.createElement("img");
    courseFlag.src = course.flag;
    courseFlag.alt = `${course.language} Flag`;
    courseFlag.classList.add("course-flag");
    courseFlag.loading = "lazy";
    courseFlag.style.width = "300px";
    courseFlag.style.height = "200px";
    courseHeader.appendChild(courseFlag);

    // Create course info
    const courseInfo = document.createElement("div");
    courseInfo.classList.add("course-info");
    courseInfo.style.display = "flex";
    courseInfo.style.flexDirection = "column";

    const languageHeading = document.createElement("h3");
    languageHeading.textContent = course.language;
    courseInfo.appendChild(languageHeading);

    const levelParagraph = document.createElement("p");
    levelParagraph.textContent = `Level: ${course.level}`;
    courseInfo.appendChild(levelParagraph);

    const durationParagraph = document.createElement("p");
    durationParagraph.textContent = `Duration: ${course.duration}, ${course.frequency}`;
    courseInfo.appendChild(durationParagraph);

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = course.description;
    courseInfo.appendChild(descriptionParagraph);

    // Create course actions
    const courseActions = document.createElement("div");
    courseActions.classList.add("course-actions");

    const priceParagraph = document.createElement("p");
    priceParagraph.textContent = `Price: ₦${course.price.toLocaleString()}`;
    courseActions.appendChild(priceParagraph);

    const learnMoreBtn = document.createElement("button");
    learnMoreBtn.classList.add("learn-more-btn");
    learnMoreBtn.textContent = "Learn More";
    learnMoreBtn.addEventListener("click", () => viewCourseDetails(course.id));
    courseActions.appendChild(learnMoreBtn);

    // Append all elements to the course card
    courseCard.appendChild(courseHeader);
    courseCard.appendChild(courseInfo);
    courseCard.appendChild(courseActions);

    return courseCard;
}

function displayCourses(courseList) {
    const courseSection = document.getElementById("course-section");
    courseSection.innerHTML = ""; // Clear previous content

    courseList.forEach(course => {
        const courseCard = createCourseCard(course);
        courseSection.appendChild(courseCard);
    });
}

// Example function to handle "Learn More" button click
function viewCourseDetails(courseId) {
    // You could replace this with a more sophisticated modal or navigation
    alert(`Viewing details for course ID: ${courseId}`);
}

// Function to standardize the reviews property across all courses
function standardizeCoursesData(course) {
    return course.map(course => {
        // Create a new course object with standardized properties
        const standardizedCourse = {...course};
        
        // Standardize reviews property (make all use "reviews" plural)
        if (course.review && !course.reviews) {
            standardizedCourse.reviews = course.review;
            delete standardizedCourse.review;
        }
        
        // Ensure all courses have a reviews array
        if (!standardizedCourse.reviews) {
            standardizedCourse.reviews = [];
        }
        
        // Fix any typos in reviewer property
        standardizedCourse.reviews = standardizedCourse.reviews.map(review => {
            const fixedReview = {...review};
            if (review.reviwer && !review.reviewer) {
                fixedReview.reviewer = review.reviwer;
                delete fixedReview.reviwer;
            }
            return fixedReview;
        });
        
        return standardizedCourse;
    });
}

// Display courses on page load
document.addEventListener("DOMContentLoaded", () => {
    // Standardize courses data before displaying
    const standardizedCourse = standardizeCoursesData(course);
    displayCourses(standardizedCourse);
});