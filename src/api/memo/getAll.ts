import { FetchApi } from "../fetchApi";

export interface Memo {
  id: number;
  userId: number;
  content: string;
  status: string;
  updateTime: string;
}
export interface Meomos {
  results: Memo[];
}

export function getAll() {
  return new FetchApi().fetchApi<Meomos>("memo/getAll");
}
