import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Section from "@/components/sections/_components/SectionLayout";
import BrandText from "@/components/sections/_components/BrandText";
import ExternalLinkButton from "@/components/sections/_components/ExternalLinkButton";

const HeroEyebrow = () => {
  return (
    <a
      href="https://pay.pyro.host/?utm_source=pyro&utm_medium=website&utm_campaign=launch"
      rel="noopener noreferrer"
      target="_blank"
      className="flex w-fit items-center justify-center gap-2 rounded-full border-2 border-solid border-[#ffffff08] bg-[#ffffff12] p-2 px-4 text-sm font-bold"
    >
      <p>
        We&apos;ve launched!{" "}
        <span className="text-brand">Check out our plans</span>
      </p>
      <ArrowRightIcon />
    </a>
  );
};

const HeroImages = () => {
  return (
    <div className="img-opacity-animation pointer-events-none absolute inset-0 select-none">
      <div className="pointer-events-none relative inset-0 h-screen min-h-[950px] w-screen select-none">
        <Image
          alt=""
          aria-hidden
          src="/img/fire2.png"
          fill
          className="pointer-events-none select-none object-cover"
        />
        <Image
          alt=""
          aria-hidden
          src="/img/fire.svg"
          fill
          className="pointer-events-none select-none object-cover"
        />
        <Image
          alt=""
          aria-hidden
          src="/img/godrays.png"
          fill
          className="pointer-events-none  scale-150 select-none"
        />
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <Section hero>
      <div className="z-10 flex w-full max-w-[735px] flex-col items-center pt-48 text-center md:items-start md:pt-60 md:text-left">
        <HeroEyebrow />
        <Section.Title hero>
          A <BrandText>better way</BrandText> to host games
        </Section.Title>
        <Section.Description maxWidth={700}>
          Pyro is a new game host that makes it faster, easier, and cheaper to
          play your favorite games with your friends. Instantly available,
          lag-free servers with unmatched value.
        </Section.Description>
        <div className="mt-10">
          <ExternalLinkButton href="https://pay.pyro.host" text="Order Now" />
        </div>
      </div>

      <HeroImages />
    </Section>
  );
};

export default HeroSection;
