import { useState } from 'react';

export default function Home() {
    const [number, setNumber] = useState(null);

    const handleClick = async () => {
        const response = await fetch('/api/get-random-number');
        const data = await response.json();
        setNumber(data.number);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-2xl mb-4">ランダムな数字を生成</h1>
                <button 
                    onClick={handleClick} 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                >
                    Pythonを実行
                </button>
                {number !== null && <h2 className="text-xl mt-4">生成された数字: {number}</h2>}
            </div>
        </div>
    );
}