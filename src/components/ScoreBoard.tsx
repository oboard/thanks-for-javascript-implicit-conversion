import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Trophy, Target, CheckCircle, Clock } from 'lucide-react';

interface ScoreBoardProps {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  accuracy: number;
}

export function ScoreBoard({ totalQuestions, answeredCount, correctCount, accuracy }: ScoreBoardProps) {
  const getAccuracyColor = (acc: number) => {
    if (acc >= 80) return 'text-green-600';
    if (acc >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAccuracyBadgeColor = (acc: number) => {
    if (acc >= 80) return 'bg-green-500';
    if (acc >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-900">
          <Trophy className="h-5 w-5" />
          答题进度
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="h-5 w-5 text-blue-600 mr-1" />
            </div>
            <p className="text-2xl font-bold text-blue-900">{totalQuestions}</p>
            <p className="text-sm text-blue-600">总题数</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="h-5 w-5 text-purple-600 mr-1" />
            </div>
            <p className="text-2xl font-bold text-purple-900">{answeredCount}</p>
            <p className="text-sm text-purple-600">已答题</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="h-5 w-5 text-green-600 mr-1" />
            </div>
            <p className="text-2xl font-bold text-green-900">{correctCount}</p>
            <p className="text-sm text-green-600">答对题</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Badge className={`text-white ${getAccuracyBadgeColor(accuracy)}`}>
                准确率
              </Badge>
            </div>
            <p className={`text-2xl font-bold ${getAccuracyColor(accuracy)}`}>
              {accuracy.toFixed(0)}%
            </p>
          </div>
        </div>
        
        {answeredCount === totalQuestions && (
          <div className="mt-4 p-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg text-center">
            <p className="font-bold">🎉 恭喜完成所有题目！</p>
            <p className="text-sm">
              {accuracy >= 80 ? "JS大师级别！👑" : 
               accuracy >= 60 ? "不错的表现！👍" : 
               "继续加油！💪"}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}