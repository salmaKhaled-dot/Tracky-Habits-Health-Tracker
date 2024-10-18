let scrollingStopped;
const Sections = document.querySelectorAll("section");
const needed = Sections[-1];


    //Adding smooth scrooling to the webpage
    window.addEventListener("scroll", function () {

        // reset the "scrollingStopped" timer
        clearTimeout(scrollingStopped);
        scrollingStopped = setTimeout(function () {
            let lastSectionInView = null;

            //getting the dimensions of the sections
           
                const rect = needed.getBoundingClientRect();

                // Adjusted the logic to account for different viewport scenarios
                const isInView = rect.top < window.innerHeight && rect.bottom > 0;
                if (isInView) {
                    lastSectionInView = needed;
                }

            // Remove active class from all section


            // Add active class to the section in view
            if (lastSectionInView) {
                const div = document.getElementsByClassName("describtion");
                last = div[-1];
                last.setAttribute("id", "last");
            }

        }, 50);
    });