import React from "react"
import Text from "./text"
import { cva, cx, type VariantProps } from "class-variance-authority"
import { Skeleton } from "./skeleton";

export const badgeVariants = cva(
    'inline-flex items-center justify-center rounded-full',
    {
        variants: {
            variant: {
                primary: 'bg-green-light',
                secondary: 'bg-pink-light'
            },
            size: {
                sm: 'py-0.5 px-2'
            }
        },
        defaultVariants: {
            variant: 'primary',
            size: 'sm'
        }
    }
);

export const badgeTextVariants = cva('', {
    variants: {
        variant: {
            primary: 'text-green-dark',
            secondary: 'text-pink-dark'
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
})

export const badgeSkeletonVariants = cva('', {
    variants: {
        size: {
            sm: 'w-5 h-5'
        }
    },
    defaultVariants: {
        size: 'sm'
    }
})

interface BadgeProps extends React.ComponentProps<'div'>,
    VariantProps<typeof badgeVariants> {
        loading?: boolean
    }

export const Badge = ({
    variant,
    size,
    className,
    children,
    loading,
    ...props
}: BadgeProps) => {

    if(loading){
        return(
            <Skeleton
                rounded={'full'}
                className={cx(
                    badgeVariants({variant}),
                    badgeSkeletonVariants({size})
                )}
            />
        )
    }

    return(
        <div className={badgeVariants({variant, size, className})} {...props}>
            <Text
                variant='body-sm-bold'
                className={badgeTextVariants({variant})}
            >
                {children}
            </Text>
        </div>
    )
}
