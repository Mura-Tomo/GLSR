import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { useState } from 'react';

export default function Home() {
    const [number, setNumber] = useState(null);

    const handleClick = async () => {
        const response = await fetch('/api/get-random-number');
        const data = await response.json();
        setNumber(data.number);
    };

    return (
        <>
        <div className='container mt-3'>   
                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>
                        <div className="p-0 mb-2 bg-white text-dark">
                        現在地
                        </div>
                    </label>
                    <input type='text' className='form-control' id='name'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='time' className='form-label'>
                        <div className="p-0 mb-2 bg-white text-dark">
                            移動手段
                        </div>
                    </label>
                    <select name='time' className='form-select' id='time'>
                        <option value='9:00'>walking</option>
                        <option value='9:15'>driving</option>
                        <option value='9:30'>cycling</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor='message' className='form-label'>
                        <div className="p-0 mb-2 bg-white text-dark">
                        支度時間
                        </div>
                    </label>
                    <input name='text' className='form-control' id='message'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='message' className='form-label'>
                        <div className="p-0 mb-2 bg-white text-dark">
                        最遅起床時刻
                        </div>
                    </label>
                    <input name='text' className='form-control' id='message'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='message' className='form-label'>
                        <div className="p-0 mb-2 bg-white text-dark">
                        最早イベント時刻
                        </div>
                    </label>
                    <input name='text' className='form-control' id='message'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='message' className='form-label'>
                        <div className="p-0 mb-2 bg-white text-dark">
                        通知時間
                        </div>
                    </label>
                    <input name='text' className='form-control' id='message'/>
                </div>
                <button onClick={handleClick} className='btn btn-danger' >
                    Python実行
                </button>
                {number !== null && <h2 className="text-xl mt-4">生成された数字: {number}</h2>}
        </div>
        </>
    )
}
