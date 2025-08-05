import React, { useState } from 'react';

const CoverLetterStep = ({ onNext, onBack }) => {
    const [coverLetter, setCoverLetter] = useState('');

    const handleChange = (event) => {
        setCoverLetter(event.target.value);
    };

    const handleNext = () => {
        onNext(coverLetter);
    };

    return (
        <div className="cover-letter-step">
            <h2>Cover Letter</h2>
            <textarea
                value={coverLetter}
                onChange={handleChange}
                placeholder="Write your cover letter here..."
                rows={10}
                className="w-full p-2 border rounded"
            />
            <div className="flex justify-between mt-4">
                <button onClick={onBack} className="btn btn-secondary">Back</button>
                <button onClick={handleNext} className="btn btn-primary">Continue</button>
            </div>
        </div>
    );
};

export default CoverLetterStep;