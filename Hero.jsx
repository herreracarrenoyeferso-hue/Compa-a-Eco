export default function Hero() {
  return (
    <section className="bg-green-300 dark:bg-green-800 text-center p-10 rounded-2xl shadow-md w-full max-w-5xl">
      <h1 className="text-4xl font-bold mb-4 text-green-900 dark:text-green-100">
        ¡Bienvenido a Compañia EcoHuerta 🌱!
      </h1>

      <p className="text-lg text-green-800 dark:text-green-200 mb-6">
        Conoce métodos responsables para mejorar y mantener tu huerta.
      </p>

      <button className="bg-green-700 dark:bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-800">
        Comienza ahora
      </button>
    </section>

  );
}
