'use server';

import { NextApiClient } from "@/utils/axiosConfig";
import process from 'process';

const login = async (formData: FormData) => {
  const axiosClient = NextApiClient;
  axiosClient.defaults.baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

  try {
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
    const response = await axiosClient.post('api/login', data);
    console.log('response -->', response)

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default login;
