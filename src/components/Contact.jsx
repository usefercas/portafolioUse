import React from "react";
import confetti from "canvas-confetti";

const Contact = () => {
  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="w-screen min-h-screen mt-20 flex items-center flex-col px-4">
      <h2 className="font-semibold text-[40px]">Contact</h2>
      <form
        action="https://getform.io/f/pbgxvzma"
        method="POST"
        className="flex flex-col items-center justify-center pt-10 w-full"
        onSubmit={handleConfetti}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-slate-800 mt-6 w-full max-w-[400px] px-4 py-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-slate-800 mt-6 w-full max-w-[400px] px-4 py-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border border-slate-800 mt-6 w-full max-w-[400px] px-4 py-2 rounded"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="border border-slate-800 mt-8 w-full max-w-[300px] p-2 hover:bg-slate-800 hover:text-white transition duration-300 ease-in-out rounded-md"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
