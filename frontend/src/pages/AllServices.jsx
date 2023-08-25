import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { startRefresh, stopRefresh, useApp } from '../context/AppContext';
import { getAllService, updateService } from '../services/deviceApi';
import '../styles/device.css';

export const AllServices = () => {
  const { dispatch } = useApp();
  const { state } = useApp();
  const { load } = state;
  const [meters, setMeters] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // const updateStatus = async (event,id) => {

  const updateStatus = (event, id) => {
    event.preventDefault();
    console.log(id);
    dispatch(startRefresh());
    try {
      const res = updateService(id);
      window.location.reload();

      console.log(res.data.status);

      if (res.data.status === '200') {
        console.log('ya');

        navigate('/allservices');

        dispatch(stopRefresh());
      }
    } catch (error) {
      console.log(error);
      dispatch(stopRefresh());
    }
  };

  useEffect(() => {
    const getAllMeters = async () => {
      try {
        const res = await getAllService();

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
    <div className='sjsu w-full'>
      <div className='p-4'>
        <p className='font-bold bg-gray-100 rounded-sm p-1 px-4 w-fit mt-8 mb-4 shadow-3'>
          Services
        </p>

        <table className='table-auto w-full bg-gray-100 shadow-3'>
          <thead className='border border-black border-collapse'>
            <tr className='text-center'>
              <th className='p-2 border border-black'>Service ID</th>
              <th className='p-2 border border-black'>Service Type</th>
              <th className='p-2 border border-black'>Service Description</th>
              <th className='p-2 border border-black'>UserID</th>
              <th className='p-2 border border-black'>Status</th>
            </tr>
          </thead>
          <tbody className='font-bold'>
            {meters.map((meter) => (
              <tr className='text-center' key={meter._id}>
                <td className='p-1 border border-black uppercase'>
                  {meter._id}
                </td>
                <td className='p-1 border border-black uppercase'>
                  {meter.serviceType}
                </td>
                <td className='p-1 border border-black uppercase'>
                  {meter.serviceDescription}
                </td>
                <td className='p-1 border border-black uppercase'>
                  {meter.userID}
                </td>
                <td className='p-1 border border-black uppercase'>
                  {meter.status}
                </td>

                <td className='p-1 border border-black'>
                  {meter.status === 'In progress' ? (
                    <div>
                      <button
                        className='p-2 px-8 bg-green-600 text-white'
                        onClick={(event) => updateStatus(event, meter._id)}
                      >
                        resolve
                      </button>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Outlet />
      </div>
    </div>
  );
};
