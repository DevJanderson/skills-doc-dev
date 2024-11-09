import Link from "next/link";

export default function Linktree() {
  // change the variable here
  // const links = [
  //   {
  //     color: "bg-slate-800",
  //     text: "GitHub  ☕️",
  //     link: "https://github.com/DevJanderson",
  //   },
  // ];

  return (
    <div className="w-full h-screen bg-[#0C151D] rounded-md pt-8 flex justify-center items-center">
      <div className="flex flex-col w-full max-w-xl h-full p-8 ">
        <div className="flex gap-4 items-center">
          <img
            src="https://github.com/DevJanderson.png"
            alt="Janderson github"
            className=" rounded-full object-cover object-center w-24 h-24 border-4 border-[#14A1F0]"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white">Janderson Lira</h1>
            <p className="text-sm text-gray-500 mt-1">+4 anos de experiência</p>
          </div>
        </div>
        <div>
          <Link href="https://github.com/DevJanderson" target="_blank">
            <div className="bg-[#171F26] border-2 border-[#FF5500] flex flex-col   rounded-2xl gap-1 py-4 px-6 mt-8">
              <h1 className="text-2xl font-bold text-white">GitHub</h1>
              <p className="text-gray-500">
                Aqui você pode encontrar todos os meus projetos.
              </p>
            </div>
          </Link>
        </div>
        <p className="text-gray-300 mt-8">
          Sou engenheiro de software e atualmente trabalho como desenvolvedor
          freelance full-stack iOS e Android. Além disso, crio conteúdo de
          treinamento sobre programação de redes. Aqui você encontra todos os
          meus links de interesse. Bem-vindo!ikjdfksdf
        </p>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col gap-10">
  {links.map(({ text, color, link }, index) => {
    return (
      <a href={link} key={index} target="_blank">
        <div
          className={`w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 rounded-md`}
        >
          {text}
        </div>
      </a>
    );
  })}
</div>; */
}

