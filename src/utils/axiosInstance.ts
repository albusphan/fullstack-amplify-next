import axios, { HeadersDefaults } from "axios";

interface AxiosExtendedHeader extends HeadersDefaults {
  Authorization?: string;
}

export const axiosInstance = axios.create({
  baseURL: "https://mp.sandbox.predictablexp.com",
});

export const initAxios = async (token: string) => {
  axiosInstance.defaults.headers = {
    ...axiosInstance.defaults.headers,
    Authorization: `${token}`,
  } as AxiosExtendedHeader;
};
