const API_URL = 'https://reqres.in/api';

export const login = async (credentials: { email: string; password: string }) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

export const getUsers = async (page: number) => {
  const response = await fetch(`${API_URL}/users?page=${page}`);
  return response.json();
};

export const updateUser = async (id: number, userData: Partial<User>) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const deleteUser = async (id: number) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: 'DELETE',
  });
  return response.ok;
};