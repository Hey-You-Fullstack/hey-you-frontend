import React, { useState } from "react";

import API from "../../api";
import { Bubble } from "../";
import "./RegistrationForm.css";

interface RegistrationFormProps {}

const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const [name, setName] = useState<string>("");
  const [friend, setFriend] = useState<string>("");
  const [repeat, setReapeat] = useState<number>(1);
  const [day, setDay] = useState<number>(0);
  const [time, setTime] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  const handleReset = () => {
    setName("");
    setFriend("");
    setReapeat(1);
    setDay(0);
    setTime("");
    setNumber("");
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // TODO: validate fields

    event.preventDefault();
    try {
      const result = await API.post("/user", {
        name,
        friend_name: friend,
        week: repeat,
        day,
        time,
        phone: number,
      });

      console.log(result);
      handleReset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Bubble index={0} from="us" style={{ width: "80%" }}>
      <form>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="What is your name?"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="friend">Friend</label>
        <input
          id="friend"
          type="text"
          placeholder="Who do you want to keep in touch with?"
          value={friend}
          onChange={(event) => setFriend(event.target.value)}
        />
        <label htmlFor="repeat">Repeat every</label>
        <select
          id="repeat"
          placeholder="Every..."
          value={repeat}
          onChange={(event) => setReapeat(parseInt(event.target.value))}
        >
          <option value={1}>First</option>
          <option value={2}>Second</option>
          <option value={3}>Third</option>
          <option value={4}>Fourth</option>
        </select>
        <label htmlFor="day"></label>
        <select
          id="day"
          placeholder="On..."
          value={day}
          onChange={(event) => setDay(parseInt(event.target.value))}
        >
          <option value={0}>Monday</option>
          <option value={1}>Tuesday</option>
          <option value={2}>Wednesday</option>
          <option value={3}>Thursday</option>
          <option value={4}>Friday</option>
          <option value={5}>Saturday</option>
          <option value={6}>Sunday</option>
        </select>
        <label htmlFor="time">Time</label>
        <input
          id="time"
          type="time"
          placeholder="At this time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
        <label htmlFor="number">Number</label>
        <input
          id="number"
          type="tel"
          placeholder="Great, where do we reach you?"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </Bubble>
  );
};

export default RegistrationForm;
