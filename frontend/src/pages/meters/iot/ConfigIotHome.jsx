import { NavLink, Outlet } from 'react-router-dom';

const ConfigIotHome = () => {
  return (
    <div>
      <div className='w-full flex items-center justify-center gap-4 p-4'>
        <div className='flex items-center gap-4'>
          <NavLink
            to='/client/config/iot/fans'
            className={({ isActive }) =>
              isActive
                ? 'bg-gray-300 p-2 px-8 font-bold text-green-600'
                : 'bg-gray-300 p-2 px-8 font-bold'
            }
          >
            Fans
          </NavLink>
          <NavLink
            to='/client/config/iot/lights'
            className={({ isActive }) =>
              isActive
                ? 'bg-gray-300 p-2 px-8 font-bold text-green-600 shadow'
                : 'bg-gray-300 p-2 px-8 font-bold'
            }
          >
            Lights
          </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  );
};
export default ConfigIotHome;
