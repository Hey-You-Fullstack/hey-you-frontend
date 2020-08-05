import React from "react";
import { useForm } from "react-hook-form";

import API from "../../api";
import { Bubble } from "../";
import "./RegistrationForm.css";

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
    <section>
      <Bubble index={0} from="us" style={{ width: "100%", margin: "auto" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="name"
            type="text"
            aria-label="Your name"
            className={errors.name && "invalid"}
            placeholder="What is your name?"
            ref={register({ required: true })}
          />
          <input
            name="friend_name"
            type="text"
            aria-label="Friend's name"
            className={errors.friend_name && "invalid"}
            placeholder="Who do you want to keep in touch with?"
            ref={register({ required: true })}
          />
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            {/* <small>Every</small> */}
            <select
              name="week"
              aria-label="Repeat every"
              className={errors.week && "invalid"}
              placeholder="Every..."
              ref={register({ required: true })}
              onChange={(event) =>
                setValue("week", parseInt(event.target.value))
              }
            >
              <option value={1}>First</option>
              <option value={2}>Second</option>
              <option value={3}>Third</option>
              <option value={4}>Fourth</option>
            </select>
            <select
              name="day"
              aria-label="Day of the week"
              className={errors.day && "invalid"}
              placeholder="On..."
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
          <input
            name="time"
            type="time"
            aria-label="Call at this time"
            className={errors.time && "invalid"}
            placeholder="At this time"
            ref={register({ required: true })}
          />
          <input
            name="phone"
            type="tel"
            aria-label="Your phone number"
            placeholder="Great, where do we reach you?"
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
