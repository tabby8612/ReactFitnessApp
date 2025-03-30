import Logo from "@/assets/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#FFE1E0] py-16">
      <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img
            src={Logo}
            alt="logo"
          />
        </div>
        <p className="my-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sit ut ratione dolore nulla neque alias doloremque explicabo aliquam voluptates voluptatum quae error incidunt inventore quasi dolor doloribus, molestiae commodi?
        </p>

        <div className="mt-16 basis-1/6 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa Orci</p>
          <p className="my-5">El gravida id el etime</p>
          <p>@contact us</p>
        </div>
        <div className="mt-16 basis-1/6 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Terms and Condition</p>
          <p className="my-5">(333)425-6825</p>
          <p>@contact us</p>
        </div>
      </div>
    </footer>
  );
}
