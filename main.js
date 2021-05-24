
function switchThemes() {
    darkTheme = [
        ["--background", "#d5d6db"],
        ["--text-color", "#343b58"],
        ["--accent", "#5a4a78"]
    ];

    lightTheme = [
        ["--background", "#1a1b26"],
        ["--text-color", "#cfc9c2"],
        ["--accent", "#bb9af7"]
    ];

    let style = document.documentElement.style;

    // If it's the light theme
    if (style.getPropertyValue("--background") == lightTheme[0][1]) {
        // Switch to the dark
        darkTheme.forEach(pair => {
            style.setProperty(pair[0], pair[1]);
        });
    } else {
        lightTheme.forEach(pair => {
            style.setProperty(pair[0], pair[1]);
        });
    }
}
