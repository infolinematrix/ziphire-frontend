import React from 'react';

interface FinalApplyStepProps {
    jobDescription: string;
    aiResponses: string[];
    coverLetter: string;
    selectedResume: string;
    onSubmit: () => void;
}

const FinalApplyStep: React.FC<FinalApplyStepProps> = ({
    jobDescription,
    aiResponses,
    coverLetter,
    selectedResume,
    onSubmit,
}) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Review Your Application</h2>
            <div className="mb-4">
                <h3 className="font-medium">Job Description:</h3>
                <p>{jobDescription}</p>
            </div>
            <div className="mb-4">
                <h3 className="font-medium">AI Responses:</h3>
                <ul>
                    {aiResponses.map((response, index) => (
                        <li key={index}>{response}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="font-medium">Cover Letter:</h3>
                <p>{coverLetter}</p>
            </div>
            <div className="mb-4">
                <h3 className="font-medium">Selected Resume:</h3>
                <p>{selectedResume}</p>
            </div>
            <button
                onClick={onSubmit}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
                Apply
            </button>
        </div>
    );
};

export default FinalApplyStep;