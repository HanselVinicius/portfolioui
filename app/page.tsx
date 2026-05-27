import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Container>
          <Hero/>
        </Container>
      </main>
    </>
  );
}