import { createGlobalStyle } from "styled-components";
import normalize from "normalize.css";
import "./fonts.css";

export const AppStyles = createGlobalStyle`
${normalize};

body {
    background-color: ${(props) => props.theme.palette.background};
    font: 16px/1.5 "Roboto Mono", monospace;
}

#root {
    display:flex;
    flex-direction: column;
}

h1 {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 2rem;
    margin: 0.75rem;
    cursor: default;
}

h2 {
    font-weight: 400;
    font-size: 2rem;
    margin: 0.75rem;
    cursor: default;
}

a {
    font-weight: 300;
    font-size: 1.5rem;
    margin: 0.75rem;
    cursor: default;
}

p {
    font-weight: 200;
    font-size: 2rem;
    margin: 0.75rem;
    cursor: default;
}
`;
