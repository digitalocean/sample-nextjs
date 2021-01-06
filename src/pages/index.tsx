import { Icon, Layout, Project } from '../components'

const projects = [
    {
        backgroundImageSrc: '/images/backgrounds/kittybeans.png',
        caseLink: '',
        catchDesc: 'Seamless and Effortless \n Design for Manga readers to \n finally enjoy.',
        description: 'For my first project as a solo designer did the end-to-end user experience process.',
        headerImage: {
            alt: 'springboard_logo',
            height: 80,
            src: '/images/logos/logo_springboard.png',
            width: 336
        },
        projectName: 'KittyBeans',
        role: 'Lead UX/UI Designer'
    },
    {
        backgroundImageSrc: '/images/backgrounds/citypups.png',
        caseLink: '',
        catchDesc: 'Having issues looking for your \n next bestfriend in the city? \n Look no further.',
        description:
            'Participated in a 5 day Design Sprint  created problem statement, sketches, wireframes, prototyping, and conducting usability testing.',
        headerImageSrc: '/images/logos/logo_citypup.png',
        headerImage: {
            alt: 'citypups_logo',
            height: 80,
            src: '/images/logos/logo_citypup.png',
            width: 727
        },
        projectName: 'CityPups',
        role: 'Lead UI Designer'
    },
    {
        backgroundImageSrc: '/images/backgrounds/zoom.png',
        caseLink: '',
        catchDesc: 'Creating zoom to be more \n accessible for students and \n teachers.',
        description:
            'Participated in a 2-week Design Challenge. Help managed 3 UX designers, conducted research, interviews, usability tests, created personas, and low-fidelity wireframes.',
        headerImage: {
            alt: 'iterate_ux_logo',
            height: 97,
            src: '/images/logos/logo_iterate_ux.png',
            width: 661
        },
        projectName: 'ZoomApp',
        role: 'Product Manager and UX/UI Designer'
    }
]

export default function Home() {
    const projectSection = projects.map(project => <Project key={project.projectName} {...project} />)

    const iconList = ['linkedin', 'github', 'mail'].map(icon => (
        <Icon icon={icon} key={icon} style={{ marginRight: 20 }} className="" />
    ))

    return (
        <Layout>
            <section className="showcase">
                <div className="video-container">
                    <img
                        src="https://i.pinimg.com/originals/76/09/46/7609468e97e15d1da8d14d534be7366c.gif"
                        alt="hero"
                    />
                </div>

                <header className="container content">
                    <h1>Victoria is a UX/UI Designer</h1>
                    <h1>Who loves to make dreams into reality</h1>
                    <hr />
                    <br />

                    <p>I do UI & UX Design, and User Experience Research</p>
                    <p>Currently am a Intern as a UX Designer for Smarsh</p>

                    {iconList}
                </header>
            </section>

            {projectSection}
        </Layout>
    )
}
