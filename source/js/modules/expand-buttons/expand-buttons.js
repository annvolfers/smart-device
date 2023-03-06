export class ExpandButtons {
  constructor() {
    this.init();
  }

  init() {
    const closedElements = document.querySelectorAll('[data-expand="element"]');

    closedElements.forEach((closedElement) => {
      this.setAttr(closedElement);
      this.setClasses(closedElement);
      this.setListeners(closedElement);
    });
  }

  setAttr(element) {
    const hiddenTextsForAllVp = element.querySelectorAll('[data-visibility="is-hidden"]');
    const hiddenTextsForMobile = element.querySelectorAll('[data-visibility="is-hidden-for-mobile"]');

    if (hiddenTextsForAllVp.length) {
      element.setAttribute('data-setting', 'expand');
    } else if (hiddenTextsForMobile.length) {
      element.setAttribute('data-setting', 'expand-for-mobile-only');
    } else {
      element.setAttribute('data-setting', 'not-expand');
    }
  }

  setClasses(element) {
    const hiddenTexts = element.querySelectorAll('[data-visibility="is-hidden"], [data-visibility="is-hidden-for-mobile"]');
    const buttonTextShown = element.querySelector('[data-expand="text-shown"]');

    const blockClass = element.classList[0];
    element.classList.remove(`${blockClass}--nojs`);

    buttonTextShown.classList.add('is-hidden');

    hiddenTexts.forEach((hiddenText) => {
      hiddenText.classList.add('is-hidden');
    });
  }

  setListeners(element) {
    const hiddenTexts = element.querySelectorAll('[data-visibility="is-hidden"], [data-visibility="is-hidden-for-mobile"]');
    const expandButton = element.querySelector('[data-expand="button"]');
    const buttonTextHidden = element.querySelector('[data-expand="text-hidden"]');
    const buttonTextShown = element.querySelector('[data-expand="text-shown"]');

    expandButton.addEventListener('click', (evt) => {
      if (!evt.target.closest('[data-expand="element"]')) {
        return;
      }

      hiddenTexts.forEach((hiddenText) => {
        hiddenText.classList.toggle('is-hidden');
      });

      buttonTextHidden.classList.toggle('is-hidden');
      buttonTextShown.classList.toggle('is-hidden');
    });
  }
}
