import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Headline } from "components/Headline";

import "./style.css";
import { Input } from "components/Input";
import { useForm } from "react-hook-form";

gsap.registerPlugin(ScrollTrigger);

interface SubscribeFormValues {
  email: string;
}

export const Subscribe: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SubscribeFormValues>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".Subscribe__container",
          start: "30% bottom",
        },
      });

      tl.from(".Subscribe .headline-2 > span", {
        duration: 0.5,
        opacity: 0,
        y: 30,
        transformOrigin: "50% 50%",
        scale: 2,
        ease: "power1.out",
        stagger: 0.03,
      });

      tl.from(".Subscribe__content-container > *", {
        x: -30,
        opacity: 0,
        stagger: 0.1,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="section Subscribe">
      <div className="container Subscribe__container">
        <Headline variant="h2">
          Will you be the first to know when the game is available for download?
        </Headline>

        <div className="Subscribe__content-container">
          <p className="text">
            Subscribe to our email newsletter to stay updated and receive
            notifications about the release of our game. We won't spam you :)
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
            By clicking the "subscribe" button, you agree to the processing of
            personal data.
          </p>
        </div>
      </div>
    </section>
  );
};
