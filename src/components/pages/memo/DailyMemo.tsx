"use client";
import { Header } from "@/components/atoms/Header";
import { addMemoList, getMemoList, type Memo } from "@/utils/MemoList";
import { useCallback, useEffect, useState } from "react";

export const DailyMemo = () => {
  const [memoList, setMemoList] = useState<Memo[]>([]);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    getMemoList().then((value) => {
      setMemoList(value ?? []);
    });
  }, []);

  const addClick = useCallback(() => {
    addMemoList(text);

    // もう一度取得
    getMemoList().then((value) => {
      setMemoList(value ?? []);
    });
  }, [text]);

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
