const phoneInput = document.querySelector('.inputPhone');

phoneInput.addEventListener('input', (e) => {
  let digits = e.target.value.replace(/\D/g, ''); // Remove non-digits

  // Limit to 10 digits
  digits = digits.substring(0, 10);

  let formatted = '';

  if (digits.length > 0) {
    formatted += '+(' + digits.substring(0, 3);
  }
  if (digits.length >= 3) {
    formatted += ')-';
  }
  if (digits.length > 3) {
    formatted += digits.substring(3);
  }

  phoneInput.value = formatted;
});
