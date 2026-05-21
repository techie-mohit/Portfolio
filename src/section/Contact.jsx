import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section
      id="contact"
      className="py-32 px-[6vw] md:px-[7vw] lg:px-[15vw] font-sans relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] rounded-full bg-purple-600/5 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Have an exciting opportunity or want to build something amazing together? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          {/* LEFT: Contact Form */}
          <div className="lg:col-span-5 flex">
            <div className="w-full bg-gradient-to-b from-gray-900/60 to-black/80 backdrop-blur-2xl border border-white/5 p-8 sm:p-10 rounded-3xl shadow-2xl flex flex-col justify-between">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What is your name?"
                    required
                    className="w-full px-4 py-3.5 text-white placeholder-gray-500 bg-white/[0.03] border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white/[0.06] transition-all duration-300 text-sm font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What is your email address?"
                    required
                    className="w-full px-4 py-3.5 text-white placeholder-gray-500 bg-white/[0.03] border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white/[0.06] transition-all duration-300 text-sm font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    className="w-full px-4 py-3.5 text-white placeholder-gray-500 bg-white/[0.03] border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 focus:bg-white/[0.06] transition-all duration-300 text-sm font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-extrabold text-sm uppercase rounded-2xl shadow-lg shadow-purple-500/15 hover:shadow-purple-500/25 transition-all duration-300 hover:scale-[1.01] cursor-pointer disabled:opacity-50"
                >
                  {loading ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: Visual Interactive Canvas */}
          <div className="lg:col-span-7 min-h-[400px] flex">
            <div className="w-full h-full bg-gradient-to-b from-gray-900/40 to-black/40 border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative flex items-center justify-center hover:cursor-grab">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;