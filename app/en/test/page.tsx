"use client"

import React, { useState, useEffect, Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { TestQuestion } from "@/components/test-question"
import { ProgressBar } from "@/components/progress-bar"
import { questions } from '../data/questions' // Import questions from the English data directory
import { useSearchParams, useRouter } from 'next/navigation';
import Link from "next/link"
import { mbtiTypes } from '../data/mbti-types' // Import MBTI types from the English data directory

// Placeholder for mbtiTypes structure based on original usage
// const mbtiTypes: { [key: string]: any } = {
//   INTJ: { type: 'INTJ', name: 'Architect', description: '...', }, // Example structure, fill with actual translated types
//   INTP: { type: 'INTP', name: 'Logician', description: '...', },
//   // Add all 16 types here with English names and descriptions
// };

interface Question {
  id: number
  text: string
  options: [string, string]
  dimension: string
  weight?: number
  isReversed?: boolean
}

interface Scores {
  E: number
  I: number
  S: number
  N: number
  T: number
  F: number
  J: number
  P: number
}

interface TestContentProps {
  currentQuestion: number
  setCurrentQuestion: (value: number) => void
  answers: Record<number, number>
  setAnswers: (value: Record<number, number>) => void
  testVersion: string | null
  setTestVersion: (value: string | null) => void
  showVersionSelection: boolean
  setShowVersionSelection: (value: boolean) => void
  showMessage: boolean
  setShowMessage: (value: boolean) => void
  currentQuestions: Question[] | null
  setCurrentQuestions: (value: Question[] | null) => void
}

interface TestResult {
  EI: string;
  SN: string;
  TF: string;
  JP: string;
  percentages: Record<string, number>;
}

export default function EnglishTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [testVersion, setTestVersion] = useState<string | null>(null)
  const [showVersionSelection, setShowVersionSelection] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState<Question[] | null>(null);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <TestContent
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        answers={answers}
        setAnswers={setAnswers}
        testVersion={testVersion}
        setTestVersion={setTestVersion}
        showVersionSelection={showVersionSelection}
        setShowVersionSelection={setShowVersionSelection}
        showMessage={showMessage}
        setShowMessage={setShowMessage}
        currentQuestions={currentQuestions}
        setCurrentQuestions={setCurrentQuestions}
      />
    </div>
  )
}

function TestContent({
  currentQuestion,
  setCurrentQuestion,
  answers,
  setAnswers,
  testVersion,
  setTestVersion,
  showVersionSelection,
  setShowVersionSelection,
  showMessage,
  setShowMessage,
  currentQuestions,
  setCurrentQuestions,
}: TestContentProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Get the selected test version, prioritizing URL parameters
    const version = searchParams.get('version') || localStorage.getItem("selectedTestVersion");
    console.log("useEffect: Read version is:", version);

    if (version) {
      setTestVersion(version);
      setShowVersionSelection(false);
      setShowMessage(false);
    } else {
      setTestVersion(null);
      setCurrentQuestions(null);
      setShowVersionSelection(true);
      setShowMessage(true);

      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [searchParams, setTestVersion, setShowVersionSelection, setShowMessage, setCurrentQuestions]);

  useEffect(() => {
    console.log("useEffect: testVersion changed to:", testVersion);
    if (testVersion) {
      const questionsForVersion = getQuestionsForVersion(testVersion);
      setCurrentQuestions(questionsForVersion);
      setCurrentQuestion(0);
      console.log("useEffect: Loaded question bank, length:", questionsForVersion.length);
    } else {
      setCurrentQuestions(null);
      setCurrentQuestion(0);
    }
  }, [testVersion]);

  const getQuestionsForVersion = (version: string | null) => {
    if (version === null) {
      return [];
    }
    // This part assumes your questions data file (@/data/questions) is structured to handle different versions and potentially languages
    // You might need to modify your questions data or this function to load English questions based on the version
    switch (version) {
      case "standard":
        return questions.standard.map(q => ({
          ...q,
          options: q.options as [string, string] // Assuming options are already translated or handled elsewhere
        }));
      case "professional":
        return questions.professional.map(q => ({
          ...q,
          options: q.options as [string, string] // Assuming options are already translated or handled elsewhere
        }));
      case "complete":
        return questions.complete.map(q => ({
          ...q,
          options: q.options as [string, string] // Assuming options are already translated or handled elsewhere
        }));
      default:
        // Default to standard or handle error
        return []; // Return empty array for unknown version
    }
  };

  const progress = (currentQuestions && currentQuestions.length > 0) ? ((currentQuestion + 1) / currentQuestions.length) * 100 : 0;

  const handleAnswer = (answerIndex: number) => {
    if (!currentQuestions || currentQuestions.length === 0) return;

    const question = currentQuestions[currentQuestion];
    // Simple scoring: option 0 gets 1 point, option 1 gets 0 points
    // Adjusting for reversed questions
    const score = question.isReversed ? (answerIndex === 0 ? 0 : 1) : (answerIndex === 0 ? 1 : 0);

    setAnswers(((prev: Record<number, number>) => {
      const newAnswers: Record<number, number> = { ...prev };
      newAnswers[currentQuestion] = score;
      return newAnswers;
    }) as any);

    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(((prev: number) => prev + 1) as any);
    } else {
      calculateResult();
    }
  };

  const handlePrevious = () => {
    if (!currentQuestions || currentQuestions.length === 0) return;

    if (currentQuestion > 0) {
      setCurrentQuestion(((prev: number) => prev - 1) as any)
    }
  };

  const calculateResult = () => {
    if (!currentQuestions || currentQuestions.length === 0) return;

    const dimensionScores: Record<string, number> = {
      EI: 0,
      SN: 0,
      TF: 0,
      JP: 0,
    };

    // Store the number of questions for each dimension
    const dimensionCounts: Record<string, number> = {
      EI: 0,
      SN: 0,
      TF: 0,
      JP: 0,
    };

    Object.entries(answers).forEach(([questionIndex, answerValue]) => {
      const question = currentQuestions[Number.parseInt(questionIndex)];
      const dimension = question.dimension;
      const score = answerValue as number;
      
      if (dimensionScores.hasOwnProperty(dimension)) {
        dimensionScores[dimension] += score;
        dimensionCounts[dimension]++;
      }
    });

    const result: TestResult = {
      EI: '', SN: '', TF: '', JP: '',
      percentages: {} as Record<string, number>
    };

    // Calculate the tendency and percentage for each dimension
    Object.entries(dimensionScores).forEach(([dimension, score]) => {
      const firstLetter = dimension[0];
      const secondLetter = dimension[1];
      const totalQuestions = dimensionCounts[dimension];

      if (totalQuestions === 0) return; // Avoid division by zero

      // Calculate the percentage of the first letter tendency
      const percentage = (score / totalQuestions) * 100;

      result.percentages[firstLetter] = percentage;
      result.percentages[secondLetter] = 100 - percentage;

      // Determine dimension tendency based on score and assign to result
      if (dimension === 'EI') {
        if (percentage > 50) {
          result.EI = firstLetter;
        } else if (percentage < 50) {
          result.EI = secondLetter;
        } else {
           result.EI = firstLetter;
        }
      } else if (dimension === 'SN') {
         if (percentage > 50) {
          result.SN = firstLetter;
        } else if (percentage < 50) {
          result.SN = secondLetter;
        } else {
           result.SN = firstLetter;
        }
      } else if (dimension === 'TF') {
         if (percentage > 50) {
          result.TF = firstLetter;
        } else if (percentage < 50) {
          result.TF = secondLetter;
        } else {
           result.TF = firstLetter;
        }
      } else if (dimension === 'JP') {
         if (percentage > 50) {
          result.JP = firstLetter;
        } else if (percentage < 50) {
          result.JP = secondLetter;
        } else {
           result.JP = firstLetter;
        }
      }
    });

    // Construct the 4-letter MBTI type
    const mbtiType = result.EI + result.SN + result.TF + result.JP;

    console.log("Calculated MBTI Type:", mbtiType);
    console.log("Percentages:", result.percentages);

    // Find the full type name and description
    const fullTypeInfo = mbtiTypes[mbtiType]; // Fixed: Access using key instead of find

    if (fullTypeInfo) {
      console.log("Full Type Name:", fullTypeInfo.name);
      console.log("Description Snippet:", fullTypeInfo.description ? fullTypeInfo.description.substring(0, 100) + '...' : ''); // Added check for description
      // Navigate to the result page, passing the result and type info via URL parameters
      router.push(`/en/result?type=${mbtiType}&percentages=${encodeURIComponent(JSON.stringify(result.percentages))}`);
    } else {
      console.error("MBTI type not found:", mbtiType);
      // Keep or modify this alert/handling for type not found case
      alert(`Test Completed, but your MBTI type (${mbtiType}) was not found. Please check the console for more details.`);
       // Optionally navigate to a generic result page or show an error message on the page
       // router.push('/en/result?error=typenotfound');
    }
  };

  // Helper function to find the closest valid MBTI type if an invalid combination is generated
  // This function was in the original file but not called in the provided snippet, keeping for completeness but might need review
  const findClosestValidType = (invalidType: string, validTypes: string[]): string => {
      // ... (Original logic remains - needs translation and implementation if used)
       return invalidType; // Placeholder return
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {showVersionSelection ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Select a Test Version</h1>
          <p className="text-gray-700 text-base sm:text-lg mb-8">Please choose a test version to begin.</p>
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/en/test?version=standard" className="px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 text-base sm:text-lg">Standard Test</Link>
            <Link href="/en/test?version=professional" className="px-6 py-3 rounded-md bg-secondary text-white hover:bg-secondary/90 text-base sm:text-lg">Professional Test</Link>
            <Link href="/en/test?version=complete" className="px-6 py-3 rounded-md bg-accent text-white hover:bg-accent/90 text-base sm:text-lg">Complete Test</Link>
          </div>
        </div>
      ) : showMessage ? (
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8">Loading Test...</h1>
          <p className="text-gray-700 text-base sm:text-lg">Please wait while we load the test questions.</p>
        </div>
      ) : currentQuestions && currentQuestions.length > 0 ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 max-w-3xl">
          <div className="mt-8">
            <ProgressBar progress={progress} />
          </div>
          <div className="mt-6 sm:mt-8 bg-white rounded-lg p-6 sm:p-8 shadow-md">
            <TestQuestion
              question={currentQuestions[currentQuestion]}
              onAnswer={handleAnswer}
              selectedAnswer={answers[currentQuestion]}
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-8 space-y-4 sm:space-y-0">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-3 rounded-md bg-gray-300 text-gray-700 disabled:opacity-50 text-base sm:text-lg"
            >
              Previous
            </button>
            {currentQuestion < currentQuestions.length - 1 ? (
              <button
                onClick={() => handleAnswer(answers[currentQuestion] as number)}
                disabled={answers[currentQuestion] === undefined}
                className="px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 disabled:opacity-50 text-base sm:text-lg"
              >
                Next
              </button>
            ) : (
               <button
                onClick={() => handleAnswer(answers[currentQuestion] as number)}
                 disabled={answers[currentQuestion] === undefined}
                className="px-6 py-3 rounded-md bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 text-base sm:text-lg"
              >
                Finish Test
              </button>
            )}
          </div>
        </div>
      ) : (
        // Error state or no questions loaded
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8">Error Loading Test</h1>
          <p className="text-gray-700 text-base sm:text-lg">Could not load test questions. Please return to the homepage and select a test version.</p>
           <div className="mt-8">
             <Link href="/en" className="px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 text-base sm:text-lg">Return to Homepage</Link>
           </div>
        </div>
      )}
    </div>
  );
}