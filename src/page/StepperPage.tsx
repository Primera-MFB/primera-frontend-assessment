import ProgressStepper from '../componets/ProgressStepper';


const StepperPage = () => {
    const steps = [
        { title: 'STEP ONE', description: 'Your basket' },
        { title: 'STEP TWO', description: 'Your details' },
        { title: 'STEP THREE', description: 'Payment' },
        { title: 'STEP FOUR', description: 'Order complete' },
      ];
  return (
    <>
      <ProgressStepper steps={steps} />
    </>
  )
}

export default StepperPage;