import React from 'react';

interface Doctor {
  id: number;
  name: string;
  hospital: string;
  speciality: string;
  availability: string;
}

interface DoctorsTableProps {
  doctors: Doctor[];
}

const DoctorsTable: React.FC<DoctorsTableProps> = ({ doctors }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="my-20 px-20 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-20 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Hospital
            </th>
            <th className="px-20 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Speciality
            </th>
            <th className="px-20 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Availability Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td className="px-6 py-4 whitespace-no-wrap">{doctor.name}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{doctor.hospital}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{doctor.speciality}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{doctor.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const doctorsData = [
  {
    id: 1,
    name: 'Dr. Ram',
    hospital: 'CMI',
    speciality: 'Cardiologist',
    availability: 'Available',
  },
  {
    id: 2,
    name: 'Dr. Sarah',
    hospital: 'CMI',
    speciality: 'Cardiologist',
    availability: 'Available',
  },
  {
    id: 3,
    name: 'Dr. Imli',
    hospital: 'AIIMS',
    speciality: 'Cardiologist',
    availability: 'Not Available',
  },
  {
    id: 4,
    name: 'Dr. Rakesh',
    hospital: 'Max',
    speciality: 'Cardiologist',
    availability: 'Available',
  },
  // Add more doctor data entries as needed
];

export { DoctorsTable, doctorsData };
