import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findDeviceById } from '../../../services/deviceApi';

const ElectricityDeviceView = () => {
  const { id } = useParams();
  const [device, setDevice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevice = async () => {
      setLoading(true);
      try {
        const deviceFound = await findDeviceById(id);
        console.log(deviceFound);
        if (deviceFound.data.status === '200') {
          setDevice(deviceFound.data.meters.meter);
          setLoading(false);
        }
      } catch (error) {
        setDevice(null);
        console.error(error);
        setLoading(false);
      }
    };
    fetchDevice();
  }, [id]);

  if (loading) {
    return <p className='text-center'>Loading...</p>;
  }

  return (
    <div>
      <p className='font-bold bg-gray-200 rounded-sm p-1 px-4 w-fit mt-8 mb-4'>
        Device Information:
      </p>

      <div className='w-full flex gap-4'>
        <div className='bg-gray-200 w-full p-4'>
          <div className='flex gap-2 my-3 justify-between'>
            {/* device name */}
            <div className='flex basis-1/3 gap-2'>
              <h3 className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'>
                Device name:
              </h3>

              <p>{device.electricMeterName}</p>
            </div>

            {/* device model */}
            <div className='flex basis-1/3 gap-2'>
              <h3 className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'>
                Model:
              </h3>

              <p>{device.model}</p>
            </div>

            {/* device install date */}
            <div className='flex basis-1/3 gap-2'>
              <h3 className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'>
                Install Date:
              </h3>

              <p>{device.installationDate}</p>
            </div>
          </div>

          {/* row 2 */}
          <div className='flex gap-2 my-3 justify-between'>
            {/* device id */}
            <div className='flex basis-1/3 gap-2'>
              <h3 className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'>
                Device ID:
              </h3>

              <p>{device.electricMeterId}</p>
            </div>

            {/* device amp capacity */}
            <div className='flex basis-1/3 gap-2'>
              <h3 className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'>
                Amperage Capacity:
              </h3>

              <p>{device.electricCapacity}</p>
            </div>

            {/* device dimesnions */}
            <div className='flex basis-1/3 gap-2'>
              <h3 className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'>
                Dimensions:
              </h3>

              <p>{device.dimensions}</p>
            </div>
          </div>

          {/* row 3 */}
          <div className='flex gap-2 my-3 justify-between'>
            {/*  location */}
            <div className='flex basis-1/3 gap-2'>
              <h3 className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'>
                Location:
              </h3>

              <p>{device.location}</p>
            </div>

            {/* installation method */}
            <div className='flex basis-1/3 gap-2'>
              <h3 className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'>
                Installation method:
              </h3>

              <p>{device.installationMethod}</p>
            </div>

            {/* device dimesnions */}
            <div className='flex basis-1/3 gap-2'>
              <h3 className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'>
                Deployment Date:
              </h3>

              <p>{device.deploymentDate}</p>
            </div>
          </div>

          {/* row 4 */}
          <div className='flex gap-2 my-3 justify-between'>
            {/* device manufacturer */}
            <div className='flex basis-1/3 gap-2'>
              <h3 className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'>
                Manufacturer:
              </h3>

              <p>{device.manufacturer}</p>
            </div>

            {/* meas acc */}
            <div className='flex basis-1/3 gap-2'>
              <h3 className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'>
                Measurement Accuracy:
              </h3>

              <p>{device.meausurementAccuracy}</p>
            </div>

            {/* power */}
            <div className='flex basis-1/3 gap-2'>
              <h3 className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'>
                Power:
              </h3>

              <p>{device.power}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ElectricityDeviceView;
