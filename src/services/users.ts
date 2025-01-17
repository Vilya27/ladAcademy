import { api } from "@/api/api";

type User = {
  id: number;
  name: string;
};

export const getUsers = async () => {
  const { data } = await api.get<Array<User>>("/users");
  return data;
};
