import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-2xl z-50 border-b border-gray-100 transform transition-transform duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-3xl font-[600] tracking-tight text-blue-500">
            PropertAI
          </span>
        </div>
        <Link
          href="/signup"
          className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium"
        >
          Tester l'outil
        </Link>
      </div>
    </header>
  );
}
