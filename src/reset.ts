// This css-reset baseline is a copy of Josh's Custom CSS Reset
// For more details please read https://www.joshwcomeau.com/css/custom-css-reset/


export const reset = {
    "*, html, *:: before, *:: after": { boxSizing: "border-box" },
    "*": { margin: 0 },
    "html, body": { height: "100%" },
    body: {
        lineHeight: 1.5,
        "-webkit-font-smoothing": "antialiased",
    },
    "img, picture, video, canvas, svg": {
        display: "block",
        maxWidth: "100%",
    },
    "input, button, textarea, select": {
        font: "inherit",
    },
    "p, h1, h2, h3, h4, h5, h6": {
        overflowWrap: "break-word",
    },
    "#root, #__next": {
        isolation: "isolate",
    },
}