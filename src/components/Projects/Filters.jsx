export default function Filters({ tags, active, setActive }) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {['All', ...tags].map(tag => (
        <button
          key={tag}
          onClick={() => setActive(tag)}
          className={`text-sm px-3 py-1.5 rounded-xl border transition-colors duration-150 ${
            active === tag
              ? 'bg-neural-500 border-neural-500 text-white'
              : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-neural-400 dark:hover:border-neural-400 hover:text-neural-600 dark:hover:text-neural-400'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
