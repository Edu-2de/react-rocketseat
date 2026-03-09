import React from "react";
import { type VariantProps } from "class-variance-authority";
import { textVariants } from "./text.variants";
 
interface TextProps extends VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
}

const Text = ({ as = 'span', variant, className = '', children, ...props }: TextProps) => {
    return React.createElement(
        as,
        {
            className: textVariants({ variant, className }),
            ...props
        },
        children
    );
};

export default Text; // O Rei reina sozinho aqui!
