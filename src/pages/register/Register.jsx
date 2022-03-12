import React, { useState } from "react";
import styles from "./Register.module.css";
// pages
import StepOtp from "../StepOtp/StepOtp";
import StepName from "../StepName/StepName";
import StepAvtar from "../StepAvtar/StepAvtar";
import OtpPhoneEmail from "../OtpPhoneEmail/OtpPhoneEmail";
import Stepusername from "../StepUsername/StepUsername";
import Card from "../../components/shared/Card/Card";
import ButtonPrimary from "../../components/shared/Button/ButtonPrimary";

const steps = {
  1: OtpPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvtar,
  5: Stepusername,
};
const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  function onNext() {
    setStep(step + 1);
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="verifiy" icon="hashtag">
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

export default Register;
