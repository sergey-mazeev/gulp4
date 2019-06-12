const body = document.body;

const lockBodyScroll = () => {
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
};

const unlockBodyScroll = () => {
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
};

export const showModal = (target) => {
  // target - dom элемент или css селектор модального окна, в ином случае
  // селектор возьмется из this (data-modal или href)
  let targetElem;
  if (typeof target === 'string') {
    targetElem = document.querySelector(target);
  }
  else if ((target instanceof Element) && target.getAttribute('data-modal')) {
    targetElem = document.querySelector(target.getAttribute('data-modal'));
  }
  else if ((target instanceof Element) && target.getAttribute('href')) {
    targetElem = document.querySelector(target.getAttribute('href'));
  }
  else if (target instanceof Element) {
    targetElem = target;
  }
  else if (this && this.getAttribute('data-modal')) {
    targetElem = document.querySelector(this.getAttribute('data-modal'));
  }
  else if (this && this.getAttribute('href')) {
    targetElem = document.querySelector(this.getAttribute('href'));
  }
  else {
    return false;
  }

  targetElem.classList.add('modal_shown');
  lockBodyScroll();

  targetElem.addEventListener('click', (e) => {
    if (e.target === targetElem) {
      return closeModals();
    }
  });
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      return closeModals();
    }
  });
  const closeBtns = document.querySelectorAll('.modal__close');
  [...closeBtns].map((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      return closeModals();
    })
  })
};

export const closeModals = () => {
  const activeModal = document.querySelector('.modal_shown');
  if (activeModal) {
    activeModal.classList.remove('modal_shown');
    unlockBodyScroll();
    return true;
  }
  return false;
};

export const watchScrollY = () => {
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  })
};