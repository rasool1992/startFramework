import SpecialLine from "../SpecialLine/SpecialLine";
export default function About() {
  return (
    <>
      <main className=" pt-11 pb-11  bg-[#15BC9C] text-white text-left ">
        <div className="container px-10 md:px-14 lg:px-24 xl:px-26 2xl:px-36">
          <h2 className="text-3xl font-bold text-center">
            {`about`.toUpperCase()}
          </h2>
          <SpecialLine textColor="text-white" bgColor="bg-white" fill="#fff" />
          <p className="pt-4">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="pt-8">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </main>
    </>
  );
}
