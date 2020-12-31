import * as React from 'react'
import Link from 'next/link'

import { toCapitalize } from '../../../lib/util'
import styles from './Navbar.module.css'

const pages = [{ link: 'work' }, { link: 'inspiration' }, { link: 'about' }, { link: 'contact' }]

export const Navbar: React.FC = React.memo(
    (): JSX.Element => {
        const generateLinks = () =>
            pages.map(({ link }) => (
                <li className={styles.links} key={link}>
                    <Link href={`/${link}`}>
                        <a>{toCapitalize(link)}</a>
                    </Link>
                </li>
            ))

        return (
            <nav className={styles.grid}>
                <header>
                    <Link href="/">
                        <a>Logo</a>
                    </Link>
                </header>
                <ul>{generateLinks()}</ul>
            </nav>
        )
    }
)
