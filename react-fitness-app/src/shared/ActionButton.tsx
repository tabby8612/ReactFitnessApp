import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function ActionButton({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink
      className="rounded-md bg-[#FFC132] px-10 py-2 hover:bg-[#FF6B66] hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}>
      {children}
    </AnchorLink>
  );
}
