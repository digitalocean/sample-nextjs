import * as React from 'react'

import { Button } from '../Button/Button'
import styles from './Project.module.css'

export type ProjectProps = {
    backgroundImageSrc: string
    caseLink?: string
    catchDesc: string
    children?: React.ReactNode
    description: string
    headerImageSrc: string
    projectName: string
    role: string
}

// If no link then show messages saying that the case study is coming soon.

export const Project: React.FC = React.memo(
    ({
        headerImageSrc,
        backgroundImageSrc = 'https://source.unsplash.com/random',
        role,
        catchDesc,
        description,
        caseLink,
        projectName
    }: ProjectProps): JSX.Element => {
        return (
            <section
                style={{ backgroundImage: `url(${backgroundImageSrc})` }}
                className={`container ${styles.section}`}
            >
                <div className={styles.ParallaxContainer}>
                    <header>
                        <img src={headerImageSrc} alt={projectName} />
                    </header>

                    <h5>{role}</h5>

                    <h2>{catchDesc}</h2>

                    <p>{description}</p>

                    <Button link={caseLink}>View Case Study</Button>
                </div>
            </section>
        )
    }
)
