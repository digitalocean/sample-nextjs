import Image from "next/image";
import Link from "next/link";

import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";

// Icon imports
import { Github, Twitter, Facebook } from "lucide-react";
import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function Footer() {
  return (
    <footer className="w-full mx-auto m-10  max-w-7xl mx-auto border-t">
      <div>
        <div className="grid md:grid-cols-[3fr_0.5fr_0fr] mt-10 md:-mb-16">
          <div className="not-prose flex flex-col gap-6 mb-10 ">
            <Link href="/">
              <Image
                src="/assets/hazel-dark.png"
                alt="Logo"
                width={80}
                height={20}
                // className="transition-all hover:opacity-75 dark:invert"
              ></Image>
            </Link>
            <p className="text-xs text-neutral-500">
              <Balancer>
                Hazel Communications Private Limited. <br></br>
                Hyderabad, India.
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2"></div>

          <div className="flex flex-row gap-2">
            <Button variant="outline" size="icon">
              <Github />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook />
            </Button>
          </div>
        </div>
        <div className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2 mt-10">
          <p className="text-neutral-500 mt-5 text-xs">
            Copyright ©{" "}
            <a href="/">
              Hazel Communications Private Limited
            </a>
            , 2024. All rights reserved.
          </p>
          <p className="text-neutral-500 mt-5 text-xs">
          
            <a href="mailto:hello@hazel.gg">
             Reach us out at hello@hazel.gg
            </a>
  
          </p>
        </div>
      </div>
    </footer>
  );
}
