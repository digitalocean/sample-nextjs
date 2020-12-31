import * as React from 'react'

export type ButtonProps = {
    children: React.ReactNode
    onClickFunc?: any
}

export const Button: React.FC = React.memo(
    ({ children, onClickFunc }: ButtonProps): JSX.Element => <button onClick={() => onClickFunc}>{children}</button>
)
