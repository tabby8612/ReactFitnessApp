import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-widith:1060px)");

  //   md means to apply properly on media screen above medium
  //   basis is for flex-basis
  return (
    <section
      id="home"
      className="gap-16  py-10 md:h-full">
      {/* iamge and main header */}
      <div className="md:flex">
        <motion.div
          className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
          {/* main header */}
          <div className="z-10 mt-32 md:basis-3/5">
            {/* Headers */}
            <motion.div
              className="md:-mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}>
              <div className="relative">
                <div className="before:absolute before:-top-20 before:left-20 before:z-(-1) md:before:content-url('@/assets/EvolveText.png')">
                  <img
                    src={HomePageText}
                    alt="home-page-text"
                  />
                </div>
              </div>
              <p className="mt-8 text-sm">Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of... Get Your Dream Body</p>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}>
              <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              <AnchorLink
                className="text-sm font-bold text-[#FF6B66] underline hover:text-[#FFCD5B]"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}>
                <p>Learn More</p>
              </AnchorLink>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img
            src={HomePageGraphic}
            alt="home-pageGraphic"
          />
        </div>
      </div>

      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-[#FFE1E0]">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img
                src={SponsorRedBull}
                alt="Sponsor RedBull"
              />
              <img
                src={SponsorForbes}
                alt="Sponsor Forbes"
              />
              <img
                src={SponsorFortune}
                alt="Sponsor Fortune"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
