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
    <div className="w-screen 2xl:mt-20 h-screen flex items-center flex-col">
      <h2 className="font-semibold text-[40px]">Contact</h2>
      <form
        // Cambia la URL aquí si es necesario
        action="https://getform.io/f/pbgxvzma" // Aquí debes usar la URL de tu formulario de Getform
        method="POST"
        className="flex flex-col items-center justify-center pt-10"
        onSubmit={handleConfetti}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-slate-800 mt-6 2xl:w-[400px] sm:w-[300px]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-slate-800 mt-6 2xl:w-[400px] sm:w-[300px]"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border border-slate-800 mt-6 2xl:w-[400px] sm:w-[300px]"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="border border-slate-800 mt-8 2xl:w-[300px] sm:w-[120px] p-2 hover:bg-slate-800 hover:text-white transition duration-300 ease-in-out rounded-md"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;

