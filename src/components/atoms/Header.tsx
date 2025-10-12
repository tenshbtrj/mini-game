import { Hamburger } from "@/components/atoms/icons/Hamburger";
import { MainIcon } from "@/components/atoms/icons/MainIcon";
import { PageMenu } from "../pages/home/PageMenu";
import { useState } from "react";
import { tv } from "tailwind-variants";

export interface Props {
    title: string
}

export const Header = ({ title }: Props) => {
    const [pageMenuFlag, setPageMenuFlag] = useState<boolean>(false);

    // ハンバーガーメニューのクリックイベント
    const hamburgerClick = (checked: boolean) => {
        setPageMenuFlag(!checked);
    }
    // ハンバーガー閉じる範囲
    const closeAreaStyle = tv({
        base: "h-screen z-10 top-0 absolute",
        variants: {
            open: {
                true: "w-full",
                false: ""
            }
        }
    });

    return (
        <>
            <div className="w-full h-12 text-white bg-blue-400 flex justify-between items-center relative">
                <div className={closeAreaStyle({ open: pageMenuFlag })} onClick={() => setPageMenuFlag(false)}></div>
                <div className="flex justify-start">
                    <div className="w-10 h-10" onClick={openRoot}><MainIcon></MainIcon></div>
                    <div className="text-3xl">{title}</div>
                </div>
                <div className="w-10 h-10 z-20 mr-2 flex justify-end overflow-visible">
                    <Hamburger open={!pageMenuFlag} onClick={hamburgerClick} />
                </div>
                <div className="w-fit h-fit z-20 origin-top-right -translate-x-full top-full left-full  absolute">
                    <PageMenu open={pageMenuFlag}></PageMenu>
                </div>
            </div>
        </>
    )
}

// ルートを開く
const openRoot = () => {
    window.location.href = '/'; // 通常の遷移
}