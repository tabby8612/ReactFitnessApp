// import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/Logo.png";
// import { nav } from "framer-motion/client";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
// import { button } from "framer-motion/client";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: string;
  setSelectedPage: (page: SelectedPage) => void;
  isTopOfPage: boolean;
};

export default function Navbar({ selectedPage, setSelectedPage, isTopOfPage = true }: Props) {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)"); // this hook tells returns boolean if we are above or below 1060px
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "bg-transparent" : "bg-red-50 drop-shadow";

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img
              src={Logo}
              alt="Logo"
            />

            {/* Right Side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={() => setSelectedPage(SelectedPage.Home)}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={() => setSelectedPage(SelectedPage.Benefits)}
                  />
                  <Link
                    page="OurClasses"
                    selectedPage={selectedPage}
                    setSelectedPage={() => setSelectedPage(SelectedPage.OurClasses)}
                  />
                  <Link
                    page="Contactus"
                    selectedPage={selectedPage}
                    setSelectedPage={() => setSelectedPage(SelectedPage.ContactUs)}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-amber-400 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 z-40 h-full w-[300px] bg-[#FFE1E0] drop-shadow-xl">
          {/* closing ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={() => setSelectedPage(SelectedPage.Home)}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={() => setSelectedPage(SelectedPage.Benefits)}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={() => setSelectedPage(SelectedPage.OurClasses)}
            />
            <Link
              page="Contact us"
              selectedPage={selectedPage}
              setSelectedPage={() => setSelectedPage(SelectedPage.ContactUs)}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
