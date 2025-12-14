// App.jsx
import Header from "./components/Header";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Tips from "./components/Tips";
import "./index.css";

function App() {
    return (
        <main className="min-h-screen bg-slate-100 dark:bg-slate-900 p-6 flex flex-col items-center gap-6">
            <Header title="Compañia EcoHuerta 🌿" subtitle="Aprende manejos sostenibles sobre la huerta" />

            <Hero />


            <section className="grid md:grid gap-4 w-full max-w-5xl">
                <Card title="Tomate" description="Cultivo de clima cálido, rico en licopeno." />
                <Card title="Lechuga" description="Hortaliza de hoja que crece mejor en climas frescos." />
                <Card title="Zanahoria" description="Raíz comestible con alto contenido de betacaroteno." />
            </section>

            <Tips />

            <Counter />

            <Footer />
        </main>
    );
}

export default App