import React from 'react';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';


const Random = () => {
    const { gif, loading, getdata } = useGif();
    function clickhandler() {
        getdata();
    }
    return (
        <div className='w-10/12  bg-green-500 border-black flex flex-col items-center'>
            <h1 className='text-center underline text-2xl my-4'>A Random Gif</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} alt="" width={450} />)
            }
            <button onClick={clickhandler} className='my-4 text-xl bg-yellow-500 px-3 py-3 w-9/12 rounded-md'>Generate</button>
        </div>
    )
}

export default Random;