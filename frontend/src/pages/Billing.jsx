import { useEffect, useState } from 'react';
import {
  findAllDevices,
  findAllFans,
  findAllLights,
  payment
} from '../services/deviceApi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Billing = () => {
  const [allDevices, setAllDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllDevices = async () => {
      const metersRes = await findAllDevices();
      const meters = metersRes.data.meters;
      // console.log(metersRes.data.meters);
      const fansRes = await findAllFans();
      const fans = fansRes.data.user;
      // console.log(fansRes.data.user);
      const lightsRes = await findAllLights();
      const lights = lightsRes.data.user;
      // console.log(lightsRes.data.user);
      setAllDevices([...meters, ...lights, ...fans]);
      setLoading(false);
    };
    fetchAllDevices();
  }, []);
  const navigate = useNavigate();

  if (loading) {
    return <p>Loading...please wait!</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await payment();

      if (res.data.status === '200') {
        navigate('/payment');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='p-4'>
      <div><h1 className='text-3xl my-4'>Billing Information</h1></div>

      <table className='table-auto m-0 my-4 w-3/4 border-collapse'>
        <thead>
          <tr className='text-left'>
            <th className='p-4 bg-gray-300 border border-black'>Device name</th>
            <th className='p-4 bg-gray-300 border border-black'>
              Units consumed
            </th>
            <th className='p-4 bg-gray-300 border border-black'>
              Cost per Unit
            </th>
            <th className='p-4 bg-gray-300 border border-black'>Total Cost</th>
            {/* <th className='p-4 bg-gray-300 border border-black'>Density</th> */}
          </tr>
        </thead>
        <tbody className='divide-y divide-y-zinc-300'>
          {allDevices.map((device) => (
            <tr>
              <td className='p-2 text-center'>
                {device.electricMeterName || device.fanName || device.lightName}
              </td>
              <td className='p-2 text-center'>{device.totalSeconds || 200}</td>
              <td className='p-2 text-center'>0.25</td>
              <td className='p-2 text-center'>
                {device.unpaidSeconds * 0.25 || 200 * 0.25}
              </td>
              {/* <td className='p-2 text-center'>0.00</td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <button className='bg-green-600 mt-4 inline-block w-fit text-white px-8 rounded-md py-2' onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Billing;
