import React, { useState } from "react";
import Card from "../../components/shared/Card/Card";
import ButtonPrimary from "../../components/shared/Button/ButtonPrimary";
import OtpPhoneEmail from "../OtpPhoneEmail/OtpPhoneEmail";
import StepOtp from "../StepOtp/StepOtp";
import styles from "./Login.module.css";

const steps = {
  1: OtpPhoneEmail,
  2: StepOtp,
};
const Login = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  function onNext() {
    setStep(step + 1);
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Otp Login" icon="hashtag">
        {<Step />}
        <div>
          <ButtonPrimary
            onclick={() => {
              onNext();
            }}
            text="Get Your Username"
          />
        </div>
      </Card>
    </div>
  );
};

export default Login;
