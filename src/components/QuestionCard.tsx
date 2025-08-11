import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { CheckCircle, XCircle } from 'lucide-react';
import { Question } from '../data/questions';
import { cn } from '../lib/utils';

interface QuestionCardProps {
  question: Question;
  onAnswer: (questionId: number, selectedOption: number, isCorrect: boolean) => void;
  isAnswered: boolean;
}

export function QuestionCard({ question, onAnswer, isAnswered }: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = () => {
    if (selectedOption === null) return;
    const correct = selectedOption === question.correctAnswer;
    setIsCorrect(correct);
    setShowAnswer(true);
    onAnswer(question.id, selectedOption, correct);
  };

  const handleRunCode = () => {
    try {
      // Extract the expression from console.log()
      const match = question.code.match(/console\.log\((.*)\);/);
      if (match) {
        const expression = match[1];
        const result = eval(expression);
        alert(`运行结果: ${JSON.stringify(result)}`);
      }
    } catch (error) {
      alert('代码执行出错');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className={cn(
      "w-full transition-all duration-300 hover:shadow-lg",
      isAnswered && isCorrect && "border-green-500 bg-green-50",
      isAnswered && isCorrect === false && "border-red-500 bg-red-50"
    )}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              {question.id}. {question.title}
            </span>
            {isAnswered && (
              isCorrect ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
              )
            )}
          </CardTitle>
          <div className="flex gap-2">
            <Badge className={cn("text-white", getDifficultyColor(question.difficulty))}>
              {question.difficulty}
            </Badge>
            <Badge variant="outline">{question.category}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
            <code>{question.code}</code>
          </pre>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">
            选择你认为的答案:
          </label>
          <div className="grid grid-cols-1 gap-2">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showAnswer && setSelectedOption(index)}
                disabled={showAnswer}
                className={cn(
                  "p-3 text-left border rounded-lg transition-all duration-200 font-mono text-sm",
                  selectedOption === index && !showAnswer && "border-blue-500 bg-blue-50",
                  showAnswer && index === question.correctAnswer && "border-green-500 bg-green-50 text-green-800",
                  showAnswer && selectedOption === index && index !== question.correctAnswer && "border-red-500 bg-red-50 text-red-800",
                  !showAnswer && "hover:border-gray-400 hover:bg-gray-50",
                  showAnswer && "cursor-default"
                )}
              >
                <span className="inline-block w-6 h-6 rounded-full border text-center text-xs leading-6 mr-3">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={handleRunCode}
            variant="outline"
            className="flex-1"
            disabled={showAnswer}
          >
            🚀 运行代码
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={selectedOption === null || showAnswer}
            className="flex-1"
          >
            提交答案
          </Button>

        </div>

        {showAnswer && (
          <div className="space-y-3 pt-4 border-t">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">正确答案:</h4>
              <div className="text-sm text-blue-800 font-mono">
                {String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium text-purple-900 mb-2">解释:</h4>
              <div className="text-sm text-purple-800 whitespace-pre-line">
                {question.explanation}
              </div>
            </div>

            {isCorrect !== null && (
              <div className={cn(
                "p-3 rounded-lg text-center font-medium",
                isCorrect
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              )}>
                {isCorrect ? "🎉 答对了！" : "❌ 答错了，再试试吧！"}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}