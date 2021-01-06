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
        const [buttonIsDisabled, setButtonIsDisabled] = React.useState(false)
        const [inHover, setHover] = React.useState(false)

        React.useEffect(() => {
            if (inHover) {
                // If no case link is provided then disable the button.
                if (!caseLink.length) setButtonIsDisabled(true)
            }
        }, [inHover])

        const buttonText = inHover && buttonIsDisabled ? 'Coming Soon' : 'View Case Study'
        const disabledClass = inHover && buttonIsDisabled ? 'buttonDisabled' : ''
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

                        <Button
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            className={disabledClass}
                        >
                            {buttonText}
                        </Button>
                    </div>
                    <div></div>
                </div>
            </section>
        )
    }
)
