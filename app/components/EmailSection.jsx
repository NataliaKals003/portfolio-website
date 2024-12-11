import React, { useState } from "react";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Adicionando estado de loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Ativando loading ao submeter o formulário
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Desativando o loading ao terminar
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative min-h-screen items-center justify-center"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-black dark:text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-black dark:text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. My inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
      </div>
      <div>
        {submitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col max-w-md" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-normal"
              >
                Your Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="dark:bg-[#18191E] border border-[#33353F] placeholder-[#838383] dark:placeholder-[#9CA2A9] dark:text-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Jacob"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-normal"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="dark:bg-[#18191E] border border-[#33353F] placeholder-[#838383] dark:placeholder-[#9CA2A9] dark:text-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block mb-2 text-sm font-normal"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                className="dark:bg-[#18191E] border border-[#33353F] placeholder-[#838383] dark:placeholder-[#9CA2A9] dark:text-white text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading} // Desabilita o botão enquanto estiver enviando
              className={`bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-normal py-2.5 px-5 rounded-lg w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}{" "}
              {/* Exibe "Sending..." durante o carregamento */}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
