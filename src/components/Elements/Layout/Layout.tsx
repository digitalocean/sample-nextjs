import React from 'react'

import { Navbar } from '../Navbar/Navbar'

export const Layout = ({ children }) => (
    <React.Fragment>
        <Navbar />
        {children}
    </React.Fragment>
)
