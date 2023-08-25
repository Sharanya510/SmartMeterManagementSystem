import { useEffect, useState } from 'react';
import { findAllFans } from '../../../services/deviceApi';

const FanMonitor = () => {
  const [fans, setFans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllMeters = async () => {
      try {
        const res = await findAllFans();

        if (res.status === 200) {
          setFans(res.data.user);
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
            {fans.map((fan) => (
              <th
                className='border-8 border-white p-4 bg-gray-100'
                key={fan._id}
              >
                {fan.fanName}
              </th>
            ))}
          </tr>

          <tr>
            <th className=''></th>
            {fans.map((fan) => (
              <th className='border-4 border-white p-4' key={fan._id}>
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
            {fans.map((fan) => (
              <td
                className={
                  fan.start
                    ? 'p-2 my-2 text-green-500'
                    : 'p-2 my-2 text-gray-600'
                }
                key={fan._id}
              >
                {fan.start ? 'Working' : 'Not working'}
              </td>
            ))}
          </tr>
          <tr className='text-center font-bold'>
            <td className='text-left text-lg font-bold p-2 my-2'>
              Electricity Capacity{' '}
            </td>
            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? <p>70%</p> : <p className='text-gray-600'>70%</p>}
              </td>
            ))}
          </tr>
          <tr className='text-center font-bold'>
            <td className='text-left text-lg font-bold p-2 my-2'>Voltage </td>
            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? (
                  <p>200V</p>
                ) : (
                  <p className='text-gray-600'>200V</p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg font-bold p-2 my-2'>Current </td>

            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? <p>10A</p> : <p className='text-gray-600'>10A</p>}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>Today Usage </td>

            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? (
                  <p>fan.</p>
                ) : (
                  <p className='text-gray-600'>fan.</p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>Last 24hr usage </td>
            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? (
                  <p>10KwH</p>
                ) : (
                  <p className='text-gray-600'>10KwH</p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>Estimated week's usage </td>

            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? (
                  <p>10KwH</p>
                ) : (
                  <p className='text-gray-600'>10KwH</p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>Estimated Months's usage </td>
            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? (
                  <p>10KwH</p>
                ) : (
                  <p className='text-gray-600'>10KwH</p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>Estimated Year's usage </td>
            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? (
                  <p>10KwH</p>
                ) : (
                  <p className='text-gray-600'>10KwH</p>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FanMonitor;
