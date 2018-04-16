(function() {
  let register = document.getElementById('nav__register');
  let login = document.getElementById('nav__login');
  let registerModal = document.getElementById('register__modal');
  let loginModal = document.getElementById('login__modal');
  let closeModalButtons = document.getElementsByClassName('modal__close');
  let overlay = document.getElementById('overlay');
  let registerForm = document.getElementById('register__form');
  
  function triggerModal(e) {
    let clickedElement = e.target.attributes.id.value;

    if(overlay.classList.contains('overlay--open')) {
      overlay.classList.remove('overlay--open');
    } else {
      overlay.classList.add('overlay--open');
    }
    
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
    renderHTML(registerModal, '<h4 class="register__heading">Register</h4><p>Registration complete, check your email for activation link</p>');
  }

  /** 
   * Render function usage: 
   * render([element]: HtmlElement, [html]: '<h1>Some text</h1><p>Lorem ipsum</p>')
   */
  function renderHTML(element, html) {
    element.innerHTML = html;
  }


  register.addEventListener('click', triggerModal);
  login.addEventListener('click', triggerModal);
  registerForm.addEventListener('submit', formSubmit);
 

  // add event listener to HTMLCollection
  for(let i = 0; i < closeModalButtons.length; i++) {
    closeModalButtons[i].addEventListener('click', triggerModal);
  }


}());