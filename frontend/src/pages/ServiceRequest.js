import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyToast from '../services/MyToast';
// import "../styles/new_login.css";

import { Container, Row, Col } from 'react-bootstrap';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBTextArea,
} from 'mdb-react-ui-kit';

const bg_style = {
  border: '2px solid black',
  padding: '25px',
  background: 'url(${background})',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '300px 100px',
};

function ServiceRequest() {
  const [serviceType, setServiceType] = useState('');
  const [serviceDescription, setServiceDesc] = useState('');
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState('');
  const [flag, setHidden] = useState(true);

  const login = (e) => {
    setHidden(false);
    e.preventDefault();
    if (!serviceType || !serviceDescription) {
      setShowToast(true);
      setToastText('Please enter both fields');
    } else {
      const usrEmail = localStorage.getItem('email');
      console.log('useremail::::::::' + usrEmail);
      axios
        .post(`/api/fan/addService`, {
          serviceType: serviceType,
          serviceDescription: serviceDescription,
          userID: usrEmail,
        })
        .then(async (res) => {
          //   localStorage.setItem('email', JSON.stringify(email));

          if (res.status === 200) {
            if (res) {
              console.log('succesfully hit');
              // setServiceType('');
              // setServiceDesc('');
              //localStorage.setItem("name", res?.data?.user?.foundUser?.name);
              //   localStorage.setItem('email', res?.data?.user?.foundUser?.email);
              //   if (email === 'admin@gmail.com') navigate('/adminhome');
              //   else navigate('/client/iot');
            }
          }
        })
        .catch((err) => {
          console.log(err);
          setShowToast(true);
          setToastText('Some error occured');
        });
    }
  };

  return (
    <MDBContainer fluid className='p-4 bg_style'>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>
              <h3
                style={{ textAlign: 'left', fontSize: '25px' }}
                className='mb-4'
              >
                Raise a Service Request
              </h3>

              <span
                style={{
                  fontSize: '18px',
                  textALign: 'left',
                  padding: '0px',
                  marginBottom: '3px',
                }}
              >
                Service Type
              </span>

              <MDBInput
                style={{
                  width: '400px',
                  marginTop: '6px',
                  textAlign: 'left',
                  border: '1px solid gray',
                  padding: '.5em',
                }}
                className='mb-4 rounded-md'
                name='serviceType'
                required
                onChange={(e) => {
                  setServiceType(e.target.value);
                }}
                id='form1'
                type='text'
                placeholder='Fan/Light'
              />

              <span
                style={{
                  fontSize: '18px',
                  textALign: 'left',
                  padding: '0px',
                  marginBottom: '3px',
                }}
              >
                Service Description
              </span>

              <MDBTextArea
                style={{
                  width: '400px',
                  height: '150px',
                  marginTop: '8px',
                  textAlign: 'left',
                  border: '1px solid gray',
                  padding: '.5em',
                }}
                className='mb-4 rounded-md'
                id='form1'
                type='text'
                placeholder='Please describe the request'
                required
                onChange={(e) => {
                  setServiceDesc(e.target.value);
                }}
                name='serviceDescription'
              />

              {/* <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn> */}
              <Button
                type='submit'
                onClick={login}
                className='p-4 rounded-md w-[400px] bg-green-600 text-base text-white'
              >
                Raise Request
              </Button>

              <MyToast
                show={showToast}
                handleClose={() => setShowToast(false)}
                text={toastText}
              />

              <div
                className='d-flex justify-content-between mx-4 mb-4'
                style={{ marginTop: '10px' }}
              ></div>
              {/* <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        {!flag ? (
          <span style={{ fontSize: '24px', color: 'green' }}>
            Request Raised Successfully
          </span>
        ) : null}
      </MDBRow>
    </MDBContainer>
  );
}

export default ServiceRequest;
