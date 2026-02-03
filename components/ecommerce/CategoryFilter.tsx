'use client';

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}) {
  return (
    <div className="flex gap-2 mb-8 flex-wrap">
      <button
        onClick={() => onSelect('all')}
        className={`px-4 py-2 rounded border transition ${
          selected === 'all'
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent'
            : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:text-purple-700'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded border transition ${
            selected === category
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent'
              : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:text-purple-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}