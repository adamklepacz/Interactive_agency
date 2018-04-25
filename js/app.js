(function () {

  // DOM elements handlers
  const registerLink = document.getElementById('nav__register');
  const loginLink = document.getElementById('nav__login');
  const registerModal = document.getElementById('register__modal');
  const loginModal = document.getElementById('login__modal');
  const closeModalButtons = document.getElementsByClassName('modal__close');
  const overlay = document.getElementById('overlay');
  const registerForm = document.getElementById('register__form');
  const loginForm = document.getElementById('login__form');

  // form inputs
  const email = document.getElementById('register__email');
  const password = document.getElementById('register__password');
  const phone = document.getElementById('register__phone');
  const refCode = document.getElementById('register__ref__code');
  const picture = document.getElementById('register__picture');


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
  function formSubmit(e) {
    // e.preventDefault();

    // renderHTML(registerModal, '<h4 class="register__heading">Register</h4><p>Registration complete, check your email for activation link!</p><p>Click anywhere to close this message.</p>');

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



// below functionality works only with CORS

// function getFormData(e) {
//   e.preventDefault();
//   const emailData = email.value;
//   const passwordData = password.value;
//   const phoneData = phone.value;
//   const refData = refCode.value;
//   const pictureData = picture.value;

//   formSubmit(e, emailData, passwordData, phoneData, refData, pictureData);
// }

// /**
//  * Html5 validation is complete so we can submit the form
//  * or we can build our own validation in JavaScript if needed
//  */
// function formSubmit(e, email, password, phone, refCode, picture) {
//   let formData = new FormData();
//   formData.append("email", email);
//   formData.append("password", password);
//   formData.append("phone", phone);
//   formData.append("refferal_code", refCode);
//   formData.append("picture", picture);

//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "https://foodsi-stage.applover.pl//api/v1/auth");
//   xhr.send(formData);

//   renderHTML(registerModal, '<h4 class="register__heading">Register</h4><p>Registration complete, check your email for activation link!</p><p>Click anywhere to close this message.</p>');

//   registerForm.reset();
// }


// registerForm.addEventListener('submit', getFormData);