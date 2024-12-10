import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary"
          />
          <div className="text-muted-foreground">
            Copyright &copy; Gromov Oleg. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;