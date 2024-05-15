import { useState } from "react";
import SpecialLine from "../SpecialLine/SpecialLine";
export default function Contact() {
  const [userName, setUserName] = useState(false);
  const [userAge, setUserAge] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  function handleChange(e, setInput) {
    if (e.target.value.length > 0) {
      setInput(e.target.value);
    } else {
      setInput(null);
    }
  }

  return (
    <>
      <main className=" pt-11 pb-11  bg-white text-white text-left ">
        <div className="container text-black px-10 md:px-14 lg:px-24 xl:px-26 2xl:px-36">
          <h2 className="text-3xl font-bold text-center">
            {`contact`.toUpperCase()}
          </h2>

          <SpecialLine textColor="text-black" bgColor="bg-black" fill="#000" />

          <form className="flex flex-col items-start gap-4 mt-4">
            <div className="relative w-full">
              <input
                onChange={(e) => {
                  handleChange(e, setUserName);
                }}
                type="text"
                name="userName"
                id="userName"
                placeholder="userName"
                className="w-full outline-none mt-4 border-b-2 h-10 pl-2 z-50 "
              />
              <label
                htmlFor="userName"
                className={`block transition-all duration-150 absolute opacity-100 text-[#15BC9C] ${
                  userName
                    ? "-translate-y-[65px] z-40"
                    : "-z-40 opacity-0 text-transparent"
                }`}
              >
                userName:
              </label>
            </div>
            {/* User Age */}
            <div className="relative w-full">
              <input
                type="number"
                name="userAge"
                id="userAge"
                placeholder="userAge"
                className="w-full outline-none mt-4 border-b-2 h-10 pl-2"
                onChange={(e) => {
                  handleChange(e, setUserAge);
                }}
              />
              <label
                htmlFor="userAge"
                className={`block transition-all duration-150 absolute opacity-100 text-[#15BC9C] ${
                  userAge
                    ? "-translate-y-[65px] z-40"
                    : "-z-40 opacity-0 text-transparent"
                }`}
              >
                userAge:
              </label>
            </div>

            {/* User Email */}
            <div className="relative w-full">
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="userEmail"
                className="w-full outline-none mt-4 border-b-2 h-10 pl-2"
                onChange={(e) => {
                  handleChange(e, setUserEmail);
                }}
              />
              <label
                htmlFor="userEmail"
                className={`block transition-all duration-150 absolute opacity-100 text-[#15BC9C] ${
                  userEmail
                    ? "-translate-y-[65px] z-40"
                    : "-z-40 opacity-0 text-transparent"
                }`}
              >
                userEmail:
              </label>
            </div>
            {/* userPassword */}
            <div className="relative w-full">
              <input
                type="password"
                name="userPassword"
                id="userPassword"
                placeholder="userPassword"
                className="w-full outline-none pt-4 border-b-2 h-10 pl-2"
                onChange={(e) => {
                  handleChange(e, setUserPassword);
                }}
              />
              <label
                htmlFor="userPassword"
                className={`block transition-all duration-150 absolute opacity-100 text-[#15BC9C] ${
                  userPassword
                    ? "-translate-y-[65px] z-40"
                    : "-z-40 opacity-0 text-transparent"
                }`}
              >
                userPassword:
              </label>
            </div>

            <button
              type="button"
              className="mt-2 bg-[#15BC9C] px-2 py-2 rounded-md text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
