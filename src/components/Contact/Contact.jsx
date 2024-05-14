import { useEffect, useState } from "react";
import SpecialLine from "../SpecialLine/SpecialLine";
export default function Contact() {
  const specialLineColor = "black";
  const [userName, setUserName] = useState(false);
  const [userAge, setUserAge] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const form = document.querySelector("form");

  useEffect(() => {
    if (form) {
      form.userName.addEventListener("input", (e) => {
        if (e.target.value) {
          setUserName(true);
        } else {
          setUserName(false);
        }
      });
      //   For userAge
      form.userAge.addEventListener("input", (e) => {
        if (e.target.value) {
          setUserAge(true);
        } else {
          setUserAge(false);
        }
      });

      //   For userEmail
      form.userEmail.addEventListener("input", (e) => {
        if (e.target.value) {
          setUserEmail(true);
        } else {
          setUserEmail(false);
        }
      });
      //   For userPassword
      form.userPassword.addEventListener("input", (e) => {
        if (e.target.value) {
          setUserPassword(true);
        } else {
          setUserPassword(false);
        }
      });
    }
  }, [form, userName, userAge, userEmail, userPassword]);

  return (
    <>
      <main className=" pt-11 pb-11  bg-white text-white text-left ">
        <div className="container text-black px-10 md:px-14 lg:px-24 xl:px-26 2xl:px-36">
          <h2 className="text-3xl font-bold text-center">
            {`contact`.toUpperCase()}
          </h2>
          <SpecialLine specialLineColor={specialLineColor} />
          <form className="flex flex-col items-start gap-4 mt-4">
            <div className="relative w-full">
              <span
                className={`block transition-all duration-150 absolute  text-[#15BC9C]
                ${userName ? "translate-y-0 " : "translate-y-full -z-40"}
              }`}
              >
                userName:
              </span>
              <input
                type="text"
                name="userName"
                placeholder="userName"
                className="w-full outline-none mt-4 border-b-2 h-10 pl-2 z-50 "
              />
            </div>
            {/* User Age */}
            <div className="relative w-full">
              <span
                className={`block transition-all duration-150 absolute  text-[#15BC9C]
                ${userAge ? "translate-y-0 " : "translate-y-full -z-40"}
              }`}
              >
                userAge:
              </span>
              <input
                type="number"
                name="userAge"
                placeholder="userAge"
                className="w-full outline-none mt-4 border-b-2 h-10 pl-2"
              />
            </div>

            {/* User Email */}
            <div className="relative w-full">
              <span
                className={`block transition-all duration-150 absolute  text-[#15BC9C]
                ${userEmail ? "translate-y-0 " : "translate-y-full -z-40"}
              }`}
              >
                userEmail:
              </span>
              <input
                type="email"
                name="userEmail"
                placeholder="userEmail"
                className="w-full outline-none mt-4 border-b-2 h-10 pl-2"
              />
            </div>
            {/* userPassword */}
            <div className="relative w-full">
              <span
                className={`block transition-all duration-150 absolute  text-[#15BC9C]
                ${userPassword ? "translate-y-0 " : "translate-y-full -z-40"}
              }`}
              >
                userPassword:
              </span>
              <input
                type="password"
                name="userPassword"
                placeholder="userPassword"
                className="w-full outline-none pt-4 border-b-2 h-10 pl-2"
              />
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
