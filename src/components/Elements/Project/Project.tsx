import * as React from 'react'
import Image from 'next/image'

import { Button } from '../Button/Button'
import styles from './Project.module.css'

export type ProjectProps = {
    backgroundImageSrc: string
    caseLink?: string
    catchDesc: string
    children?: React.ReactNode
    description: string
    headerImage: any
    role: string
}

export const Project: React.FC = React.memo(
    ({ headerImage, backgroundImageSrc, role, catchDesc, description, caseLink }: ProjectProps): JSX.Element => {
        return (
            <section className={`container ${styles.section}`}>
                <Image
                    alt="background"
                    src={backgroundImageSrc}
                    className={styles.coverImage}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />

                <div className={styles.projectContainer}>
                    <div className={styles.projectContent}>
                        <header>
                            <Image {...headerImage} />
                        </header>

                        <p>{role}</p>

                        <h2>{catchDesc}</h2>

                        <p>{description}</p>

                        <Button link={caseLink}>View Case Study</Button>
                    </div>
                    <div></div>
                </div>
            </section>
        )
    }
)
