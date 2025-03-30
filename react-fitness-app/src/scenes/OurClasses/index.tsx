import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: ClassType[] = [
  {
    name: "Weight Training Classes",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia non sit quas suscipit illo libero vel",
    image: image1,
  },
  {
    name: "Fitness Classes",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia non sit quas suscipit illo libero vel",
    image: image2,
  },
  {
    name: "Advanture Classes",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia non sit quas suscipit illo libero vel",
    image: image3,
  },
  {
    name: "Ab Core Classes",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia non sit quas suscipit illo libero vel",
    image: image4,
  },
  {
    name: "Yoga Classes",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia non sit quas suscipit illo libero vel",
    image: image5,
  },
  {
    name: "Weight Training Classes",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia non sit quas suscipit illo libero vel",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function OurClasses({ setSelectedPage }: Props) {
  return (
    <section
      className="w-full bg-primary-100 py-40"
      id="ourclasses">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div>
          <div className="md:w-3/5 ml-8">
            <HText>Our Classes</HText>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae molestiae eaque saepe reiciendis blanditiis similique doloremque</p>
          </div>
        </motion.div>
        <div className="mt-10 ml-5 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={`${item.name}`}
                image={item.image}
                description={item.description}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
