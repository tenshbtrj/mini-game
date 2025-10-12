import { tv } from "tailwind-variants";

const pageList = [
    { name: "Home", url: "/" },
    { name: "Clicker", url: "/Clicker" },
    { name: "Memo", url: "/Memo" }
]

export interface Props {
    open: boolean;
}

export const PageMenu = ({ open }: Props) => {

    // 現在のページを取得
    const currentPage = window.location.pathname;

    const menuStyle = tv({
        base: "w-40 h-fit text-black origin-top bg-white select-none overflow-hidden transition",
        variants: {
            open: {
                true: "border border-gray-400",
                false: "scale-y-0"
            }
        }
    })
    return (
        <div className={menuStyle({ open: open })}>
            {pageList.map((page, index) => {
                // 現在のページはグレーアウト
                if (currentPage == page.url) {
                    return <div key={index} className="pr-20 bg-gray-400">{page.name}</div>
                }
                return <div key={index} className="pr-5 hover:bg-blue-200" onClick={() => openPage(page.url)}>{page.name}</div>
            })}
        </div>
    )
}

// ページを開く
const openPage = (url: string) => {
    window.location.href = url;
}