const BASE_URL = process.env.REACT_API_URL || "http://localhost:8000";

// AUTH

const BASE_AUTH_URL = `${BASE_URL}/auth`;

export const LOGIN_URL = `${BASE_AUTH_URL}/login`;

export const SIGNUP_URL = `${BASE_AUTH_URL}/register`;

export const GET_AUTH_DATA = `${BASE_AUTH_URL}`;

// EMPLOYEE

const BASE_EMPLOYEE_URL = `${BASE_URL}/employee`;

export const SET_ADMIN_URL = `${BASE_EMPLOYEE_URL}/set-admin`;

export const GET_EMPLOYEES_URL = `${BASE_EMPLOYEE_URL}`;

export const GET_EMPLOYEE_REVIEWS_URL = `${BASE_EMPLOYEE_URL}/:ID/reviews`;

export const UPDATE_EMPLOYEE_URL = `${BASE_EMPLOYEE_URL}/:ID/update`;

export const DELETE_EMPLOYEE_URL = `${BASE_EMPLOYEE_URL}/:ID/delete`;

// REVIEW

const BASE_REVIEW_URL = `${BASE_URL}/review`;

export const PENDING_REVIEWS_URL = `${BASE_REVIEW_URL}/`;

export const CREATE_REVIEW_URL = `${BASE_REVIEW_URL}/create`;

export const UPDATE_REVIEW_URL = `${BASE_REVIEW_URL}/:ID/update`;

export const DELETE_REVIEW_URL = `${BASE_REVIEW_URL}/:ID/delete`;

export const ADD_REVIEW_URL = `${BASE_REVIEW_URL}/:ID/add_review`;
