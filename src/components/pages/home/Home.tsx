import { Header } from "@/components/atoms/Header"
import { Infomations } from "@/components/atoms/Infomations";

export const Home = () => {
    return (
        <>
            <Header title="Home"></Header>
            <div className="grid grid-cols-3">
                <div className="col-span-3">
                    <Infomations></Infomations>
                </div>
                <div>お気に入り(未実装)</div>
                <div>問い合わせ(未実装)</div>
                <div>サイトマップ(未実装)</div>
                <div>Q&A(未実装)</div>
                <button onClick={openClicker}>Clicker</button>
            </div>
        </>
    )
}

const openClicker = () => {
    window.location.href = '/clicker'; // 通常の遷移
}