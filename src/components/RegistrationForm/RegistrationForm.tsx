import React, { useState } from "react";
import { useForm } from "react-hook-form";
import phone from "phone";

import API from "../../api";
import { Bubble } from "../";
import "./RegistrationForm.css";
import Input from "./Input";
import Select from "./Select";

const charityOptions = [
  { value: "LATER", text: "I'll decide later..." },
  { value: "UNLONELY", text: "The UnLonely Project" },
  { value: "CTEL", text: "The Campaign to End Loneliness" },
  { value: "CLP", text: "Cost of Loneliness Project" },
  { value: "RE", text: "Reengage" },
  { value: "OTHER", text: "Other" },
];

const weekOptions = [
  { value: 1, text: "First" },
  { value: 2, text: "Second" },
  { value: 3, text: "Third" },
  { value: 4, text: "Last" },
];

const dayOptions = [
  { value: 0, text: "Monday" },
  { value: 1, text: "Tuesday" },
  { value: 2, text: "Wednesday" },
  { value: 3, text: "Thursday" },
  { value: 4, text: "Friday" },
  { value: 5, text: "Saturday" },
  { value: 6, text: "Sunday" },
];

interface RegistrationFormProps {}

const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const [didSubmit, setDidSubmit] = useState<boolean>(false);
  const { handleSubmit, register, errors, setValue, reset } = useForm({
    defaultValues: {},
  });

  const validatePhone = (data: any) => {
    const [e164Phone, countryCode] = phone(data);
    return !!e164Phone && countryCode === "USA";
  };

  // TODO: add form types
  const onSubmit = async (values: any) => {
    console.log(values);
    try {
      const result = await API.post("/create", {
        ...values,
        phone: phone(values.phone)[0],
      });
      if (result.data.id) {
        reset();
        setDidSubmit(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="centered">
      <Bubble from="us" className="registration-form">
        {didSubmit ? (
          <div>Congrats!</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="name"
              type="text"
              aria-label="Your name"
              placeholder="Your name"
              className={errors.name && "invalid"}
              ref={register({ required: true })}
              required
            />
            <Input
              name="friend_name"
              type="text"
              aria-label="Friend's name"
              placeholder="Friend's name"
              className={errors.friend_name && "invalid"}
              ref={register({ required: true })}
              required
            />
            <div className="date-select-container">
              {/* <small>Every</small> */}
              <Select
                name="week"
                aria-label="Repeat every"
                placeholder="I plan to call every..."
                className={errors.week && "invalid"}
                ref={register({ required: true })}
                required
                onChange={(event) =>
                  setValue("week", parseInt(event.target.value))
                }
                options={weekOptions}
              />
              <Select
                name="day"
                aria-label="Day of the week"
                // placeholder="On..."
                className={errors.day && "invalid"}
                ref={register({ required: true })}
                required
                onChange={(event) =>
                  setValue("day", parseInt(event.target.value))
                }
                options={dayOptions}
              />
            </div>
            <Input
              name="time"
              type="time"
              // step={900}
              aria-label="Call at this time"
              placeholder="At this time"
              className={errors.time && "invalid"}
              ref={register({ required: true })}
              required
            />
            <Input
              name="phone"
              type="tel"
              aria-label="Your phone number"
              placeholder={`Your phone number${
                errors.phone ? " (must be a valid US phone number)" : ""
              }`}
              className={errors.phone && "invalid"}
              ref={register({ required: true, validate: validatePhone })}
              required
            />

            <Select
              name="charity"
              aria-label="Your chosen charity"
              placeholder="Your charity"
              className={errors.charity && "invalid"}
              ref={register({ required: false })}
              options={charityOptions}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Bubble>
    </section>
  );
};

export default RegistrationForm;
