const Animatedcards = () => {
  return (
    <>
      <main className="bg-slate-900 text-white font-inter antialiased relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          {/* Animated Gradient Border */}
          <section className="flex justify-center">
            <div className=" animate-border  border border-transparent">
              <div className="p-5">
                <div className="flex justify-between items-center"></div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="absolute left-6 right-6 md:left-12 md:right-auto bottom-4 md:bottom-8 text-center md:text-left">
          <a
            className="text-xs text-slate-500 hover:underline"
            href="https://cruip.com"
          >
            &copy; Cruip - Tailwind CSS templates
          </a>
        </footer>

        {/* Banner */}
        <div className="fixed bottom-0 right-0 w-full md:bottom-6 md:right-12 md:w-auto z-50">
          <div className="bg-slate-800 text-sm p-3 md:rounded shadow flex justify-between">
            <div className="text-slate-500 inline-flex">
              <a
                className="font-medium hover:underline text-slate-300"
                target="_blank"
                rel="noreferrer"
                href="https://cruip.com/animated-gradient-borders-with-tailwind-css/"
              >
                Read Tutorial
              </a>
              <span className="italic px-1.5">or</span>
              <a
                className="font-medium hover:underline text-indigo-500 flex items-center"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/cruip/cruip-tutorials/blob/main/animated-gradient-border/index.html"
              >
                <span>Download</span>
                <svg
                  className="fill-indigo-400 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                >
                  <path d="m1.649 8.514-.91-.915 5.514-5.523H2.027l.01-1.258h6.388v6.394H7.158l.01-4.226z" />
                </svg>
              </a>
            </div>
            <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-slate-700">
              <span className="sr-only">Close</span>
              <svg
                className="w-4 h-4 shrink-0 fill-current"
                viewBox="0 0 16 16"
              >
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
export default Animatedcards;
