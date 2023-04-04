import React from "react";
import Star from "@/svg/Star";

const Modal = ({ gameOver, setGameOver, moves, handleNewGame }) => {
  return (
    <div
      className={`fixed w-full flex  justify-center  text-white z-10  h-fit py-12 text-center text-2xl duration-500 ${
        gameOver ? "top-0 rounded-b-2xl bg-gray-900 opacity-95" : "top-[-100%]"
      } `}
    >
      <div className="w-[350px] flex flex-col gap-6 items-center">
        <Star />
        <button
          className="text-white font-bold absolute right-0 top-0 mr-3 hover:text-yellow-500 text-2xl"
          onClick={() => setGameOver(false)}
        >
          &times;
        </button>
        <h1 className="text-white uppercase text-3xl font-bold tracking-wider">
          ! Ganaste ¡
        </h1>
        <div className="flex justify-between gap-10">
          <p className="text-white ">
            Movimientos: <span className="text-white">{moves}</span>
          </p>
        </div>
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 transition duration-500 ease-in-out  font-semibold text-white rounded-md px-5 py-1 "
          onClick={handleNewGame}
        >
          Nuevo Juego
        </button>
      </div>
    </div>
  );
};

export default Modal;
