// Card.jsx
export default function Card({ title, description, children }) {
  return (
    <article className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow hover:shadow-lg transition w-full">
      <h2 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-400">
        {title}
      </h2>

      <p className="text-gray-700 dark:text-gray-300 mb-2">
        {description}
      </p>

      <div>{children}</div>
    </article>

  );
}