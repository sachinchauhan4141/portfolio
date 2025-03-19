import { useState } from "react";
import emailjs from "@emailjs/browser";

const useEmailJS = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (formData) => {
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        "service_0u87cun", // Replace with your EmailJS Service ID
        "template_iah1e0m", // Replace with your EmailJS Template ID
        formData,
        "IQVL8sHRO218k1NrG" // Replace with your EmailJS Public Key
      );
      setStatus({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      setStatus({ success: false, message: "Failed to send email." });
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, status, loading };
};

export default useEmailJS;
