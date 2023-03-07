let messageElement;
const ALERT_SHOW_TIME = 5000;

function showMessage(type) {
  messageElement = document.querySelector(`#${type}`)
      .content
      .querySelector('div')
      .cloneNode(true);

  document.body.append(messageElement);
  messageElement.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onMessageEscKeydown);

  setTimeout(() => {
    messageElement.remove();
  }, ALERT_SHOW_TIME);
}

function closeMessage() {
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
}

function onMessageEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeMessage();
  }
}

export {showMessage};
