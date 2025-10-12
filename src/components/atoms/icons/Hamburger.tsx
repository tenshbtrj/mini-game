import { tv } from "tailwind-variants"

export interface Props {
    open: boolean;
    onClick: (checked: boolean) => void;
}

export const Hamburger = ({ open, onClick }: Props) => {

    const bodyStyle = tv({
        base: "w-full h-full relative flex flex-col justify-around transition after:absolute after:w-full after:h-full overflow-hidden",
        variants: {
            active: {
                true: "rotate-0 ",
                false: "rotate-90 scale-75 after:border-2 after:border-red-300 after:rounded-full",
            }
        }
    })

    const spanTopStyle = tv({
        base: "h-1 rounded bg-blue-100 origin-left transition",
        variants: {
            active: {
                true: "w-full translate-y-[0%] bg-blue-100 rotate-0",
                false: "w-[65%]  translate-x-[40%] translate-y-[+100%] bg-red-300 rotate-45",
            }
        }
    })
    const spanMidStyle = tv({
        base: "w-full h-1 rounded bg-blue-100 transition",
        variants: {
            active: {
                true: "translate-x-[0%] opacity-100",
                false: "translate-x-[+100%] opacity-0",
            }
        }
    })
    const spanBottomStyle = tv({
        base: "h-1 rounded bg-blue-100 origin-left transition",
        variants: {
            active: {
                true: "w-full translate-y-[0%] bg-blue-100 rotate-0",
                false: "w-[65%] translate-x-[40%] translate-y-[-100%] bg-red-300 -rotate-45",
            }
        }
    })

    const onClickOrigin = () => {
        onClick(!open);
    }

    return (
        <>
            <label htmlFor="toggle" className={bodyStyle({ active: open })} onClick={onClickOrigin}>
                <div className={spanTopStyle({ active: open })}></div>
                <div className={spanMidStyle({ active: open })}></div>
                <div className={spanBottomStyle({ active: open })}></div>
            </label>
        </>
    )
}