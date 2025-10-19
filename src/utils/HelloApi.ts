/**
 * APIの確認
 */
export const hello = () => {
  fetch(new URL("hello", import.meta.env.VITE_API_PATH), {
    headers: {},
  }).then((value: Response) => {
    console.log("hello(Response)=%o", value);
  });
};
