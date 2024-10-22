import {
    BookOpenIcon,
    ChevronRightIcon,
    CircleDollarSign,
    CircleDollarSignIcon,
    HouseIcon,
    MapPin,
    MapPinIcon,
    MessagesSquareIcon,
    ThumbsUpIcon,
  } from "lucide-react";
  
  export default function IconSectionDescriptionOnLeftIconBlocksOnRight() {
    return (
      <>
        {/* Icon Blocks */}
        <div className="container py-24 lg:py-32 max-w-7xl sd:max-w-full">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="lg:w-3/4">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Made for Creators. By Creators.
              </h2>
              <p className="mt-3 text-muted-foreground">
              LimeLight is a social platform made for creators that addresses many common issues faced by creators - being a all-in-one solution for creators.
              </p>
              <p className="mt-5">
                <a
                  className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 "
                  href="#"
                >
                  Learn more about Limelight
                  <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
                </a>
              </p>
            </div>
            {/* End Col */}
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-gradient-to-r from-pink-500 to-violet-500">
                  <BookOpenIcon className="flex-shrink-0 w-5 h-5" />
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Creator First Design
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                  Designed with creators in mind, our platform puts your needs at the forefront, ensuring a seamless and supportive experience.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  bg-gradient-to-r from-pink-500 to-violet-500">
                  <HouseIcon className="flex-shrink-0 w-5 h-5 " />
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                  Home for all the services that creators require.
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                  Discover a one-stop hub where all the tools and services you need to thrive as a creator are right at your fingertips.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-gradient-to-r from-pink-500 to-violet-500">
                  <CircleDollarSignIcon className="flex-shrink-0 w-5 h-5" />
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                  Multiple monetisable ways to make being a creator easy.
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                  Use new simple ways to earn from your passion, making your creative journey both profitable and rewarding.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-gradient-to-r from-pink-500 to-violet-500">
                  <MapPinIcon className="flex-shrink-0 w-5 h-5" />
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                  Localized content with multiple categories
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                  Explore content tailored to your city, state, country, or even globally, with a wide range of categories designed to match your interests and needs.
                  </p>
                </div>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Icon Blocks */}
      </>
    );
  }
  