'use server';

import { NextApiClient } from "@/utils/axiosConfig";
import process from 'process';

const login = async (formData: FormData) => {
  const axiosClient = NextApiClient;

  try {
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
    const response = await axiosClient.post('/login', data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default login;
