import React from "react";
import { cva, type VariantProps, cx } from "class-variance-authority";


export const inputTextVariants = cva(`
    border-b border-solid border-gray-200 focus:border-pink-base
    bg-transparent outline-none
`, {
    variants: {
        size: {
            md: 'pb-2 px-2'
        },
        disabled: {
            true: 'pointer-events-none'
        }
    },
    defaultVariants: {
        size: 'md',
        disabled: false,
    }
})

interface InputTextProps extends VariantProps<typeof inputTextVariants>,
    Omit<React.ComponentProps<'input'>, 'size'> {}


export const InputText = ({
    size,
    disabled,
    className,
    ...props
}: InputTextProps) => {
    return(
        <input
            className={inputTextVariants({
                size,
                disabled,
                className
            })}
            type="text"
            {...props}
            />
    )
}
