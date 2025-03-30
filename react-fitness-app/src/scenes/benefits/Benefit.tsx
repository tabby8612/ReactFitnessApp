import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { JSX } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Benefit({ icon, title, description, setSelectedPage }: Props) {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-300 p-5 text-center bg-gray-100">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-300 bg-[#FFE1E0] p-4">{icon}</div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-[#FF6B66] underline hover:text-[#FFCD5B]"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}>
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
}
