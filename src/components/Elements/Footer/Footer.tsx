import * as React from 'react'

import { Icon } from '../Icon/Icon'
import styles from './Footer.module.css'

export const Footer = React.memo(() => {
    const icons = [
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/victoria-bigsby/' },
        { icon: 'github', link: 'https://github.com/VBigsby' },
        { icon: 'mail', link: 'mailto:vtbigsby@gmail.com' }
    ]

    const iconList = icons.map(({ icon, link }) => (
        <a href={link} target="_blank" key={icon}>
            <Icon icon={icon} className={styles.icon} size="lg" />
        </a>
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
