import { useState } from 'react';
import {
  IoIosCheckmarkCircleOutline,
  IoIosRadioButtonOff,
} from 'react-icons/io';
import StepperButton from '../Button';

interface Step {
  title: string;
  description: string;
}

const ProgressStepper: React.FC<{ steps: Step[] }> = ({ steps }) => {
  const [completedSteps, setCompletedSteps] = useState<number>(0);

  const handleStepClick = (index: number) => {
    setCompletedSteps(index);
  };
  const handleNextClick = () => {
    if (completedSteps < steps.length - 1) {
      setCompletedSteps((prevCompletedSteps) => prevCompletedSteps + 1);
    }
  };
  const handlePrevClick = () => {
    if (completedSteps > 0) {
      setCompletedSteps((prevStep) => prevStep - 1);
    }
  };
  return (
    <div className="progress-stepper">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex gap-x-[15px] items-center h-[65px] ${
            index === completedSteps || index === completedSteps + 1
              ? 'active'
              : ''
          }`}
          onClick={() => handleStepClick(index)}
        >
          <div>
            {index <= completedSteps ? (
              <div className="flex flex-col items-center">
                <IoIosCheckmarkCircleOutline className="text-[#F3344A]" />
                <div className="relative">
                  <div className="h-[50px] absolute w-[2px] bg-[#F3344A]"></div>
                </div>
              </div>
            ) : (
              <IoIosRadioButtonOff />
            )}
          </div>
          <div className="">
            <p className="text-justify text-[#496970] text-base">
              {step.title}
            </p>
            <p className="step-description text-[23px] font-bold">
              {step.description}
            </p>
          </div>
        </div>
      ))}
      <div className='flex gap-x-[20px] justify-center mt-[10px]'>
        <StepperButton label="prev" onClick={handlePrevClick} />
        <StepperButton label="Next" onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default ProgressStepper;
