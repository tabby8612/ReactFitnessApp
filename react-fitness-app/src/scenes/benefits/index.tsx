import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dignissimos nam natus dolore recusandae.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Facilities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dignissimos nam natus dolore recusandae ullam",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Experts and Pro Trainers",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dignissimos nam natus dolore recusandae ullam cupiditate libero animi odit ipsam. ",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Benefits({ setSelectedPage }: Props) {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}>
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">We provide world class fitness equipment, trainers and classes get you to your ultimate goals with ease. We provide try care into each and every member.</p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}>
          {benefits.map((benefit) => (
            <Benefit
              icon={benefit.icon}
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphics */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits page graphic"
          />

          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-dsd">
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING <span className="text-secondary-400">FIT</span>
                </HText>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id similique optio dolore temporibus possimus natus, consectetur obcaecati corrupti nostrum ullam expedita magni fugit voluptatibus animi aliquam. Tempora ex laboriosam illo.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt deserunt delectus omnis praesentium odit similique doloremque qui voluptatem quasi nisi excepturi aut, culpa quidem, quis aspernatur tempora hic suscipit.
              </p>
            </div>

            {/* Button */}
            <div className="relative nt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
