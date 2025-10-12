
export interface Props {
    title: string;
    text: string;
    updateDatetime: string;
}

/**
 * 
 * @param title 上部に表示するタイトル 
 * @param text メインコンテンツ
 * @returns 
 */
export const Template01 = (props: Props) => {
    return (
        <div className="w-full h-full border border-gray-600">
            <div>{props.title}</div>
            <hr className="border-gray-500" />
            <div>
                {
                    props.text.split("\n").map((line, index) => {
                        return <div key={index} className="h-6">{line}</div>;
                    })
                }
            </div>
        </div>
    );
}