import React from "react";
import { Icon } from "@iconify/react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <section id="contacts" className="bg-[#0f172a] pt-[128px] pb-[128px]">
      <div className="pb-[56px] text-center ">
        <h1 className="text-[36px] leading-[1.2] uppercase font-bold text-white mb-[20px]">
          Contact Me
        </h1>
        <div className="title-divider bg-primary bg-opacity-20 w-32 h-1.5 mx-auto rounded">
          <div className="circle bg-[#00ff89] border rounded-full w-1.5 h-full bg-opacity-100"></div>
        </div>
      </div>
      <div className="w-[92%] mx-auto flex flex-col lg:flex-row justify-center items-center md:items-start lg:items-start gap-7  lg:gap-0">
        <div>
          <div>
            <h4 className="text-[#fafafa] text-[22px] leading-[1.2] font-semibold mb-[12px]">
              Contact Information
            </h4>
            <p className="text-[#fafafa] text-[16px] leading-[1.6] font-normal mb-[12px]">
              If you need make communication, please contact me without any
              hesitancy. I will be happy to have a conversation with you.
            </p>
            <span className="inline-block h-1 w-20 rounded-full bg-primary bg-opacity-20"></span>
          </div>
          <div className="flex flex-col justify-center items-center md:items-start lg:items-start">
            <div className="bg-[#162033] w-[320px] md:w-[539px] lg:w-[539px] h-auto p-5 border border-[#ffffff26] rounded-[8px] backdrop-blur-[12px] flex flex-start mt-5">
              <div className="hidden md:inline-flex lg:inline-flex justify-center items-center h-16 w-16 bg-none md:bg-primary lg:bg-primary md:bg-opacity-10 lg:bg-opacity-10 rounded-full text-primary mr-[10px] md:mr-4 lg:mr-4">
                <Icon icon="charm:phone" width="26" height="26" />
              </div>
              <div>
                <h5 className="text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[8px]">
                  Contact on phone
                </h5>
                <p className="text-[#fafafa] text-[16px] leading-[1.6] font-normal">
                  +8801784009104
                </p>
                <p className="text-[#fafafa] text-[16px] leading-[1.6] font-normal">
                  +8801773204011
                </p>
              </div>
            </div>
            <div className="bg-[#162033] w-[320px] md:w-[539px] lg:w-[539px] h-auto p-5 border border-[#ffffff26] rounded-[8px] backdrop-blur-[12px] flex flex-start mt-5">
              <div className="hidden md:inline-flex lg:inline-flex justify-center items-center h-16 w-16 bg-none md:bg-primary lg:bg-primary md:bg-opacity-10 lg:bg-opacity-10 rounded-full text-primary mr-[10px] md:mr-4 lg:mr-4">
                <Icon icon="ant-design:mail-outlined" width="26" height="26" />
              </div>
              <div>
                <h5 className="text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[8px]">
                  Contact on gmail
                </h5>
                <p className="text-[#fafafa] text-[16px] leading-[1.6] font-normal">
                  mdatiqurrahman9104@gmail.com
                </p>
                <p className="text-[#fafafa] text-[16px] leading-[1.6] font-normal">
                  mdatiqurrahman4011@gmail.com
                </p>
              </div>
            </div>
            <div className="bg-[#162033] w-[320px] md:w-[539px] lg:w-[539px] h-auto p-5 border border-[#ffffff26] rounded-[8px] backdrop-blur-[12px] flex flex-start mt-5">
              <div className="hidden md:inline-flex lg:inline-flex justify-center items-center h-16 w-16 bg-none md:bg-primary lg:bg-primary md:bg-opacity-10 lg:bg-opacity-10 rounded-full text-primary mr-[10px] md:mr-4 lg:mr-4">
                <Icon icon="akar-icons:location" width="26" height="26" />
              </div>
              <div>
                <h5 className="text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[8px]">
                  Contact address
                </h5>
                <p className="text-[#fafafa] text-[16px] leading-[1.6] font-normal">
                  Osmanpur, Pirganj, Rangpur, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form className="bg-[#162033] w-[320px] md:w-[600px] lg:w-[681px] h-auto border border-[#ffffff26] rounded-[8px] backdrop-blur-[12px]">
            <div className="card-body  p-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#fafafa]">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="input border-[#ffffff26] rounded-[4px] focus:border-primary bg-[#162033] text-[#fafafa]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#fafafa]">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="input border-[#ffffff26] rounded-[4px] focus:border-primary bg-[#162033] text-[#fafafa]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#fafafa]">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter subject..."
                  className="input border-[#ffffff26] rounded-[4px] focus:border-primary bg-[#162033] text-[#fafafa]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#fafafa]">Message</span>
                </label>
                <textarea
                  className="textarea border-[#ffffff26] rounded-[4px] focus:border-primary bg-[#162033] text-[#fafafa] h-[117px]"
                  placeholder="Enter your message..."
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="mail-btn">Send Mail</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
