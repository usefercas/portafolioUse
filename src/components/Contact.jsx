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
    <div
      className="w-screen min-h-screen flex items-center flex-col px-4"
      style={{
        backgroundColor: "#fdf6e3",
        border: "1px solid #8B4513", // Borde marrón fino
      }}
    >
      <h2 className="font-semibold text-[40px] text-[#8B4513] mt-10">Contacto</h2>

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
          className="border border-[#8B4513] mt-6 w-full max-w-[400px] px-4 py-2 rounded bg-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-[#8B4513] mt-6 w-full max-w-[400px] px-4 py-2 rounded bg-white"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border border-[#8B4513] mt-6 w-full max-w-[400px] px-4 py-2 rounded bg-white"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="mt-8 w-full max-w-[300px] p-2 rounded-md transition duration-300 ease-in-out"
          style={{
            backgroundColor: "#8B4513",
            color: "#fff",
            border: "1px solid #8B4513", // Borde marrón fino
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
