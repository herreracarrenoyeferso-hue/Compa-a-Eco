export default function TipsList() {
  const tips = [
    "Riega las plantas en horas de poco sol para aprovechar mejor el agua.",
    "Aprovecha restos orgánicos para crear abono natural y mejorar la tierra.",
    "Prefiere especies propias de tu región, ya que requieren menos cuidado.",
    "Alterna los tipos de cultivo para evitar el desgaste del suelo.",
    "Siembra flores alrededor para atraer insectos beneficiosos."
  ];

  return (
    <section className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md w-full max-w-3xl">
      <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-4 text-center">
        🌱 Recomendaciones para una Huerta Ecológica
      </h2>

      <ul className="list-disc list-inside text-green-700 dark:text-green-300 leading-relaxed">

        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </section>
  );
}
