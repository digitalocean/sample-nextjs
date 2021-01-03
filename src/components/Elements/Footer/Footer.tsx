import * as React from 'react'

import { Icon } from '../Icon/Icon'

export const Footer = React.memo(() => {
    return (
        <footer>
            <h3>Want to work together? Let’s Connect!</h3>

            <Icon icon="linkedin" size="lg" />
            <Icon icon="mail" size="lg" />
            <Icon icon="discord" size="lg" />
            <Icon icon="github" size="lg" />
        </footer>
    )
})
