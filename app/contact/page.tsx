import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";


export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="py-32">
        <Container>
          <div className="max-w-2xl">
            <p className="text-cyan-400 font-medium mb-4">
              Contato
            </p>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Vamos conversar.
            </h1>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              Estou disponível para conversar sobre
              backend, microsserviços,
              sistemas distribuídos e engenharia de software.
            </p>

            <div className="mt-16 flex flex-col gap-8">
              <a
                href="mailto:viniciushanseldev@gmail.com"
                className="
                  group
                  w-fit
                "
              >
                <p className="text-sm text-zinc-500 mb-2">
                  Email
                </p>

                <p
                  className="
                    text-2xl
                    text-zinc-200
                    transition-colors
                    group-hover:text-white
                  "
                >
                  viniciushanseldev@gmail.com
                </p>

                <div
                  className="
                    mt-2
                    h-px
                    w-0
                    bg-cyan-400
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>

              <a
                href="https://www.linkedin.com/in/vinicius-hansel-figueiredo-da-costa-b90b1b220/"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  w-fit
                "
              >
                <p className="text-sm text-zinc-500 mb-2">
                  LinkedIn
                </p>

                <p
                  className="
                    text-2xl
                    text-zinc-200
                    transition-colors
                    group-hover:text-white
                  "
                >
                  https://www.linkedin.com/in/vinicius-hansel-figueiredo-da-costa-b90b1b220/
                </p>

                <div
                  className="
                    mt-2
                    h-px
                    w-0
                    bg-cyan-400
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}