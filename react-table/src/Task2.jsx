import React, { createContext, useContext, useState } from "react";
import "./Task2.css";
const sub = createContext("");
const gmail = createContext("");
const num = createContext("");
const inClass = createContext("");
const initialValues = {
  firstName: "",
  lastName: "",
  middleName: "",
  age: "",
  email: "",
  phone: "",
  subject: "",
  class: "",
};
const Task2 = () => {
  const [formData, setFromData] = useState(initialValues);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState(" ");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [isValidAge, setIsValidAge] = useState();
  const [subject, setSubject] = useState("");
  const [isclass, setIsClass] = useState("");
  const dobFormaterChanger = (age) => setDob(age.replaceAll("-", "/"));

  const dobHandle = (e) => {
    dobFormaterChanger(e);
    const year = e.split("-")[0];
    const curYear = new Date().getFullYear();
    setIsValidAge(curYear - year);
  };

  const updateSubject = (sub) => setSubject(sub);
  const updateEmail = (sub) => setEmail(sub);
  const updateNumber = (sub) => setPhone(sub);
  const updateClass = (sub) => setIsClass(sub);

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <sub.Provider value={{ subject, updateSubject }}>
      <gmail.Provider value={{ email, updateEmail }}>
        <num.Provider value={{ phone, updateNumber }}>
          <inClass.Provider value={{ isclass, updateClass }}>
            <form onSubmit={(e) => submitHandle(e)}>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                required
              />{" "}
              <br />
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                placeholder="Middle Name"
                // value={middleName}
              />{" "}
              <br />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
                // value={lastName}
              />{" "}
              <br />
              <input
                type="Date"
                onChange={(e) => dobHandle(e.target.value)}
                placeholder="DOB"
                max="2022-12-31"
                min="1960-01-01"
                required
                name="age"
                value={dob.age}
              />{" "}
              <br />
              {isValidAge > 0 && <CheckAge valid={isValidAge} />}
            </form>
            <div className="cards">
              <div className="card" style={{ backgroundColor: "salmon" }}>
                <h2>{firstName + " " + middleName + " " + lastName}</h2>
                <h2>{isValidAge}</h2>
                <h2>{dob}</h2>
                {<h2>{phone}</h2> && (
                  <EmailClassSubContainer
                    email={email}
                    subject={subject}
                    isclass={isclass}
                  />
                )}
              </div>
            </div>
          </inClass.Provider>
        </num.Provider>
      </gmail.Provider>
    </sub.Provider>
  );
};
const CheckAge = ({ valid }) => {
  return <>{valid >= 18 ? <AgeGraterThan18 /> : <AgeLessThan18 />}</>;
};
const EmailClassSubContainer = (props) => {
  const { email, subject, isclass } = props;
  return (
    <>
      <h2>{email}</h2>
      <h2>{subject}</h2>
      <h2>{isclass}</h2>
    </>
  );
};
const AgeLessThan18 = () => {
  const { email, updateEmail } = useContext(gmail);
  return (
    <>
      <input
        onChange={(e) => updateEmail(e.target.value)}
        placeholder="Email"
        type="email"
        required
      />
      <br />
      <button type="Submit">Submit</button>
    </>
  );
};
const AgeGraterThan18 = () => {
  const { isclass, updateClass } = useContext(inClass);
  const [inWhichClass, setInWhichClass] = useState("");
  return (
    <>
      <input placeholder="Phone Number" type="Number" maxLength="10" required />
      <br />
      <select
        onChange={(e) => {
          setInWhichClass(e.target.value);
          updateClass(e.target.value);
        }}
      >
        <option value="">Class</option>
        <option value="8-10">8-10th</option>
        <option value="10-12">10-12th</option>
        <option value="collage">Collage</option>
      </select>
      {inWhichClass && <SubjectContainer value={inWhichClass} />}

      <br />
      <button>Submit</button>
    </>
  );
};

const SubjectContainer = ({ value = "" }) => {
  const { subject, updateSubject } = useContext(sub);
  const class8to10 = ["Maths", "Science", "English", "Computer", "social"];
  const class10to12 = ["Phy", "chem", "bio", "maths"];
  const classCollage = ["Btech", "BSC", "BBA"];
  //   (value);
  switch (value) {
    case "8-10":
      return (
        <>
          <select onChange={(e) => updateSubject(e.target.value)}>
            {class8to10.map((elm) => {
              return <option value={elm}>{elm}</option>;
            })}
          </select>
        </>
      );

      break;
    case "10-12":
      return (
        <>
          <select onChange={(e) => updateSubject(e.target.value)}>
            {class10to12.map((elm) => {
              return <option value={elm}>{elm}</option>;
            })}
          </select>
        </>
      );

      break;
    case "collage":
      return (
        <>
          <select onChange={(e) => updateSubject(e.target.value)}>
            {classCollage.map((elm) => {
              return <option value={elm}>{elm}</option>;
            })}
          </select>
        </>
      );

      break;

    default:
      <div>Wrong input</div>;
      break;
  }
};
export default Task2;
