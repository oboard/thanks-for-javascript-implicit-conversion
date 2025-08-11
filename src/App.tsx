import React, { useState, useEffect } from 'react';
import { QuestionCard } from './components/QuestionCard';
import { ScoreBoard } from './components/ScoreBoard';
import { questions } from './data/questions';
import { Code2, Brain, Zap } from 'lucide-react';

function App() {
  const [answers, setAnswers] = useState<Record<number, { selected: number; correct: boolean }>>({});
  const [stats, setStats] = useState({
    totalQuestions: questions.length,
    answeredCount: 0,
    correctCount: 0,
    accuracy: 0
  });

  const handleAnswer = (questionId: number, selectedOption: number, isCorrect: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { selected: selectedOption, correct: isCorrect }
    }));
  };

  useEffect(() => {
    const answeredCount = Object.keys(answers).length;
    const correctCount = Object.values(answers).filter(answer => answer.correct).length;
    const accuracy = answeredCount > 0 ? (correctCount / answeredCount) * 100 : 0;

    setStats({
      totalQuestions: questions.length,
      answeredCount,
      correctCount,
      accuracy
    });
  }, [answers]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  JS 隐式类型转换大挑战
                </h1>
                <p className="text-gray-600 text-sm">
                  掌握 JavaScript 最令人困惑的特性 🚀
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Brain className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-600">测试你的JS内功</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-8 p-6 bg-white rounded-xl shadow-sm border">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Zap className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                欢迎来到 JavaScript 隐式类型转换的世界！
              </h2>
              <p className="text-gray-600 mb-4">
                这些题目涵盖了 JS 中最令人头疼的类型转换规则。先自己思考答案，再点击"运行代码"验证，
                最后提交答案查看详细解释来理解背后的原理。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span><strong>简单:</strong> 基础概念</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span><strong>中等:</strong> 需要思考</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span><strong>困难:</strong> 挑战大脑</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Score Board */}
        <div className="mb-8">
          <ScoreBoard {...stats} />
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {questions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              onAnswer={handleAnswer}
              isAnswered={question.id in answers}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 p-6 bg-gray-900 text-white rounded-xl">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">🎓 学习资源推荐</h3>
            <p className="text-gray-300 mb-4">
              想深入理解这些转换规则？推荐阅读 ECMAScript 规范中的这些章节：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="bg-gray-800 p-3 rounded">
                <strong>ToPrimitive</strong><br />
                <span className="text-gray-400">对象到原始值</span>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <strong>ToNumber</strong><br />
                <span className="text-gray-400">转换为数字</span>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <strong>ToString</strong><br />
                <span className="text-gray-400">转换为字符串</span>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <strong>Abstract Equality</strong><br />
                <span className="text-gray-400">相等性比较</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;