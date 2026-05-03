export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="max-w-3xl mx-auto mt-6">
      <input
        type="text"
        value={searchTerm}    
        onChange={onSearchChange}
        placeholder="Search Project..."
        className="w-full px-4 rounded-lg border border-rose-200 focus:outline-none bg-rose-50 focus:ring-2 focus:ring-rose-300 py-2"
      />
    </div>
  );
}