import { NavLink, Outlet } from 'react-router-dom';

const IotHome = () => {
  return (
    <>
      <div className='flex justify-center gap-4'>
        <NavLink
          to='/client/devices/iot/fans'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 block p-2 px-4 m-0 font-bold text-green-600 shadow'
              : 'bg-gray-300 block p-2 px-4 m-0 font-bold'
          }
        >
          Fans
        </NavLink>
        <NavLink
          to='/client/devices/iot/lights'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 block p-2 px-4 m-0 font-bold text-green-600 shadow'
              : 'bg-gray-300 block p-2 px-4 m-0 font-bold'
          }
        >
          Lights
        </NavLink>
      </div>

      <Outlet />
    </>
  );
};
export default IotHome;
