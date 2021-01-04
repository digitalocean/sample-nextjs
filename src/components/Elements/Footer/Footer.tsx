import * as React from 'react'

import { Icon } from '../Icon/Icon'
import styles from './Footer.module.css'

export const Footer = React.memo(() => {
    const iconList = ['linkedin', 'mail', 'discord', 'github'].map(icon => (
        <Icon icon={icon} key={icon} className={styles.icon} size="lg" />
    ))

    return (
        <footer className={`${styles.footer} container`}>
            <div className={styles.wrapper}>
                <h3>Want to work together? Let’s Connect!</h3>

                <div className={styles.iconWrapper}>{iconList}</div>
            </div>
        </footer>
    )
})
