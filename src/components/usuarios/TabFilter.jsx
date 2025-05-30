import React from 'react';
import { Lock, Unlock } from 'lucide-react'; // optional icons

const tabs = ["Todos", "Activos", "Gratis", "Premium", "Eliminados", "Bloqueados"];

export default function TabFilter({ activeTab, setActiveTab }) {
    return (
        <div className="flex justify-between items-center px-4 py-6 border-b">
            {/* Tabs on the left */}
            <div className="flex gap-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-sm font-medium pb-1 border-b-2 transition duration-300 ${activeTab === tab
                                ? 'text-red-600 border-red-600'
                                : 'text-[#8E96A8] border-transparent'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Action buttons on the right */}
            <div className="flex gap-4">
                <button className="flex items-center gap-1 text-sm text-[#8E96A8] hover:text-red-600 transition">
                    <Lock className="h-4 w-4" />
                    Bloquear Usuario
                </button>
                <button className="flex items-center gap-1 text-sm text-[#8E96A8] hover:text-green-600 transition">
                    <Unlock className="h-4 w-4" />
                    Activar Usuario
                </button>
            </div>
        </div>
    );
}
