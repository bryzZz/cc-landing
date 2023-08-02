import React from "react";

import { Headline } from "components/Headline";

import "./style.css";
import { Input } from "components/Input";
import { useForm } from "react-hook-form";

interface SubscribeFormValues {
  email: string;
}

export const Subscribe: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SubscribeFormValues>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <section className="section Subscribe">
      <div className="container Subscribe__container">
        <Headline variant="h2">
          Want to start strong and rule the game?
        </Headline>

        <div className="Subscribe__content-container">
          <p className="text">
            Sign up for our email updates and get notified when the game is
            ready. Start your legendary journey before others!
          </p>
          <form onSubmit={onSubmit} className="Subscribe__form">
            <Input
              {...register("email", {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "",
                },
              })}
              label="Your Email"
              error={!!errors.email}
            />

            <button className="btn Subscribe__btn" type="submit">
              Subscribe
            </button>
          </form>
          <p className="clue">
            By clicking "subscribe", you're agreeing to our data processing
            policy.
          </p>
        </div>
      </div>
    </section>
  );
};
