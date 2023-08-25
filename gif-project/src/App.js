import './App.css';
import Random from './conponents/Random';
import Tag from './conponents/Tag';

function App() {
  return (
    <div className="background w-full h-screen flex flex-col relative ">
      <h1 className='bg-white  mx-5 my-5 text-4xl 
      rounded-xl text-center py-2 font-sans font-bold'>Random gif</h1>
      <div className='flex items-center justify-center gap-y-2 flex-col'>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
