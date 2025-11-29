import { FetchApi } from "../fetchApi";

export interface Infomation {
  id: string;
  contentType: number;
  content: string;
  updateTime: string;
}
export interface Infomations {
  results: Infomation[];
}

export function getAll() {
  return new FetchApi().fetchApi<Infomations>("infomations/getAll");
}
