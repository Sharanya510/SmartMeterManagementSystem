import React from 'react';
import Table from 'react-bootstrap/Table';
import { Chart } from 'react-google-charts';

import '../styles/Buttons.css';

export default function HomePage() {
  const options = {
    chart: {
      title: '30 days ',
      subtitle: '7 days',
    },
  };
  const data = [
    [
      'Day',
      'Electricity Meter 1',
      'Electricity Meter 2',
      'Electricity Meter 3',
    ],
    [1, 37.8, 10.8, 41.8],
    [2, 30.9, 33.5, 50.4],
    [3, 25.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 11.9, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 20.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
    [13, 4.8, 6.3, 3.6],
    [14, 50.2, 44.2, 3.4],
  ];

  return (
    <>
      <div className='text-left p-4' style={{ width: '100%' }}>
        <h5>Today's Usuage</h5>
        <Table borderless>
          <thead>
            <tr>
              <th></th>
              <th className='light-grey'>
                Todays's Usage <p>29 KWh</p>
              </th>
              <th></th>
              <th className='light-grey'>
                last 24hr Usage <p>68 KWh</p>{' '}
              </th>
              <th></th>
              <th className='light-grey'>
                Last Update <p>Date Dec 6th</p>{' '}
              </th>
              <th></th>
            </tr>
          </thead>
        </Table>
        <h5>Week's Usuage</h5>
        <Table table borderless>
          <thead>
            <tr>
              <th></th>
              <th className='light-grey'>
                Weeks Usage <p>574 KWh</p>{' '}
              </th>
              <th></th>
              <th className='light-grey'>
                Avg Daily Usage <p>82 KWh</p>{' '}
              </th>
              <th></th>
              <th className='light-grey'>
                Max Usage<p>97 KWh</p>{' '}
              </th>
              <th></th>
            </tr>
          </thead>
        </Table>
        <h5>Month's Usuage</h5>
        <Table table borderless>
          <thead>
            <tr>
              <th></th>
              <th className='light-grey'>
               Months Usage <p>2370 KWh</p>{' '}
              </th>
              <th></th>
              <th className='light-grey'>
                Avg Daily Usage <p>79 KWh</p>{' '}
              </th>
              <th></th>
              <th className='light-grey'>
                Max Usage <p>112 KWh</p>{' '}
              </th>
              <th></th>
            </tr>
          </thead>
        </Table>{' '}
        <br />
        <div>
          <Chart
            chartType='Line'
            width='90%'
            height='300px'
            style={{ position: 'relative' }}
            data={data}
            options={options}
          />
        </div>
      </div>
    </>
  );
}
