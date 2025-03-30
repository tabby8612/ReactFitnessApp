import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

export default function Link({ page, selectedPage, setSelectedPage }: Props) {
  // const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  const lowerCasePage = page.toLowerCase().trim();

  return (
    //AnchorLink is FC from smooth scroll library
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-[#FF6B66]" : ""} transition duration-500 hover:text-[#503736]`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}>
      {page}
    </AnchorLink>
  );
}
