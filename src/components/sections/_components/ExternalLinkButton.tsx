import { ArrowRightIcon } from "@radix-ui/react-icons";

const ExternalLinkButton = ({
  href,
  text,
  ...other
}: {
  href: string;
  text: string;
}) => {
  return (
    <a
      data-standard-pyro-component="ExternalLinkButton"
      style={{
        backgroundImage:
          "radial-gradient(109.26% 109.26% at 49.83% 13.37%, #FF343C 0%, #F06F53 100%)",
      }}
      className="flex items-center justify-center gap-4 rounded-full py-3 pl-8 pr-6 text-sm font-bold"
      href={href}
      {...other}
    >
      <p data-standard-pyro-component="ExternalLinkButton">{text}</p>
      <ArrowRightIcon />
    </a>
  );
};

export default ExternalLinkButton;
