import { ref, Ref } from 'vue';

export default function useApi<T>(url: RequestInfo, options?: RequestInit | undefined) {
  const response = ref();
  const request = async () => {
    const res = await fetch(url, options);
    const data = await res.json();
    response.value = data;
  };
  return { response, request };
}
