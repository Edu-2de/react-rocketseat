import React from "react";
import type { Icon } from "./icon";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(`
    flex items-center justify-center cursor-pointer
    transition rounded-lg gropup gap-2
`, {
    variants: {
        variant: {
            primary: 'bg-gray-200 hover:bg-pink-light'
        },
        size: {
            md: 'h-14 py-4 px-5'
        },
        disabled: {
            true: 'opacity-50 pointer-events-none'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
        disabled: false
    }
});


export const buttonIconVariants = cva('transition', {
    variants: {
        variant: {
            primary: 'fill-pink-base'
        },
        size: {
            md: 'w-5 h-5'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }
})

interface ButtonProps
    extends Omit< React.ComponentProps<'button'>, 'size' | 'disabled'>,
        VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps<typeof Icon>['svg']
}

export const Button = ({
    variant,
    size,
    disabled,
    className,
    icon: IconComponent,
    children,
    ...props
}: ButtonProps) => {
    return(
        <button className={buttonVariants({variant, size, disabled, className})} {...props}>{children}</button>
    )
}
