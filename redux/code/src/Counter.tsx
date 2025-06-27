import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const { counter } = useSelector( ( state ) => state.counter );
    console.log(counter)

    const handlerCounterTncrement = () =>
    {
        dispatch(increment())
    }

    const handlerCounterDecrement = () =>
    {
        dispatch(decrement())
    }

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Counter: {counter}</h2>
      <div className="flex gap-4">
        <button
          onClick={ handlerCounterDecrement}
          className="px-4 py-2 text-xl font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
        >
          -
        </button> 
        <button
          onClick={handlerCounterTncrement}
          className="px-4 py-2 text-xl font-bold text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
