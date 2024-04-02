import { NextApiClient } from "@/utils/axiosConfig";

export const getNotes = async () => {
  try {
    const response = await NextApiClient.get('/notes');

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
