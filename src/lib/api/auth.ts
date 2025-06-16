import axios from 'axios';

export async function login(email: string, password: string) {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, { email, password });
  return res.data;
}

export async function signup(email: string, password: string, name: string) {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`, { email, password, name });
  return res.data;
}