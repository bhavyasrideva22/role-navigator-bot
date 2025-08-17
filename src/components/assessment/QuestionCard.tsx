import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Question } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswer: string | number | null;
  onAnswerChange: (answer: string | number) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

export default function QuestionCard({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswerChange,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
}: QuestionCardProps) {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const renderLikertScale = () => {
    if (!question.scale) return null;
    
    return (
      <RadioGroup 
        value={selectedAnswer?.toString() || ""} 
        onValueChange={(value) => onAnswerChange(Number(value))}
        className="space-y-3"
      >
        {Array.from({ length: question.scale.max }, (_, i) => i + 1).map((value) => (
          <div key={value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <RadioGroupItem value={value.toString()} id={`option-${value}`} />
            <Label 
              htmlFor={`option-${value}`} 
              className="flex-1 cursor-pointer text-sm font-medium"
            >
              {value} - {question.scale?.labels[value - 1]}
            </Label>
          </div>
        ))}
      </RadioGroup>
    );
  };

  const renderMultipleChoice = () => {
    if (!question.options) return null;
    
    return (
      <RadioGroup 
        value={selectedAnswer?.toString() || ""} 
        onValueChange={onAnswerChange}
        className="space-y-3"
      >
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
            <RadioGroupItem value={option} id={`option-${index}`} />
            <Label 
              htmlFor={`option-${index}`} 
              className="flex-1 cursor-pointer"
            >
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
    );
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-6 animate-fade-in">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            {question.category} • Question {currentQuestion + 1} of {totalQuestions}
          </p>
          <Progress value={progress} className="w-full max-w-md mx-auto" />
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {question.type === 'likert' ? renderLikertScale() : renderMultipleChoice()}

            <div className="flex justify-between items-center pt-4 border-t">
              <Button
                variant="outline"
                onClick={onPrevious}
                disabled={!canGoPrevious}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              
              <div className="text-sm text-muted-foreground">
                Section: {question.section.charAt(0).toUpperCase() + question.section.slice(1)}
              </div>

              <Button
                onClick={onNext}
                disabled={!canGoNext || selectedAnswer === null}
                variant="assessment"
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}