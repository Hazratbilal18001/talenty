import React from 'react';

const jobs = [
    { title: 'Frontend Developer', company: 'Tech Corp', location: 'New York' },
    { title: 'Backend Engineer', company: 'Innovate Ltd.', location: 'San Francisco' },
    { title: 'UI/UX Designer', company: 'Design Hub', location: 'Remote' },
];

const LatestJobs = () => (
    <div className="bg-white p-4 rounded shadow mt-4">
        <h2 className="text-xl font-semibold mb-2">Latest Job Posts</h2>
        <ul>
            {jobs.map((job, index) => (
                <li key={index} className="border-b py-2">
                    <p className="font-semibold">{job.title}</p>
                    <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default LatestJobs;
