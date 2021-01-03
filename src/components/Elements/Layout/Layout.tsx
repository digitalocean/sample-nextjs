import React from 'react'

import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

export const Layout = ({ children }) => (
    <React.Fragment>
        <Navbar />
        {children}
        <Footer />
    </React.Fragment>
)
