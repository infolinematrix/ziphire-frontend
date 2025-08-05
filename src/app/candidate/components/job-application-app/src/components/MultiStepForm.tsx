import React, { useState } from 'react';
import JobDescriptionStep from './JobDescriptionStep';
import AIQuestionsStep from './AIQuestionsStep';
import CoverLetterStep from './CoverLetterStep';
import ResumeSelectStep from './ResumeSelectStep';
import FinalApplyStep from './FinalApplyStep';

const steps = [
    'JobDescription',
    'AIQuestions',
    'CoverLetter',
    'ResumeSelect',
    'FinalApply'
];

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        agreement: false,
        aiResponses: {},
        coverLetter: '',
        selectedResume: null,
    });

    const nextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleFormDataChange = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }));
    };

    const renderStep = () => {
        switch (steps[currentStep]) {
            case 'JobDescription':
                return <JobDescriptionStep onAgree={nextStep} />;
            case 'AIQuestions':
                return <AIQuestionsStep onNext={nextStep} onDataChange={handleFormDataChange} />;
            case 'CoverLetter':
                return <CoverLetterStep onNext={nextStep} onDataChange={handleFormDataChange} />;
            case 'ResumeSelect':
                return <ResumeSelectStep onNext={nextStep} onDataChange={handleFormDataChange} />;
            case 'FinalApply':
                return <FinalApplyStep formData={formData} />;
            default:
                return null;
        }
    };

    return (
        <div className="multi-step-form">
            {renderStep()}
            <div className="navigation-buttons">
                {currentStep > 0 && <button onClick={prevStep}>Back</button>}
                {currentStep < steps.length - 1 && <button onClick={nextStep}>Next</button>}
            </div>
        </div>
    );
};

export default MultiStepForm;