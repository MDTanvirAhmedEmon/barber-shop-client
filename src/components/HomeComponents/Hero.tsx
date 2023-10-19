import Link from "next/link";
import heroImage from "../../../public/hero.png";
import Header from "../Shared/Header";

const Hero = () => {
  const imageStyle = {
    backgroundImage: `URL(${heroImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <div style={imageStyle}>
      <div className="h-screen bg-[#00000077]">
        <div className="h-20 bg-[#00000077] fixed top-0 left-0 right-0">
          <Header></Header>
        </div>

        <div className="h-screen">
          <div className="h-full flex items-center justify-center">
            <div className="text-white text-center uppercase">
              <p className="text-sm font-semibold">Stay sharp, Look good</p>
              <h1 className="hidden md:block md:text-5xl lg:text-6xl font-bold mt-5">
                Get Your Style Your
              </h1>
              <h1 className="hidden md:block md:text-5xl lg:text-6xl font-bold mt-2">
                Deserve
              </h1>
              {/* mobile hero text */}

              <div className="md:hidden">
                <h1 className="text-4xl font-bold mt-5">Get Your tyle</h1>
                <h1 className="text-4xl font-bold mt-3">Your Deserve</h1>

                <p className=" md:bl mt-5 text-lg font-semibold">
                  Broadway St, NYC. Appointment:
                </p>
                <p className=" md:bl mt-2 text-lg font-semibold">
                  855 100 4444
                </p>
              </div>

              <p className="hidden md:block md:bl mt-5 text-sm font-semibold">
                Broadway St, NYC. Appointment: 855 100 4444
              </p>
              <Link href={'/services'}><button className="bg-white text-black px-5 py-3 rounded mt-10 uppercase font-semibold">
                Make Appointment
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
