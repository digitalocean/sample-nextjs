import * as React from 'react'

export type ButtonProps = {
    children: React.ReactNode
    link?: string
}

export const Button: React.FC = React.memo(
    ({ children, link }: ButtonProps): JSX.Element => (
        <a href={link} className="button">
            {children}
        </a>
    )
)
