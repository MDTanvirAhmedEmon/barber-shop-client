import Image from "next/image";
import about1 from "../../../public/about1.png";
import about2 from "../../../public/about2.png";

const HeroAbout = () => {
  return (
    <div className=" bg-bgColor py-28">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around md:space-x-10 px-4 md:px-0">
          <div className="w-auto lg:w-2/4">
            <p className="text-md font-bold text-primaryColor">SINCE 2006</p>
            <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-5">About Barber Shop</h1>
            <p className="mb-5">
              Come experience a unique and edgy barbershop for all your hair and
              beard needs. ravida haretra nuam enim mi obortis eset uctus enec
              accumsan eu justo alisuame amet auctor orci donec vitae vehicula
              risus. <br /> <br />
              Barber utate ons amet ravida haretra nuam the duru miss uctus the
              drana accumsan justo aliquam sit amet auctor orci done vitae risus
              duise nisan sapien silver on the accumsan id mauris apien.
            </p>
            <ul className="list-disc list-inside">
              <li>We are professional and certified barbers</li>
              <li>We use quality products to make you look perfect</li>
              <li>We care about our customers satisfaction</li>
            </ul>
          </div>
          <div className="flex justify-center space-x-4 md:space-x-6 mt-10 lg:mt-0 ">
            <div className="w-auto">
            <Image className="mt-20 w-auto md:w-[200px] xl:w-[300px]" src={about1}  alt="about image" />
            </div>
            <div className="w-auto">
            <Image className="mb-20 w-auto md:w-[200px] xl:w-[300px]" src={about2}  alt="about image" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
