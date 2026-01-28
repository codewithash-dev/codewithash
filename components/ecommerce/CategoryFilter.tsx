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
        className={`px-4 py-2 rounded ${
          selected === 'all'
            ? 'bg-black text-white'
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded ${
            selected === category
              ? 'bg-black text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}