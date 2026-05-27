export function Hero() {
  return (
    <section className="py-32">
      <p className="text-cyan-400 font-medium mb-4">
        Olá, eu sou
      </p>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
        Vinicius Hansel
      </h1>

      <p className="mt-8 text-zinc-400 text-lg max-w-2xl leading-relaxed">
        Desenvolvedor focado em backend,
        sistemas distribuídos, microsserviços
        e engenharia de software.
      </p>

      <div className="mt-10 flex items-center gap-4">
        <a
          href="#projects"
          className="
            bg-zinc-100
            text-zinc-950
            px-5
            py-3
            rounded-xl
            font-medium
            hover:opacity-90
            transition
          "
        >
          Ver projetos
        </a>

        <a
          href="https://github.com/HanselVinicius"
          className="
            border
            border-zinc-800
            px-5
            py-3
            rounded-xl
            text-zinc-300
            hover:bg-zinc-900
            transition
          "
        >
          GitHub
        </a>
      </div>
    </section>
  );
}