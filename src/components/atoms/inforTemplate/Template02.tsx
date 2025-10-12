
export interface Props {
    title: string;
    imgSrc: string;
    updateDatetime: string;
}

/**
 * 
 * @param title 上部に表示するタイトル 
 * @param text メインコンテンツ
 * @returns 
 */
export const Template02 = (props: Props) => {
    return (
        <div className="w-full h-full flex flex-col border border-gray-600 overflow-hidden">
            <div className="">{props.title}</div>
            <hr className="border-gray-500" />
            <div className="w-[350px] h-[168px] flex items-center justify-center">
                <img className="max-w-full max-h-full object-contain" src={getImage(props.imgSrc)}></img>
            </div>
        </div>
    );
}

const getImage = (fileName: string): string => {
    return new URL(`/src/configs/infomations/image/${fileName}.png`, import.meta.url).href;
};