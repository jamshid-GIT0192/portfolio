/* =====================================================
   ELEMENTS
===================================================== */

const menuButton =
    document.querySelector(".menu-button");

const fullscreenMenu =
    document.querySelector(".fullscreen-menu");

const menuLinks =
    document.querySelectorAll(".menu-link");

const typingText =
    document.querySelector("#typingText");


/* =====================================================
   MENU
===================================================== */

function openMenu() {

    fullscreenMenu.classList.add("open");

    menuButton.classList.add("active");

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    menuButton.setAttribute(
        "aria-label",
        "Close menu"
    );

    document.body.style.overflow = "hidden";
}


function closeMenu() {

    fullscreenMenu.classList.remove("open");

    menuButton.classList.remove("active");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuButton.setAttribute(
        "aria-label",
        "Open menu"
    );

    document.body.style.overflow = "";
}


function toggleMenu() {

    const isOpen =
        fullscreenMenu.classList.contains("open");

    if (isOpen) {

        closeMenu();

    } else {

        openMenu();

    }
}


/* =====================================================
   BUTTON
===================================================== */

menuButton.addEventListener(
    "click",
    toggleMenu
);


/* =====================================================
   MENU LINKS
===================================================== */

menuLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            menuLinks.forEach((item) => {

                item.classList.remove(
                    "active"
                );

            });


            link.classList.add(
                "active"
            );


            closeMenu();

        }
    );

});


/* =====================================================
   ESCAPE
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            fullscreenMenu.classList.contains("open")
        ) {

            closeMenu();

        }

    }
);


/* =====================================================
   TYPING ANIMATION
===================================================== */

const words = [

    "MY FIRST PORTFOLIO",

    "WELCOME TO MY WORLD",

    "CREATIVE DEVELOPER",

    "LET'S BUILD SOMETHING"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


/* =====================================================
   TYPE FUNCTION
===================================================== */

function typeWriter() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        characterIndex++;

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex
            );


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeWriter,
                1800
            );

            return;
        }


    } else {

        characterIndex--;

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex
            );


        if (
            characterIndex === 0
        ) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex >=
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    const speed =
        deleting
            ? 45
            : 85;


    setTimeout(
        typeWriter,
        speed
    );
}


/* =====================================================
   START TYPING
===================================================== */

typeWriter();
/* =====================================================
   HOME HERO TYPING
===================================================== */

const heroTyping =
    document.querySelector("#heroTyping");

const heroWords = [
    "DIGITAL EXPERIENCES",
    "MODERN WEBSITES",
    "CREATIVE INTERFACES",
    "AMAZING PROJECTS"
];

let heroWordIndex = 0;
let heroCharacterIndex = 0;
let heroDeleting = false;


function heroTypeWriter() {

    if (!heroTyping) return;


    const word =
        heroWords[heroWordIndex];


    if (!heroDeleting) {

        heroCharacterIndex++;

        heroTyping.textContent =
            word.substring(
                0,
                heroCharacterIndex
            );


        if (
            heroCharacterIndex ===
            word.length
        ) {

            heroDeleting = true;

            setTimeout(
                heroTypeWriter,
                1800
            );

            return;
        }

    } else {

        heroCharacterIndex--;

        heroTyping.textContent =
            word.substring(
                0,
                heroCharacterIndex
            );


        if (
            heroCharacterIndex === 0
        ) {

            heroDeleting = false;

            heroWordIndex++;

            if (
                heroWordIndex >=
                heroWords.length
            ) {

                heroWordIndex = 0;
            }
        }
    }


    setTimeout(
        heroTypeWriter,
        heroDeleting ? 40 : 75
    );
}


heroTypeWriter();
/* =====================================================
   ABOUT SCROLL ANIMATION
===================================================== */

const aboutSection =
    document.querySelector("#about");


if (aboutSection) {

    const aboutObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            aboutSection.classList.add(
                                "show"
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.2
            }

        );


    aboutObserver.observe(
        aboutSection
    );
}


/* =====================================================
   ABOUT CARD 3D EFFECT
===================================================== */

const aboutCard =
    document.querySelector(
        ".about-card"
    );


if (aboutCard) {

    aboutCard.addEventListener(
        "mousemove",
        (event) => {

            /*
             * Telefonda bu effekt kerak emas.
             */

            if (
                window.innerWidth <= 768
            ) {
                return;
            }


            const rect =
                aboutCard.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) /
                18;


            const rotateY =
                (centerX - x) /
                18;


            aboutCard.style.transform =
                `
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.02)
                `;
        }
    );


    aboutCard.addEventListener(
        "mouseleave",
        () => {

            aboutCard.style.transform =
                "rotateX(0deg) rotateY(0deg) scale(1)";

        }
    );

}

/* =====================================================
   CONTACT SCROLL ANIMATION
===================================================== */

const contactSection =
    document.querySelector("#contact");


if (contactSection) {

    const contactObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        contactSection.classList.add(
                            "show"
                        );

                    }

                });

            },

            {
                threshold: 0.2
            }

        );


    contactObserver.observe(
        contactSection
    );
}


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.querySelector("#contactForm");


if (contactForm) {


            const name =
                document.querySelector("#name").value;

            const email =
                document.querySelector("#email").value;

            const message =
                document.querySelector("#message").value;


            const subject =
                `Portfolio contact from ${name}`;


            const body =
                `Name: ${name}\n\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}`;


            window.location.href =
                `mailto:paygambarqulovv@gmail.com` +
                `?subject=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(body)}`;

        
    

}
/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.querySelector("#backTop");

if (backTop) {

    backTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}