import { useState } from "react";
import SpecialLine from "../SpecialLine/SpecialLine";
import ModalPreview from "../ModalPreview/ModalPreview";

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);
  function handleModal(img) {
    setSelectedImg(img);
  }
  function handleClickOutside(e) {
    if (e.target.classList.contains("modal-overlay")) {
      setSelectedImg(null);
    }
  }

  const imgList = [
    {
      id: 1,
      imgSrc: "src/assets/images/portfolio1.png",
      imgAlt: "House",
    },
    {
      id: 2,
      imgSrc: "src/assets/images/portfolio2.png",
      imgAlt: "IceCream",
    },
    {
      id: 3,
      imgSrc: "src/assets/images/portfolio3.png",
      imgAlt: "Flag",
    },
    {
      id: 4,
      imgSrc: "src/assets/images/portfolio2.png",
      imgAlt: "IceCream",
    },
    {
      id: 5,
      imgSrc: "src/assets/images/portfolio3.png",
      imgAlt: "Flag",
    },
    {
      id: 6,
      imgSrc: "src/assets/images/portfolio1.png",
      imgAlt: "House",
    },
  ];

  return (
    <>
      <main className=" pt-11 pb-11  bg-white text-white text-left ">
        <div className="container text-black px-10 md:px-14 lg:px-24 xl:px-26 2xl:px-36">
          <h2 className="text-3xl font-bold text-center">
            {`portfolio`.toUpperCase()}
          </h2>
          <SpecialLine textColor="text-black" bgColor="bg-black" fill="#000" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {imgList.map((img) => {
              return (
                <div key={img.id}>
                  <div
                    className="wrap relative cursor-pointer group"
                    onClick={() => {
                      handleModal(img);
                    }}
                  >
                    <img src={img.imgSrc} alt={img.imgAlt} className="w-full" />
                    <div className="absolute flex justify-center items-center h-full w-full bg-[#1abc9ce6] inset-0 opacity-0 transition-all duration-700 text-white  group-hover:opacity-100">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="200"
                          height="200"
                          fill="white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  {/* Preview Modal */}
                  {selectedImg && (
                    <ModalPreview
                      handleClickOutside={handleClickOutside}
                      selectedImg={selectedImg}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
