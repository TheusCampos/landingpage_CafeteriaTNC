// Validações genéricas
export function validateEmail(email) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i.test(email);
}

export function validatePhone(phone) {
  return /\d{10,13}/.test(phone.replace(/\D/g, ''));
}