"use client";
import { getAll, type Memo } from "@/api/memo/getAll";
import { Header } from "@/components/atoms/Header";
import { useCallback, useEffect, useState } from "react";

export const DailyMemo = () => {
  const [memoList, setMemoList] = useState<Memo[]>([]);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    getAll().then((json) => {
      setMemoList(json.results);
    });
  }, []);

  const addClick = useCallback(() => {
    // addMemoList(text);

    // もう一度取得
    getAll().then((json) => {
      setMemoList(json.results);
    });
  }, []);

  return (
    <>
      <Header title="Memo"></Header>
      <div>Memo</div>
      {memoList.map((memo, index) => {
        return (
          <div key={index}>
            <div>{memo.content}</div>
            <hr />
          </div>
        );
      })}
      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button onClick={addClick}>追加</button>
      </div>
    </>
  );
};
