/****************
 * Modals example
 ****************/
/*
 import {showModal, watchScrollY} from "./modal";

 watchScrollY();

 [...document.querySelectorAll('.modal-link')].map(link => {
 link.addEventListener('click', (e) => {
 e.preventDefault();
 showModal(e.target); // or showModal('#modal') or showModal('.modal') or showModal(document.querySelector('#modal'))
 })
 });*/
/****************
 * Phone mask example
 ****************/

/*
 window.addEventListener('load', () => {
 const maskedPhonesInput = document.querySelectorAll('input[type="tel"], .phone-mask');
 if (maskedPhonesInput) {
 const maskOptions = {
 mask: '+{7} (000) 000-00-00',
 };
 [...maskedPhonesInput].map((el) => {
 const maskedInput = IMask(el, maskOptions);
 el.addEventListener('keydown', () => {
 if (maskedInput.unmaskedValue === '78') {
 maskedInput.value = '+7 (';
 }
 });
 // simple validation
 el.addEventListener('keyup', () => {
 if (maskedInput.unmaskedValue.length === 11) {
 maskedInput.el.input.classList.add('input_valid');
 maskedInput.el.input.classList.remove('input_invalid');
 }
 else {
 maskedInput.el.input.classList.add('input_invalid');
 maskedInput.el.input.classList.remove('input_valid');
 }
 });
 });
 }
 });
 */
