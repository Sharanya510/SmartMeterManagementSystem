import { NavLink } from 'react-router-dom';

const ControlTopBar = () => {
  return (
    <div className='w-full flex items-center justify-center gap-4 p-4'>
      <div className='flex items-center gap-4'>
        <NavLink
          to='/client/config/iot'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 p-2 px-8 font-bold text-green-600'
              : 'bg-gray-300 p-2 px-8 font-bold'
          }
        >
          IoT
        </NavLink>
        <NavLink
          to='/client/config/meters'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 p-2 px-8 font-bold text-green-600 shadow'
              : 'bg-gray-300 p-2 px-8 font-bold'
          }
        >
          Meter
        </NavLink>
      </div>
    </div>
  );
};
export default ControlTopBar;
