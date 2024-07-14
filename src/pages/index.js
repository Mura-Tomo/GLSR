import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { useState } from 'react';

export default function Home() {
    const [data, setData] = useState(null);
    const [showButtons, setShowButtons] = useState(false);
    const [response, setResponse] = useState('');
    const [showOkButton, setShowOkButton] = useState(false);

    const [currentLocation, setCurrentLocation] = useState('');
    const [transportationMode, setTransportationMode] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const [latestWakeupTime, setLatestWakeupTime] = useState('');
    const [earliestEventTime, setEarliestEventTime] = useState('');
    const [notificationTime, setNotificationTime] = useState('')

    // const handleClick = async () => {
    //     try {
    //       const response = await fetch('/api/get-random-number');
    //       const data = await response.json();
    //       setData(data);
    //       setShowButtons(true);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
    const handleClick = async () => {
        try {
            const response = await fetch('/api/get-random-number', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    current_location: currentLocation,
                    transportation_mode: transportationMode,
                    preparation_time: Number(preparationTime),
                    latest_wakeup_time: latestWakeupTime,
                    earliest_event_time: earliestEventTime,
                }),
            });
            const data = await response.json();
            setData(data);
            setShowButtons(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleYesClick = () => {
        setResponse(`${data.alarm_time}にアラーム設定しました。`);
        setShowButtons(false); // Hide buttons after a response
        setShowOkButton(true);
    };

    const handleNoClick = () => {
        setResponse('アラームを設定しませんでした');
        setShowButtons(false); // Hide buttons after a response
        setShowOkButton(true);
    };

    const handleOkClick = () => {
        setResponse('');
        setData(null); // Reset data
        setShowOkButton(false); // Hide OK button
    };

    return (
        <>
        <div className='container mt-3'>   
                <button onClick={handleClick} className='btn btn-danger' >
                    Python実行
                </button>
                {data  && (
                    <div className="border-8 border-indigo-600 text-xl mt-3 text-center">
                    <p>＜明日の最も早い予定＞</p>
                    <p>イベント名: {data.event_name}</p>
                    <p>開始時間: {data.start_time}</p>
                    <p>場所: {data.destination} （{data.transportation_mode}で{data.travel_time}分）</p>
                    <p>天気: {data.weather_forecast}</p>
                    <p>アラーム時間: {data.alarm_time}</p>
                    <p>この時間にアラームを設定しますか？</p>
                    </div>
                )}
                {showButtons && (
                    <div className="mt-4 text-center">
                        <button onClick={handleYesClick} className="btn btn-success me-2">はい</button>
                        <button onClick={handleNoClick} className="btn btn-danger">いいえ</button>
                    </div>
                )}
                {response && (
                    <div className="text-xl mt-4 text-center">
                        <p>{response}</p>
                    </div>
                )}
                {showOkButton && (
                    <div className="mt-3 text-center">
                        <button onClick={handleOkClick} className="btn btn-primary">OK</button>
                    </div>
                )}
                <div className='mb-3 mt-5'>
                    <label htmlFor='name' className='form-label'>
                        <div className="p-0 mb-2 bg-white text-dark">
                        現在地
                        </div>
                    </label>
                    <input 
                        type='text' 
                        className='form-control' 
                        id='currentLocation' 
                        value={currentLocation}
                        onChange={(e) => setCurrentLocation(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='transportationMode' className='form-label'>
                        <div className="p-0 mb-2 bg-white text-dark">移動手段</div>
                    </label>
                    <select 
                        className='form-select' 
                        id='transportationMode'
                        value={transportationMode}
                        onChange={(e) => setTransportationMode(e.target.value)}
                    >
                        <option value='walking'>徒歩</option>
                        <option value='driving'>車</option>
                        <option value='cycling'>自転車</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor='message' className='form-label'>
                        <div className="p-0 mb-2 bg-white text-dark">
                        支度時間
                        </div>
                    </label>
                    <input 
                        type='number' 
                        className='form-control' 
                        id='preparationTime' 
                        value={preparationTime}
                        onChange={(e) => setPreparationTime(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='message' className='form-label'>
                        <div className="p-0 mb-2 bg-white text-dark">
                        最遅起床時刻
                        </div>
                    </label>
                    <input 
                        type='text' 
                        className='form-control' 
                        id='latestWakeupTime' 
                        value={latestWakeupTime}
                        onChange={(e) => setLatestWakeupTime(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='message' className='form-label'>
                        <div className="p-0 mb-2 bg-white text-dark">
                        最早イベント時刻
                        </div>
                    </label>
                    <input 
                        type='text' 
                        className='form-control' 
                        id='earliestEventTime' 
                        value={earliestEventTime}
                        onChange={(e) => setEarliestEventTime(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='message' className='form-label'>
                        <div className="p-0 mb-2 bg-white text-dark">
                        通知時間
                        </div>
                    </label>
                    <input 
                        type='text' 
                        className='form-control' 
                        id='notificationTime' 
                        value={notificationTime}
                        onChange={(e) => setNotificationTime(e.target.value)}
                    />
                </div>
        </div>
        </>
    )
}
