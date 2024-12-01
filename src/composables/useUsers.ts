import { ref } from "vue";
import axios, { AxiosError } from "axios";
import type { User } from "./../type";

const searchUserCity = ref("");
const searchUserName = ref("");

const usersList = ref<User[] | null>(null);
const error = ref<null | unknown>(null);

export const useUsers = () => {
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      usersList.value = response.data;
    } catch (err) {
      const axiosError = err as AxiosError;
      error.value = axiosError.request?.data?.statusText || "Opps, error";
    }
  };

  return {
    searchUserCity,
    searchUserName,
    usersList,
    fetchUsers,
  };
};
