import * as React from 'react'

export type ProjectProps = {
    headerImage: string
    backgroundImage: string
    role: string
    catchDesc: string
    description: string
    caseLink?: string
}

// If no link then show messages saying that the case study is coming soon.

// export const Project: React.FC = React.memo(
//     ({ headerImage, backgroundImage, role, catchDesc, description, caseLink }: ProjectProps): JSX.Element => {
//         return (
//             <section>

//             </section>
//         )
//     }
// )
