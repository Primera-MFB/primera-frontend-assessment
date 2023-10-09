import React from 'react';

interface StepperButtonProps {
  label: string;
  onClick: () => void;
}

const StepperButton: React.FC<StepperButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-[#F3344A] text-white rounded-md p-2 hover:bg-[#D12D44]"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default StepperButton;

