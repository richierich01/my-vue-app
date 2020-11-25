import { Ref, ref } from 'vue';
import useApi from './api';

export interface Location {
  lat: number;
  lng: number;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: Location;
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
}

export default async function useUsers() {
  const { response: users, request } = useApi<User[]>('https://jsonplaceholder.typicode.com/users');
  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }

  return { users };
}
