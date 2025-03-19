import React, { useState } from "react";
import { Label } from "./aceternity/label";
import { Input } from "./aceternity/input";
import { cn } from "../lib/utils";
import { Cover } from "./aceternity/Cover";
import useEmailJS from "../lib/useEmailJs";

function Contact() {
  const { sendEmail, status, loading } = useEmailJS();

  const [loadingMessage, setLoadingMessage] = useState({
    loading: false,
    message: "",
    success: false,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !formData.firstName ||
        !formData?.lastName ||
        !formData?.email ||
        !formData?.message
      ) {
        setLoadingMessage({
          loading: false,
          message: "All fields are required!",
          success: false,
        });
        return;
      }
      await sendEmail({
        Name: formData.firstName + " " + formData.lastName,
        Email: formData.email,
        Message: formData.message,
      });
      setLoadingMessage({
        loading,
        message: status?.message,
        success: status?.success,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoadingMessage({
        loading: false,
        message: error?.message,
        success: false,
      });
    }
  };

  return (
    <div
      id="contact"
      className="shadow-input mx-auto w-full max-w-[800px] backdrop-blur-[18px] z-20 bg-[#11121617] rounded-none p-4 md:rounded-2xl md:p-8 dark:bg-black"
    >
      <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
        Do You Have A Project, <Cover>Lets Discuss</Cover>
      </h2>
      {loadingMessage?.message && (
        <p
          className={`mt-[20px] text-[0.9rem] ${
            loadingMessage?.success ? "text-green-400" : "text-red-400"
          }`}
        >
          *{loadingMessage?.message}
        </p>
      )}
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              name="firstName"
              value={formData?.firstName}
              onChange={handleChange}
              placeholder="Tyler"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              name="lastName"
              value={formData?.lastName}
              onChange={handleChange}
              placeholder="Durden"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            value={formData?.email}
            onChange={handleChange}
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Enter Your Message</Label>
          <textarea
            id="message"
            name="message"
            value={formData?.message}
            onChange={handleChange}
            placeholder="Write a message..."
            className="p-[10px] rounded-[4px] outline-none border-none resize-none h-[140px] bg-zinc-800 text-white"
          />
        </LabelInputContainer>
        <button
          className="group/btn disabled:text-neutral-600 relative block h-10 w-full rounded-md bg-blue-900 from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={loadingMessage?.loading}
        >
          {loadingMessage?.loading ? "Loading..." : "Send"}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default Contact;
