const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const $$questionBtns = $$('.question-btn');
let currentButton = undefined;

$$questionBtns.forEach((button) => {
  button.addEventListener('click', () => {

    // remove old styles
    if (currentButton) {

      // from question
      currentButton.classList.toggle('question_current');

      // from arrow
      for (const child of currentButton.children)
        for (const attribute of child.classList)
          if (attribute === 'arrow_current')
            child.classList.toggle('arrow_current');

      // from answer      
      const parent = currentButton.parentElement;
      for (const child of parent.children) 
        for (const attribute of child.classList)
          if (attribute === 'answer_current') 
            child.classList.toggle('answer_current');
    }

    // close accordion 
    if (button === currentButton) {
      currentButton = undefined;
      return;
    }

    // new question chosen 
    currentButton = button;

    //toggle question styles
    button.classList.toggle('question_current');

    //toggle arrow styles
    for (const child of button.children)
      child.classList.toggle('arrow_current');

    // toggle answer styles
    const parent = button.parentElement;
    for (const child of parent.children)
      for (const attribute of child.classList)
        if (attribute === 'answer')
          child.classList.toggle('answer_current');
  });
});