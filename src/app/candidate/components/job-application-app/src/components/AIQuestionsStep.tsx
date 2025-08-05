import React, { useEffect, useState } from 'react';

const AIQuestionsStep = ({ onNext:any }) => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch AI-generated questions
        const fetchQuestions = async () => {
            try {
                const response = await fetch('/api/ai-questions'); // Replace with your actual API endpoint
                const data = await response.json();
                setQuestions(data.questions);
            } catch (error) {
                console.error('Error fetching questions:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    const handleAnswerChange = (questionId, answer) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answer,
        }));
    };

    const handleSubmit = () => {
        // You can add validation here if needed
        onNext(answers);
    };

    if (loading) {
        return <div>Loading questions...</div>;
    }

    return (
        <div>
            <h2>Job-Related Questions</h2>
            {questions.map((question) => (
                <div key={question.id} className="mb-4">
                    <label className="block mb-1">{question.text}</label>
                    <input
                        type="text"
                        value={answers[question.id] || ''}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        className="border rounded p-2 w-full"
                    />
                </div>
            ))}
            <button onClick={handleSubmit} className="bg-blue-500 text-white rounded p-2">
                Continue
            </button>
        </div>
    );
};

export default AIQuestionsStep;