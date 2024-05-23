import { cva, VariantProps } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'
import { cn } from './cn'
const typographyVariants = cva('w-fit', {
  variants: {
    variant: {
      title: 'lg:text-[68px] md:text-[60px] sm:text-[38px] msm:text-[34px] font-brsonoma_bold  text-transparent leading-snug  bg-gradient-to-br from-emerald-1000 to-emerald-900  bg-clip-text ',
      paragraph: 'lg:text-[14px] msm:text-[10px] text-paragraph',
    },
  },
  defaultVariants: {
    variant: 'title',
  },
})

interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof typographyVariants> { }

const Typography: FC<TypographyProps> = ({ className, variant, children, ...props }) => {
  return (
    <p className={cn(typographyVariants({ variant, className }))} {...props}>
      {children}
    </p>
  )
}
export { Typography, typographyVariants }

