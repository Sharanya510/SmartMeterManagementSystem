import { useEffect, useState } from 'react';
import { findAllLights } from '../../../services/deviceApi';

const LightMonitor = () => {
  const [lights, setLights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllMeters = async () => {
      try {
        const res = await findAllLights();

        if (res.status === 200) {
          console.log(res);
          setLights(res.data.user);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getAllMeters();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='p-4'>
      <table className='table-auto m-0'>
        <thead>
          <tr>
            <th className=''></th>
            {lights.map((light) => (
              <th
                className='border-8 border-white p-4 bg-gray-100'
                key={light._id}
              >
                {light.lightName}
              </th>
            ))}
          </tr>

          <tr>
            <th className=''></th>
            {lights.map((light) => (
              <th className='border-4 border-white p-4' key={light._id}>
                <img
                  src='/imgs/electry-meter.png'
                  className='w-16 h-16 m-auto'
                  alt=''
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=''>
          <tr className='text-center font-bold'>
            <td className='text-left text-lg font-bold p-2 my-2'>
              Work status{' '}
            </td>
            {lights.map((light) => (
              <td
                className={
                  light.start
                    ? 'p-2 my-2 text-green-500'
                    : 'p-2 my-2 text-gray-600'
                }
                key={light._id}
              >
                {light.start ? 'Working' : 'Not working'}
              </td>
            ))}
          </tr>
          <tr className='text-center font-bold'>
            <td className='text-left text-lg font-bold p-2 my-2'>
              Electricity Capacity{' '}
            </td>
            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '70%' : ''}
              </td>
            ))}
          </tr>
          <tr className='text-center font-bold'>
            <td className='text-left text-lg font-bold p-2 my-2'>Voltage </td>
            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '200V' : ''}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg font-bold p-2 my-2'>Current </td>

            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '10A' : ''}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>Today Usage </td>

            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '60KWh' : ''}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>Last 24hr usage </td>
            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '10KWh' : ''}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>Estimated week's usage </td>

            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '10KWh' : ''}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>Estimated Months's usage </td>
            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '10KWh' : ''}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>Estimated Year's usage </td>
            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '10KWh' : ''}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default LightMonitor;
