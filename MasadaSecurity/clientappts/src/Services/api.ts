import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:44382/api/',
  timeout: 100000,
});

interface EmailType {
  name: string;
  email: string;
  message: string;
}

const responseBody = (response: AxiosResponse): any => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

const Email = {
  sendEmail: (email: EmailType): Promise<EmailType> =>
    requests.post('email', email),
};

export default Email;
