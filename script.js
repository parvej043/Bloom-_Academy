/* =====================================================
   BLOOM ACADEMY
   JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* ================= CLOSE MENU ================= */

const navLinks = document.querySelectorAll(
    "#navMenu a"
);


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});



/* ================= COURSE AUTO FILL ================= */

// const courseLinks =
//     document.querySelectorAll(
//         ".course-enquiry"
//     );


// courseLinks.forEach(function (link) {

//     link.addEventListener("click", function () {

//         const selectedCourse =
//             link.getAttribute("data-course");


//         const courseInput =
//             document.getElementById("course");


//         if (courseInput) {

//             courseInput.value =
//                 selectedCourse;

//         }

//     });

// });



/* ================= WHATSAPP FORM ================= */

const enquiryForm =
    document.getElementById(
        "enquiryForm"
    );


enquiryForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* Get values */

        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const course =
            document
                .getElementById("course")
                .value
                .trim();


        const message =
            document
                .getElementById("message")
                .value
                .trim();


        /* Validate */

        if (!name || !course) {

            alert(
                "Please enter your name and class/course."
            );

            return;

        }


        /* WhatsApp Message */

        const whatsappMessage =

            `Hello Bloom Academy,

` +

            `Name: ${name}

` +

            `Class / Course: ${course}

` +

            `Message: ${
                message ||
                "I want admission details."
            }`;


        /* Encode message */

        const encodedMessage =
            encodeURIComponent(
                whatsappMessage
            );


        /* WhatsApp Number */

        const phone =
            "919869657720";


        /* WhatsApp URL */

        // const whatsappURL =
        //     `https://wa.me/${phone}?text=${encodedMessage}`;


        /* Open WhatsApp */

//         window.open(
//             whatsappURL,
//             "_blank"
//         );

//     }
// );



/* ================= SCROLL EFFECT ================= */

window.addEventListener(
    "scroll",
    function () {

        const header =
            document.querySelector(".header");


        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 5px 25px rgba(0,0,0,0.06)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);
