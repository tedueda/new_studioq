import React from 'react';
import { Cherry, ArrowRight, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Cherry className="w-12 h-12 text-pink-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl mb-6 tracking-tight">
            ようこそ
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            モダンなウェブアプリケーションの開発をはじめましょう。
            React、TypeScript、Tailwind CSSですべてが揃っています。
          </p>
          <div className="flex gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors">
              始めましょう
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </button>
            <a
              href="https://github.com"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              <Github className="mr-2 -ml-1 w-5 h-5" />
              ソースを見る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
