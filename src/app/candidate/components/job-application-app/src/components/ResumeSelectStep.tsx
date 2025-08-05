import React, { useState } from 'react';
import { resumes } from '../data/resumes';
import { Button } from "@/components/ui/button";

const ResumeSelectStep = ({ onResumeSelect, onNext }) => {
    const [selectedResume, setSelectedResume] = useState(null);

    const handleResumeSelect = (resume) => {
        setSelectedResume(resume);
    };

    const handleContinue = () => {
        if (selectedResume) {
            onResumeSelect(selectedResume);
            onNext();
        } else {
            alert("Please select a resume before continuing.");
        }
    };

    return (
        <div className="px-4 py-6">
            <h2 className="font-semibold text-lg mb-4">Select Your Resume</h2>
            <ul className="list-disc list-inside mb-4">
                {resumes.map((resume) => (
                    <li key={resume.id} className="mb-2">
                        <label>
                            <input
                                type="radio"
                                name="resume"
                                value={resume.id}
                                checked={selectedResume?.id === resume.id}
                                onChange={() => handleResumeSelect(resume)}
                            />
                            {resume.title}
                        </label>
                    </li>
                ))}
            </ul>
            <Button onClick={handleContinue} variant="outline">Continue</Button>
        </div>
    );
};

export default ResumeSelectStep;