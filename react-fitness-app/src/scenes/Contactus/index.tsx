import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function ContactUs({ setSelectedPage }: Props) {
  const inputStyle = "mt-5 w-full rounded-lg bg-[#FF6B66] px-5 py-3 placeholder-white";

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contactus"
      className="mx-auto w-5/6 pt-24 pb-2">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}>
          <HText>
            <span className="text-primary-500">JOIN NOW</span> To Get In Shape
          </HText>
          <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero libero adipisci vel quis asperiores cupiditate ipsa beatae</p>
        </motion.div>

        {/* Form and Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action={"http://formsubmit.co/tabishsajwani@hotmail.com"}>
              <input
                type="text"
                className={inputStyle}
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" && "Max Length Is 100 Characters"}
                </p>
              )}

              <input
                type="text"
                className={inputStyle}
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "invalid Email"}
                </p>
              )}

              <textarea
                rows={4}
                cols={50}
                className={inputStyle}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" && "This field is required"}
                  {errors.message.type === "maxLength" && "Max Length Is 2000 Characters"}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-[#FFC132] px-20 py-3 transition duration-500 hover:text-white cursor-pointer">
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <div className="md:before:content-evolvetext w-full before:absolute before:bottom-20 before:right-10 before:z-[-1]">
              <img
                src={ContactUsPageGraphic}
                alt="Contact us graphic"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
