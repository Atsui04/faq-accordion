# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked.
- Navigate the questions and hide/show answers using keyboard navigation alone (Tab, Enter, Space, and Arrow keys).
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.

### Links

- Solution URL: [https://github.com/Atsui04/faq-accordion](https://github.com/Atsui04/faq-accordion) _(тут за бажанням підставиш точне посилання на репо)_
- Live Site URL: [https://atsui04.github.io/faq-accordion/](https://atsui04.github.io/faq-accordion/) _(тут посилання на GitHub Pages або Vercel, де задеплоїв)_

## My process

### Built with

- Semantic HTML5 markup
- CSS Custom Properties (Variables)
- Flexbox layout
- Desktop-first workflow
- Vanilla JavaScript
- BEM (Block Element Modifier) methodology

### What I learned

This project was an excellent opportunity to refine my JavaScript architecture and focus heavily on UI accessibility.

Here are the key takeaways from this challenge:

1. **Event Delegation:** Instead of attaching event listeners to every single button, I implemented event delegation on the parent container. This keeps the memory footprint small and the code highly scalable.

2. **Advanced DOM Traversal:** Navigating up and down the DOM tree safely using methods like `.closest()`, `.nextElementSibling`, and `.previousElementSibling`.

3. **Full Keyboard Accessibility (A11y):** Moving beyond default button behaviors by adding custom arrow key navigation to seamlessly switch focus between accordion items.

```javascript
// A snippet of the arrow key navigation logic I'm proud of:
if (e.key === "ArrowDown") {
  const nextQuestion = currentQuestion.nextElementSibling;
  if (nextQuestion) {
    const newTarget = nextQuestion.querySelector(".btn");
    newTarget.focus();
  }
}
```

### Continued development

In future projects, I want to focus on:

- Adding smooth, fluid CSS height animations (`max-height` transitions) for accordion opening/closing sequences without triggering layout shifts.
- Deeper integration of ARIA attributes (`aria-expanded`, `aria-controls`) to make the component 100% compliant with screen readers.

## Author

- GitHub - [Markiian Bushko](https://github.com/Atsui04)
- Frontend Mentor - [@Atsui04](https://www.frontendmentor.io/profile/Atsui04)
