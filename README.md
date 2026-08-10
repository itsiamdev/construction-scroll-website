# BIM Construct Website

A scroll-driven construction company website for BIM Construct, a civil construction and renovation company serving Bucharest and Ilfov.

## Overview

The website presents BIM Construct's services, selected projects, client testimonials and contact details through a visual, monochrome interface. The construction video is controlled by the visitor's scroll position, turning the build process into the main interaction on the page.

## Live Demo

View the live website at [itsiamdev.github.io/construction-scroll-website](https://itsiamdev.github.io/construction-scroll-website/).

## Features

- Scroll-controlled construction video playback
- Responsive layout for desktop and mobile screens
- Monochrome white, grey and black visual system
- Services and recent projects sections
- Infinite horizontal client testimonials marquee
- Hover and keyboard-focus pause for testimonials
- Reveal animations for content sections
- Internal navigation and direct quote request link
- No framework or build step required

## Project Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── construction video.mp4
├── LICENSE
└── README.md
```

## Run Locally

This is a static website. You can open `index.html` directly in a browser, or serve the folder with a local web server for the best video-loading behaviour.

For example, with Python installed:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser.

## Customisation

- Update company copy, contact details and project names in `index.html`.
- Adjust the visual system and responsive breakpoints in `styles.css`.
- Modify scroll-to-video behaviour in `script.js`.
- Replace `construction video.mp4` with another local MP4 asset if needed.

## Browser Support

The site uses standard HTML, CSS and JavaScript APIs, including `IntersectionObserver`, `requestAnimationFrame` and HTML5 video. Current versions of Chrome, Edge, Firefox and Safari are recommended.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
