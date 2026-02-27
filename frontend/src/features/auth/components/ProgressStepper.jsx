export default function ProgressStepper({ steps, currentStep }) {
  const totalSteps = steps.length;
  return (
    <div className="px-6 py-8">
      <div className="flex flex-col mb-4 font-primary text-xs font-semibold text-green-700">
          <p>
            STEP {currentStep} OF {totalSteps}
          </p>
          <p className={`text-slate-900 text-lg ${currentStep === totalSteps ? "block" : "hidden"}`}>Complete</p>
        </div>
      <div className="flex items-center justify-between relative">
        {/* Background line */}
        <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-200 z-0" />

        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div
              key={stepNumber}
              className="flex flex-col items-center gap-2 z-10"
            >
              <div
                className={`size-10 rounded-full flex items-center justify-center font-bold transition-all
                  ${
                    isActive
                      ? "bg-primary text-white ring-4 ring-primary/20"
                      : isCompleted
                        ? "bg-primary text-white"
                        : "bg-white border-2 border-slate-200 text-slate-400"
                  }`}
              >
                {stepNumber}
              </div>
              <span
                className={`text-xs font-medium transition-all
                  ${isActive || isCompleted ? "text-primary font-semibold" : "text-slate-500"}`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
