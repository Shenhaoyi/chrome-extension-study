import { Button, Input } from 'antd';
import React, { useEffect, useState } from 'react';

interface MathQuestion {
  question: string;
  answer: number;
}

const randomMathQuestion = (min = 10, max = 100): MathQuestion => {
  const num = Math.floor(Math.random() * (max - min) + min);
  const multiple = Math.floor(Math.random() * 10 + 1);
  const question = `你拥有的数字是${num}，请输入这个数字的 ${multiple} 倍：`;
  const answer = num * multiple;
  return { question, answer };
};

const MathQuiz: React.FC<{ handleCommit: Function; handleCancel: Function }> = ({ handleCommit, handleCancel }) => {
  const [question, setQuestion] = useState<MathQuestion>(randomMathQuestion());
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setIsCorrect(parseInt(inputValue) === question.answer ? true : false);
  }, [inputValue]);
  const handleSubmit = () => {
    console.log('submit');
    handleCommit();
  };

  return (
    <div>
      <h1>数学题</h1>
      <p>{question.question}</p>
      <Input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} disabled={isCorrect} />
      <Button onClick={handleSubmit} disabled={!isCorrect}>
        确认
      </Button>
      <Button onClick={() => handleCancel()}>取消</Button>
    </div>
  );
};

export default MathQuiz;
