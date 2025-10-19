export interface Memo {
  id: string;
  content: string;
  updateTime: string;
}

/**
 * メモを取得する
 */
export const getMemoList = async (): Promise<Memo[]> => {
  return fetch(new URL("/api/memo", import.meta.env.VITE_API_PATH), {
    method: 'GET',
    mode: 'cors',
    headers: {
      "content-type": "application/json",
    },
  })
    .then((value: Response) => {
      // レスポンスからJSONデータを取得するために .json() を呼び出す

      if(!value.ok){
        throw new Error(`レスポンスが異常です。url[/api/memo],status[${value.ok}]`)
      }
      return value.json();
    })
    .then((json) => {
      
      if(!json){
        throw new Error(`レスポンスがありません。url[/api/memo]`)
      }
      // JSONデータを受け取った後の処理
      return json;
    })
    .catch((e) => {
      // エラーをキャッチし表示
      console.error(e);
    });
};

/**
 * メモを追加する
 */
export const addMemoList = async (content: string): Promise<Memo[]> => {
  return fetch(new URL("/api/memo/add", import.meta.env.VITE_API_PATH), {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ content }), // contentをJSONとして送信
  })
    .then((value: Response) => {
      // レスポンスからJSONデータを取得するために .json() を呼び出す
      return value.json();
    })
    .then((json) => {
      // JSONデータを受け取った後の処理
      return json;
    })
    .catch((e) => {
      // エラーをキャッチし表示
      console.error(e);
    });
};
