import Hero from "./components/Hero"
import Language from "./components/Language"
import Orient from "./components/Orient"
import Project from "./components/project"

export default function Home() {
  return (
    <section>
      <Hero />
      <Orient />
      <Language />
      <Project />
    </section>
  )
}