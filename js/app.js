(function () {

  const registerLink = document.getElementById('nav__register');
  const loginLink = document.getElementById('nav__login');
  const registerModal = document.getElementById('register__modal');
  const loginModal = document.getElementById('login__modal');
  const closeModalButtons = document.getElementsByClassName('modal__close');
  const overlay = document.getElementById('overlay');
  const registerForm = document.getElementById('register__form');
  const loginForm = document.getElementById('login__form');

  function triggerModal(e) {
    const clickedElement = e.target.attributes.id.value;

    // show/hide overlay
    if (overlay.classList.contains('overlay--open')) {
      overlay.classList.remove('overlay--open');
    } else {
      overlay.classList.add('overlay--open');
    }

    // open/close the desired modal window
    switch (clickedElement) {
      case 'nav__login':
        loginModal.classList.add('modal--open');
        break;
      case 'nav__register':
        registerModal.classList.add('modal--open');
        break;

      case 'login__close':
        loginModal.classList.remove('modal--open');
        break;

      case 'register__close':
        registerModal.classList.remove('modal--open');
        break;

      default:
        break;
    }
  }

  /**
   * Html5 validation is complete so we can submit the form
   * or we can build our own validation in JavaScript if needed
   */
  function formSubmit() {
    renderHTML(registerModal, '<h4 class="register__heading">Register</h4><p>Registration complete, check your email for activation link!</p><p>Click anywhere to close this message.</p>');

    registerForm.reset();
  }

  /** 
   * Render function usage: 
   * render([element]: HtmlElement, [html]: '<h1>Some text</h1><p>Lorem ipsum</p>')
   */
  function renderHTML(element, html) {
    element.innerHTML = html;
  }

  // Hide registration confirmation
  function hideConfirmation(e) {
    const clickedElement = e.target.attributes.id.value;

    // hide after overlay was clicked
    if (clickedElement === "overlay") {
      overlay.classList.remove('overlay--open');
      registerModal.classList.remove('modal--open');
      loginModal.classList.remove('modal--open');
    }
    
  }


  // event listeners
  registerLink.addEventListener('click', triggerModal);
  loginLink.addEventListener('click', triggerModal);
  registerForm.addEventListener('submit', formSubmit);
  registerForm.addEventListener('submit', hideConfirmation);
  loginForm.addEventListener('submit', hideConfirmation);
  overlay.addEventListener('click', hideConfirmation);

  // add event listener to HTMLCollection
  for (let i = 0; i < closeModalButtons.length; i++) {
    closeModalButtons[i].addEventListener('click', triggerModal);
  }


}());