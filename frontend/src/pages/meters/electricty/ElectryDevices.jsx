import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { useApp } from '../../../context/AppContext';
import { findAllDevices } from '../../../services/deviceApi';

const ElectryDevices = () => {
  const { state } = useApp();
  const { load } = state;
  const [meters, setMeters] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const viewDeviceDetails = (id) => {
    navigate(`/client/devices/meters/electricity/view/${id}`);
  };

  const updateDeviceDetails = (id) => {
    navigate(`/client/devices/meters/electricity/update/${id}`);
  };

  const deleteDeviceDetails = (id) => {
    navigate(`/client/devices/meters/electricity/delete/${id}`);
  };

  useEffect(() => {
    const getAllMeters = async () => {
      try {
        const res = await findAllDevices();

        if (res.status === 200) {
          setMeters(res.data.meters);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getAllMeters();
  }, [load]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='p-4'>
      <p className='font-bold bg-gray-200 rounded-sm p-1 px-4 w-fit mt-8 mb-4'>
        Device List
      </p>

      <table className='table-auto w-full bg-gray-300'>
        <thead className='border border-black border-collapse'>
          <tr className='text-center'>
            <th className='p-2 border border-black'>Device ID</th>
            <th className='p-2 border border-black'>Device Name</th>
            <th className='p-2 border border-black'>View</th>
            <th className='p-2 border border-black'>Update</th>
            <th className='p-2 border border-black'>Delete</th>
          </tr>
        </thead>
        <tbody className='font-bold'>
          {meters.map((meter) => (
            <tr className='text-center' key={meter._id}>
              <td className='p-1 border border-black '>
                <div className='flex items-center justify-center gap-2'>
                  <img
                    src='/imgs/electry-meter.png'
                    className='w-6 h-6'
                    alt=''
                  />{' '}
                  {meter.electricMeterId}
                </div>
              </td>
              <td className='p-1 border border-black uppercase'>
                {meter.electricMeterName}
              </td>
              <td className='p-1 border border-black'>
                <button
                  className='p-2 px-8 bg-green-600 text-white'
                  onClick={() => viewDeviceDetails(meter._id)}
                >
                  View
                </button>
              </td>
              <td className='p-1 border border-black'>
                <button
                  className='p-2 px-8 bg-blue-600 text-white'
                  onClick={() => updateDeviceDetails(meter._id)}
                >
                  Update
                </button>
              </td>
              <td className='p-1 border border-black'>
                <button
                  className='p-2 px-8 bg-red-600 text-white'
                  onClick={() => deleteDeviceDetails(meter._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* add device */}
      <Link
        to='/client/devices/meters/electricity/add'
        className='flex gap-4 items-center my-4'
      >
        <p className='font-bold bg-gray-200 rounded-sm p-1 px-4 w-fit'>
          Add a device
        </p>

        <button className='bg-green-600 text-4xl p-3  flex justify-center rounded-full items-center text-white font-bold'>
          <FaPlus />
        </button>
      </Link>

      <Outlet />
    </div>
  );
};
export default ElectryDevices;
