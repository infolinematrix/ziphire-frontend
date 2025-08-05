import React, { useState } from 'react';

const JobDescriptionStep = ({ onNext }) => {
    const [agreed, setAgreed] = useState(false);

    const handleAgree = () => {
        setAgreed(true);
        onNext();
    };

    return (
        <div className="job-description-step">
            <h3 className="font-semibold text-lg mb-1">Frontend Developer</h3>
            <p className="text-sm mb-2">
                We are seeking a skilled Frontend Developer to join our dynamic team. You will be responsible for building and maintaining user interfaces using React, TypeScript, and modern UI frameworks. Collaboration with designers and backend engineers is essential.
            </p>
            <ul className="list-disc list-inside text-sm mb-2">
                <li>Develop responsive web applications using React and TypeScript</li>
                <li>Work closely with UI/UX designers to implement designs</li>
                <li>Optimize applications for maximum speed and scalability</li>
                <li>Collaborate with backend developers and participate in code reviews</li>
            </ul>
            <p className="text-sm">
                <span className="font-medium">Requirements:</span> 2+ years experience with React, proficiency in TypeScript, familiarity with REST APIs, and strong problem-solving skills.
            </p>
            <div className="mt-4">
                <label>
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={() => setAgreed(!agreed)}
                    />
                    I have read and agree to the job description.
                </label>
            </div>
            <button
                className="mt-4 btn btn-primary"
                onClick={handleAgree}
                disabled={!agreed}
            >
                Agree and Continue
            </button>
        </div>
    );
};

export default JobDescriptionStep;