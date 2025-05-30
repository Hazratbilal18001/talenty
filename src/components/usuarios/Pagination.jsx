import React from 'react';

export default function Pagination({ currentPage, setPage, totalPages = 10 }) {
    return (
        <div className="flex items-center justify-between p-4">
            <p className="text-sm">Vista de 7 usuarios por pagina</p>
            <div className="flex gap-2 items-center">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    className="text-gray-500 text-sm"
                >
                    ‹ Anterior
                </button>
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i + 1)}
                        className={`w-8 h-8 rounded-full text-sm ${currentPage === i + 1 ? 'bg-red-600 text-white' : 'text-gray-800'
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    className="text-gray-500 text-sm"
                >
                    Siguiente ›
                </button>
            </div>
        </div>
    );
}
