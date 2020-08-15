import React from "react";
import { useForm } from "react-hook-form";

import API from "../../api";
import { Bubble } from "../";
import "./RegistrationForm.css";
import Input from "./Input";

interface RegistrationFormProps {}

const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const { handleSubmit, register, errors, setValue } = useForm();

  // TODO: add form types
  const onSubmit = async (values: any) => {
    console.log(values);
    try {
      const result = await API.post("/user", { ...values });
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  };

  // TODO: labels on inputs should be visible when filled!
  return (
    <section className="centered">
      <Bubble from="us" className="registration-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            type="text"
            aria-label="Your name"
            placeholder="Your name"
            className={errors.name && "invalid"}
            ref={register({ required: true })}
          />
          <Input
            name="friend_name"
            type="text"
            aria-label="Friend's name"
            placeholder="Friend's name"
            className={errors.friend_name && "invalid"}
            ref={register({ required: true })}
          />
          <div className="date-select-container">
            {/* <small>Every</small> */}
            <select
              name="week"
              aria-label="Repeat every"
              placeholder="Every..."
              className={errors.week && "invalid"}
              ref={register({ required: true })}
              onChange={(event) =>
                setValue("week", parseInt(event.target.value))
              }
            >
              <option value={1}>First</option>
              <option value={2}>Second</option>
              <option value={3}>Third</option>
              <option value={4}>Last</option>
            </select>
            <select
              name="day"
              aria-label="Day of the week"
              placeholder="On..."
              className={errors.day && "invalid"}
              ref={register({ required: true })}
              onChange={(event) =>
                setValue("day", parseInt(event.target.value))
              }
            >
              <option value={0}>Monday</option>
              <option value={1}>Tuesday</option>
              <option value={2}>Wednesday</option>
              <option value={3}>Thursday</option>
              <option value={4}>Friday</option>
              <option value={5}>Saturday</option>
              <option value={6}>Sunday</option>
            </select>
          </div>
          <Input
            name="time"
            type="time"
            aria-label="Call at this time"
            placeholder="At this time"
            required
            className={errors.time && "invalid"}
            ref={register({ required: true })}
          />
          <Input
            name="phone"
            type="tel"
            aria-label="Your phone number"
            placeholder="Your phone number"
            className={errors.phone && "invalid"}
            minLength={10}
            ref={register({ validate: (value) => value.length >= 10 })}
          />
          <button type="submit">Submit</button>
        </form>
      </Bubble>
    </section>
  );
};

export default RegistrationForm;
