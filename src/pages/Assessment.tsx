import { useState, useEffect } from "react";
import { useAssessment } from "@/hooks/useAssessment";
import { assessmentQuestions } from "@/data/questions";
import AssessmentIntro from "@/components/assessment/AssessmentIntro";
import QuestionCard from "@/components/assessment/QuestionCard";
import ResultsPage from "@/components/assessment/ResultsPage";

export default function Assessment() {
  const { state, dispatch } = useAssessment();
  const [currentQuestionData, setCurrentQuestionData] = useState(assessmentQuestions[0]);

  useEffect(() => {
    if (state.currentQuestion < assessmentQuestions.length) {
      setCurrentQuestionData(assessmentQuestions[state.currentQuestion]);
    }
  }, [state.currentQuestion]);

  const handleStart = () => {
    dispatch({ type: 'SET_SECTION', payload: 'psychometric' });
  };

  const handleAnswerChange = (answer: string | number) => {
    dispatch({
      type: 'ANSWER_QUESTION',
      payload: {
        questionId: currentQuestionData.id,
        answer,
        section: currentQuestionData.section,
      },
    });
  };

  const handleNext = () => {
    if (state.currentQuestion < assessmentQuestions.length - 1) {
      dispatch({ type: 'NEXT_QUESTION' });
    } else {
      dispatch({ type: 'CALCULATE_SCORES' });
    }
  };

  const handlePrevious = () => {
    dispatch({ type: 'PREVIOUS_QUESTION' });
  };

  const handleRestart = () => {
    dispatch({ type: 'RESET_ASSESSMENT' });
  };

  const getCurrentAnswer = () => {
    const existingAnswer = state.answers.find(
      a => a.questionId === currentQuestionData.id
    );
    return existingAnswer?.answer || null;
  };

  // Show intro
  if (state.currentSection === 'intro') {
    return <AssessmentIntro onStart={handleStart} />;
  }

  // Show results
  if (state.isComplete && state.scores) {
    return <ResultsPage scores={state.scores} onRestart={handleRestart} />;
  }

  // Show questions
  return (
    <QuestionCard
      question={currentQuestionData}
      currentQuestion={state.currentQuestion}
      totalQuestions={assessmentQuestions.length}
      selectedAnswer={getCurrentAnswer()}
      onAnswerChange={handleAnswerChange}
      onNext={handleNext}
      onPrevious={handlePrevious}
      canGoNext={true}
      canGoPrevious={state.currentQuestion > 0}
    />
  );
}