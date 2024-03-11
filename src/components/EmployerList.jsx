import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EmployerList = () => {
  const [employers, setEmployers] = useState([]);
  const defaultImageSrc = '/images/robert.png'; // Replace with the path to your default image

  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        const response = await fetch('https://localhost:7287/api/Employer/GetEmployerWithCompany');
        const data = await response.json();
        setEmployers(data);
      } catch (error) {
        console.error('İşverenleri getirme hatası:', error);
      }
    };

    fetchEmployers();
  }, []);

  const handleDetailButtonClick = (employerId) => {
    window.location.href = `/employer-details/${employerId}`;
  };

  return (
    <section>
      <h2>İşveren Listesi</h2>
      <ul>
        {employers.map((employer) => (
          <li key={employer.id} className='card'>
            <img
              src={employer.imageSrc || defaultImageSrc}
              className='card-img-top'
              alt={`${employer.name}'s image`}
            />
            <div className='card-body'>
              <div className='form-group'>
                {/* Remove the file input as requested */}
              </div>

              <div className='form-group'>
                <input
                  className={'form-control-file'}
                  placeholder='Employee Name'
                  name='name'
                  value={`${employer.name} ${employer.lastName}`}
                  disabled
                />
              </div>
              <div className='form-group'>
                <input
                  className={'form-control-file'}
                  
                  value={`${employer.email}`}
                  disabled
                />
              </div>
              <div className='form-group'>
                <input
                  className={'form-control-file'}
                  
                  value={`${employer.phoneNumber}`}
                  disabled
                />
              </div>
              <div className='form-group'>
                <input
                  className={'form-control-file'}
                  
                  value={`${employer.address}`}
                  disabled
                />
              </div>
              <div className='form-group'>
                <input
                  className={'form-control-file'}
                  
                  value={`${employer.department}`}
                  disabled
                />
              </div>
              <div className='form-group'>
                <input
                  className={'form-control-file'}
                  
                  value={`${employer.companyName}`}
                  disabled
                />
              </div>
              <div className='form-group'>
                <input
                  className='form-control'
                  placeholder='Occupation'
                  name='occupation'
                  value={employer.profession}
                  disabled
                />
              </div>
              <div className='form-group text-center'>
                <Link to={`/employer-details/${employer.id}`}>
                  <button type='button' className='btn btn-light'>
                    Detayları Göster
                  </button>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EmployerList;
