import { Icon, Layout, Project } from '../components'

const projects = [
    {
        backgroundImageSrc: 'placeholder',
        caseLink: 'placeholder',
        catchDesc: 'Seamless and Effortless \n Design for Manga readers to \n finally enjoy.',
        description: 'For my first project as a solo designer did the end-to-end user experience process.',
        headerImageSrc: 'placeholder',
        projectName: 'KittyBeans',
        role: 'Lead UX/UI Designer'
    },
    {
        backgroundImageSrc: 'placeholder',
        caseLink: 'placeholder',
        catchDesc: 'Having issues looking for your \n next bestfriend in the city? \n Look no further.',
        description:
            'Participated in a 5 day Design Sprint  created problem statement, sketches, wireframes, prototyping, and conducting usability testing.',
        headerImageSrc: 'placeholder',
        projectName: 'CityPups',
        role: 'Lead UI Designer'
    },
    {
        backgroundImageSrc: 'placeholder',
        caseLink: 'placeholder',
        catchDesc: 'Creating zoom to be more \n accessible for students and \n teachers.',
        description:
            'Participated in a 2-week Design Challenge. Help managed 3 UX designers, conducted research, interviews, usability tests, created personas, and low-fidelity wireframes.',
        headerImageSrc: 'placeholder',
        projectName: 'ZoomApp',
        role: 'Product Manager and UX/UI Designer'
    }
]

export default function Home() {
    const projectSection = projects.map(project => <Project key={project.projectName} {...project} />)
    return (
        <Layout>
            <header className="container">
                <h1>{'Victoria is a UX/UI Designer \n Who loves to make dreams into reality'}</h1>
                <hr />
                <br />

                <p>I do UI & UX Design, and User Experience Research</p>
                <p>Currently am a Intern as a UX Designer for Smarsh</p>

                <Icon icon="linkedin" />
                <Icon icon="github" />
                <Icon icon="mail" />
            </header>

            {projectSection}
        </Layout>
    )
}
