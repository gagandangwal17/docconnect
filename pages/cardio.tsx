// pages/doctors.tsx
import React from 'react';
import { DoctorsTable, doctorsData } from '../components/DoctorsTable';

const DoctorsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">List of Doctors</h1>
      <DoctorsTable doctors={doctorsData} />
    </div>
  );
};

export default DoctorsPage;
