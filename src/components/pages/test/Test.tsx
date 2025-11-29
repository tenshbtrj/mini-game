import {
  getAll as getAllInfomation,
  type Infomation,
} from "@/api/infomations/getAll";
import { getAll as getAllMemo, type Memo } from "@/api/memo/getAll";
import { Header } from "@/components/atoms/Header";
import { useEffect, useState } from "react";

export const Test = () => {
  const [infomations, setInfomasions] = useState<Infomation[]>([]);
  const [memos, setMeomos] = useState<Memo[]>([]);
  useEffect(() => {
    getAllInfomation().then((json) => {
      setInfomasions(json.results);
    });

    getAllMemo().then((json) => {
      setMeomos(json.results);
    });
  }, []);
  return (
    <>
      <Header title="APITest"></Header>
      <div>
        Test
        <div>Infomation</div>
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr className="*:border *:border-gray-400">
              <th>id</th>
              <th>contentType</th>
              <th>content</th>
              <th>updateTime</th>
            </tr>
          </thead>
          <tbody>
            {infomations.map((info, index) => {
              return (
                <tr key={index} className="*:border *:border-gray-400">
                  <td>{info.id}</td>
                  <td>{info.contentType}</td>
                  {1 === info.contentType ? (
                    <td>
                      <div className="whitespace-normal">{info.content}</div>
                    </td>
                  ) : 2 === info.contentType ? (
                    <td>
                      <img
                        className="h-28 aspect-auto object-contain"
                        src={getImage(info.content)}
                      ></img>
                    </td>
                  ) : (
                    <></>
                  )}
                  <td>{info.updateTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>User</div>
        <div>Memo</div>
        <div>{JSON.stringify(memos)}</div>
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr className="*:border *:border-gray-400">
              <th>id</th>
              <th>userId</th>
              <th>content</th>
              <th>updateTime</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {memos.map((memo, index) => {
              return (
                <tr key={index} className="*:border *:border-gray-400">
                  <td>{memo.id}</td>
                  <td>{memo.userId}</td>
                  <td className="whitespace-pre-wrap">{memo.content}</td>
                  <td>{memo.updateTime}</td>
                  <td>{memo.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

const getImage = (fileName: string): string => {
  return new URL(
    `/src/configs/infomations/image/${fileName}.png`,
    import.meta.url
  ).href;
};
