import React, { useState } from "react";
import SendOtp from "../components/templates/SendOtp";
import CheckOtp from "../components/templates/CheckOtp";

const AuthPage = () => {
  const [mobile, setMobile] = useState("");
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");

  return (
    <div>
      {step === 1 && (
        <SendOtp setStep={setStep} mobile={mobile} setMobile={setMobile} />
      )}
      {step === 2 && (
        <CheckOtp
          setStep={setStep}
          mobile={mobile}
          code={code}
          setCode={setCode}
        />
      )}
    </div>
  );
};

export default AuthPage;
