// Authentication utility for Trade Nexus Admin Portal
const ADMIN_EMAIL = 'ceo@tradenexustradesmart.com';
const ADMIN_PASSWORD = 'Admin@tradesmart';
const AUTH_KEY = 'trade_nexus_admin_authenticated';

export function isAuthenticated() {
  return localStorage.getItem(AUTH_KEY) === 'true';
}

export function login(email, password) {
  if (
    email &&
    password &&
    email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
    password.trim() === ADMIN_PASSWORD
  ) {
    localStorage.setItem(AUTH_KEY, 'true');
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}
