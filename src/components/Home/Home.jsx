import SpecialLine from "../SpecialLine/SpecialLine";

function Home() {
  return (
    <>
      <main className="pt-8 pb-10  bg-[#15BC9C] text-white text-center ">
        <div className="flex items-center justify-center pb-4">
          <img
            src="src/assets/images/home.svg"
            alt=""
            className="block w-[300px]"
          />
        </div>
        <h2 className="text-3xl ">START FRAMEWORK</h2>
        <SpecialLine />
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </main>
    </>
  );
}

export default Home;
