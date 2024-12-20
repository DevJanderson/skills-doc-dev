export default function Linktree() {
  // change the variable here
  const links = [
    {
      color: "bg-slate-800",
      text: "GitHub  ☕️",
      link: "https://github.com/DevJanderson",
    },
  ];

  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="max-w-2xl mx-auto flex flex-col gap-5">
        <div className="h-48 w-48 mx-auto">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src="https://github.com/DevJanderson.png"
              alt="Janderson github"
              className=" rounded-full object-cover object-center"
            />
          </div>
        </div>
        <div className="text-center p-3 text-black max-w-[380px] mx-auto ">
          <h1 className="text-4xl font-bold">Janderson Lira</h1>
          <p className="text-sm text-gray-600 mt-3">
            Sou um desenvolvedor fullstack, adoro aprender coisas novas e
            construir
          </p>
        </div>
        <div className="flex flex-col gap-10">
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
        </div>
      </div>
    </div>
  );
}
