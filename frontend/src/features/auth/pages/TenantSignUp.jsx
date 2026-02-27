import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import HouseImg from "../../../assets/signup/housetenant.png";
import { ArrowLeft, LockKeyhole, Mail, Phone, User, Zap, Camera } from "lucide-react";
import ProgressStepper from "../components/ProgressStepper";

const TenantSignUp = () => {
  const propertyName = "Sunset Heights";
  const propertyOwner = "john doe";
  const rateOfUnit = 6;

  const [currentStep, setCurrentStep] = useState(1);
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <section className="bg-background font-display text-slate-900">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background group/design-root overflow-x-hidden">
        
        {/* Top Navigation */}
        <div className="flex items-center bg-white p-4 pb-2 justify-between border-b border-primary/10">
          <button
            onClick={() => currentStep > 1 ? setCurrentStep(currentStep - 1) : null}
            className="text-slate-900 flex size-12 shrink-0 items-center justify-center"
          >
            {currentStep > 1 ? <ArrowLeft /> : <Link to="/"><ArrowLeft /></Link>}
          </button>
          <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            Sangrah
          </h2>
        </div>

        {/* Hero Section */}
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-slate-200 @[480px]:rounded-lg min-h-50 relative"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%), url(${HouseImg})`,
              }}
            >
              <div className="flex flex-col p-6">
                <p className="text-white tracking-tight text-2xl font-bold leading-tight">
                  You've been invited to join {propertyName}
                </p>
                <p className="text-white/90 text-sm font-medium mt-1 uppercase tracking-wider">
                  Managed by {propertyOwner}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Stepper */}
        <ProgressStepper
          steps={["Account", "Photo", "Complete"]}
          currentStep={currentStep}
        />

        {/* Step 1 — Account Info */}
        {currentStep === 1 && (
          <>
            <div className="px-4 mb-6">
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex gap-3">
                <Zap className="text-primary shrink-0" size={20} />
                <p className="text-sm text-slate-700">
                  Your electricity will be billed at{" "}
                  <span className="font-bold text-primary">${rateOfUnit}/unit</span>{" "}
                  as per your lease agreement.
                </p>
              </div>
            </div>

            <form
              className="px-4 flex flex-col gap-6 pb-12"
              onSubmit={(e) => { e.preventDefault(); setCurrentStep(2); }}
            >
              <Input label="Name" id="name" icon={User} placeholder="John Doe" type="text" required />
              <Input label="Email" id="email" icon={Mail} placeholder="john@email.com" required type="email" />
              <Input label="Contact No." id="phone" icon={Phone} placeholder="+91 111 222 3333" required type="number" />
              <Input label="Password" id="password" icon={LockKeyhole} type="password" placeholder="••••••••" required />
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-primary/20"
                >
                  Next: Upload Photo
                </button>
                <p className="text-center text-xs text-slate-500 mt-4 px-8">
                  By continuing, you agree to Sangrah's Terms of Service and Privacy Policy.
                </p>
              </div>
            </form>
          </>
        )}

        {/* Step 2 — Upload Photo */}
        {currentStep === 2 && (
          <div className="px-4 flex flex-col gap-6 pb-12 mt-2">
            <div>
              <p className="text-lg font-bold text-slate-900">Upload your photo</p>
              <p className="text-sm text-slate-500 mt-1">This will be shown to your property manager.</p>
            </div>

            {/* Photo Picker */}
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-primary/30 rounded-xl p-8 cursor-pointer hover:bg-primary/5 transition-colors">
              {preview ? (
                <img src={preview} alt="Preview" className="size-32 rounded-full object-cover" />
              ) : (
                <>
                  <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Camera className="text-primary" size={28} />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">Tap to upload photo</p>
                  <p className="text-xs text-slate-400 mt-1">JPG, PNG up to 5MB</p>
                </>
              )}
              <input type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
            </label>

            {preview && (
              <button
                type="button"
                onClick={() => { setPhoto(null); setPreview(null); }}
                className="text-sm text-slate-400 underline text-center"
              >
                Remove photo
              </button>
            )}

            <button
              onClick={() => setCurrentStep(3)}
              disabled={!photo}
              className="w-full bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-primary/20"
            >
              Next: Complete
            </button>
          </div>
        )}

        {/* Step 3 — Complete */}
        {currentStep === 3 && (
          <div className="px-4 flex flex-col items-center justify-center gap-4 pb-12 mt-12">
            <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="text-primary" size={36} />
            </div>
            <p className="text-2xl font-bold text-slate-900">You're all set!</p>
            <p className="text-sm text-slate-500 text-center">Your account has been created. Your property manager will be notified.</p>
            <Link
              to="/"
              className="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-primary/20 text-center"
            >
              Go to Dashboard
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default TenantSignUp;