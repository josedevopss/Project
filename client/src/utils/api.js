import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change this to your backend URL

// User authentication
export const registerUser = async (userData) => {
    return await axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = async (credentials) => {
    return await axios.post(`${API_URL}/auth/login`, credentials);
};

// User profile
export const getUserProfile = async (userId) => {
    return await axios.get(`${API_URL}/users/${userId}`);
};

export const updateUserProfile = async (userId, profileData) => {
    return await axios.put(`${API_URL}/users/${userId}`, profileData);
};

// Chef operations
export const getChefProfile = async (chefId) => {
    return await axios.get(`${API_URL}/chefs/${chefId}`);
};

// Booking operations
export const createBooking = async (bookingData) => {
    return await axios.post(`${API_URL}/bookings`, bookingData);
};

export const getUserBookings = async (userId) => {
    return await axios.get(`${API_URL}/bookings/user/${userId}`);
};

export const updateBooking = async (bookingId, bookingData) => {
    return await axios.put(`${API_URL}/bookings/${bookingId}`, bookingData);
};

export const deleteBooking = async (bookingId) => {
    return await axios.delete(`${API_URL}/bookings/${bookingId}`);
};

// Reviews
export const getChefReviews = async (chefId) => {
    return await axios.get(`${API_URL}/chefs/${chefId}/reviews`);
};