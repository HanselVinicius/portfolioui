import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { ProjectCard } from "../components/ProjectCard";


export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="text-cyan-400 font-medium mb-4">
              Projetos
            </p>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Alguns projetos em que trabalhei.
            </h1>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              Experiências profissionais e acadêmicas envolvendo
              desenvolvimento web, sistemas corporativos e análise de dados.
            </p>
          </div>

          <div className="mt-20">
            <ProjectCard
              title="Carefy"
              description="
                Plataforma de gestão e monitoramento de pacientes
                internados para auditoria de operadoras de saúde,
                com foco na redução de custos e melhoria da qualidade
                assistencial.
              "
              technologies={[
                "Java",
                "Spring Boot",
                "Kafka",
                "PostgreSQL",
              ]}
              href="https://carefy.com.br/"
            />

            <ProjectCard
              title="E-Prátika"
              description="
                Sistema eletrônico de acompanhamento das aulas
                práticas de direção veicular, permitindo registro,
                transmissão e avaliação das atividades realizadas
                pelos instrutores.
              "
              technologies={[
                "Java",
                "Spring",
                "Angular",
                "MySQL",
              ]}
              href="https://e-pratika.com.br/site/"
            />

            <ProjectCard
              title="ClusterApp"
              description="
                Aplicação web desenvolvida durante minha iniciação
                científica para análise de agrupamentos de amostras
                biológicas utilizando diferentes algoritmos de clustering.
              "
              technologies={[
                "Python",
                "Flask",
                "Bootstrap",
                "Machine Learning",
              ]}
              href="https://www.biorxiv.org/content/10.1101/2025.02.12.637912v1"
            />
          </div>
        </Container>
      </main>
    </>
  );
}