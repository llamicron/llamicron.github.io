// This document uses globals and other nasty JS shit but that's ok
// because i'm keeping it as small as reasonably possible without golfing.

// Defines the colors for the dark and light theme
lightTheme = [
    ["--background", "#d5d6db"],
    ["--text-color", "#272c42"],
    ["--accent", "#5a4a78"],
    ["--pale", "#cfc9c2"],
    ["--selection", "#a9b1d6"],
    ["--font", "Titillium Regular"]

];
darkTheme = [
    ["--background", "#1a1b26"],
    ["--text-color", "#cfc9c2"],
    ["--accent", "#bb9af7"],
    ["--pale", "#cfc9c2"],
    ["--selection", "#a9b1d6"],
    ["--font", "Titillium ExtraLight"]
];

// Get a handle on the document styles.
// Colors are set in styles.css then changed here
let style = document.documentElement.style;
let lights = document.getElementById("lights");


// When you click the button, change the theme
lights.addEventListener("click", () => {
    // If its currently the light theme
    if (style.getPropertyValue("--background") == lightTheme[0][1]) {
        // Change to the dark one
        switchThemes(darkTheme);
        // update the text
        lights.textContent = "lights off";
    } else {
        // Same here
        switchThemes(lightTheme);
        lights.textContent = "lights on";
    }
})

function switchThemes(theme) {
    theme.forEach(pair => {
        style.setProperty(pair[0], pair[1]);
    });
}
