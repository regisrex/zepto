import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'
import { cn } from './cn'
import LoadingAnimation from './loadingAnimation'

const buttonVariants = cva(
    'h-[50px] rounded-lg  px-10  text-[14px] duration-200',
    {
        variants: {
            variant: {
                primary: 'bg-brand text-white fill-white stroke-white hover:bg-emerald-950',
                bordered: 'bg-transparent border border-brand/20  text-brand fill-white stroke-white hover:bg-brand/5',
                secondary: 'text-brand fill-white stroke-white bg-brand/5 hover:bg-brand/10 focus:bg-brand/10',
                link: 'text-brand fill-white stroke-white hover:bg-brand/5 focus:bg-brand/5',
            }
        },
        defaultVariants: {
            variant: 'primary',
        },
    },
)

interface ButtonProps
    extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    loading?: boolean
    disabled?: boolean
}

const Button: FC<ButtonProps> = ({
    variant,
    className,
    children,
    loading,
    disabled,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(buttonVariants({ variant, className }))}
            {...props}
            disabled={loading || disabled}
        >
            {loading ? <LoadingAnimation /> : children}
        </button>
    )
}

export { Button }
