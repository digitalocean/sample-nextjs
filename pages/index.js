import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen lg:flex text-lg">
      {/* left side */}
      <div className="lg:w-1/2 relative z-10 flex flex-col justify-center px-10 lg:px-20 py-20 lg:py-0 text-left">
        <h2 className="inter text-4xl mb-3 font-bold text-gray-800">
          Welcome to Your Next.js App{" "}
          <span className="block text-blue-500 text-2xl font-normal">
            Deployed to DigitalOcean
          </span>
        </h2>

        <p className="text-gray-700 mb-6">
          Deploy API routes, static frontend, databases, and more.
        </p>

        <div className="sm:flex">
          <a
            href="https://www.digitalocean.com/docs/app-platform"
            className="block py-2 px-5 rounded shadow bg-gray-500 text-gray-100 sm:mr-2 mb-2 sm:mb-0"
          >
            View the Docs
          </a>
          <a
            href="https://cloud.digitalocean.com/apps"
            className="block py-2 px-5 rounded shadow bg-blue-500 text-blue-100"
          >
            View Your Dashboard
          </a>
        </div>
      </div>

      {/* right side */}
      <div className="lg:w-1/2 relative">
        <svg
          className="hidden lg:block text-white fill-current absolute h-full transform -translate-x-1/2 w-48 z-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>

        <Image
          src="background.jpg"
          alt="Ocean Image"
          className="lg:absolute object-cover lg:inset-y-0 lg:right-0 lg:h-full lg:w-full"
        />
      </div>
    </div>
  );
}
