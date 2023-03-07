import {sendData} from './api';
import {modals} from '../modals/init-modals';

const baseSuccessCallback = (event) => {
  event.preventDefault();

  let modalName;
  if (event.target.closest('[data-modal]')) {
    modalName = event.target.closest('[data-modal]').getAttribute('data-modal');
  }

  sendData(
      () => {
        if (modalName) {
          modals.close(modalName);
        }
        // другие действия при успешной отправке формы
      },
      () => {
        if (modalName) {
          modals.close(modalName);
        }
        // другие действия при ошибке отправки формы
      },
      new FormData(event.target)
  );

  // В данном колбеке бэкендер, либо разработчик при необходимости будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки или успешную отправку формы на сервер
};

const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
