import { useCallback, useRef } from "react";
import { type Props as Template01Props, Template01 } from "./inforTemplate/Template01";
import arrowLeft from "@/assets/arrowLeft.svg"
import arrowRight from "@/assets/arrowRight.svg"
import infomationList from "@/configs/infomations/infomationList.json"
import { type Props as Template02Props, Template02 } from "./inforTemplate/Template02";

export const Infomations = () => {

    const scrollTag = useRef<HTMLDivElement>(null);

    const scroll = useCallback((plus: boolean) => {
        if (!scrollTag.current) return;

        if (plus) {
            scrollTag.current.scrollLeft += 350 + 8 + 8;
        } else {
            scrollTag.current.scrollLeft -= 350 + 8 + 8;
        }
    }, [])

    return (
        <div className="w-full h-52 flex flex-row items-center overflow-hidden justify-between">
            <div className="w-16 h-full bg-sky-600/20 flex items-center justify-center select-none" onClick={() => scroll(false)}><img src={arrowLeft}></img></div>
            <div className="w-[1098px] h-full flex flex-row items-center snap-x overflow-x-scroll hidden-scrollbar duration-3" ref={scrollTag}>
                {
                    infomationList.map((data, index) => {
                        const props = data.props;
                        if ("01" == data.type) {
                            const props01: Template01Props = props as Template01Props;
                            return (
                                <div key={index} className="min-w-[350px] mx-2 h-48">
                                    <Template01 title={props01.title} text={props01.text} updateDatetime={props01.updateDatetime}></Template01>
                                </div>
                            )
                        } else if ("02" == data.type) {
                            const props02: Template02Props = props as Template02Props;
                            return (
                                <div key={index} className="min-w-[350px] mx-2 h-48">
                                    <Template02 title={props02.title} imgSrc={props02.imgSrc} updateDatetime={props02.updateDatetime}></Template02>
                                </div>
                            )
                        } else {
                            return (
                                <div key={index}>未定義のお知らせ：{data.props.title}</div>
                            )
                        }
                    })
                }
            </div>
            <div className="w-16 h-full bg-sky-600/20 flex items-center justify-center select-none" onClick={() => scroll(true)}><img src={arrowRight}></img></div>
        </div>
    )
}