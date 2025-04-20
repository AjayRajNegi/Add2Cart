import { doc, setDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAbY5XvyshMyC7PZbwh-roJf1705Yjn7kI",
  authDomain: "stanza2cart.firebaseapp.com",
  projectId: "stanza2cart",
  storageBucket: "stanza2cart.firebasestorage.app",
  messagingSenderId: "234021511731",
  appId: "1:234021511731:web:b429c948d090ff2aca7946",
  measurementId: "G-WXEQNF0FEF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDay();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const date = `${day}-${month}-${year}`;
const time = `${hours}:${minutes}:${seconds}`;

const InputForm = ({ selectedItems, bill }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!input1.trim()) {
      alert("Document name cannot be empty!");
      return;
    }

    try {
      await setDoc(doc(db, "orders", input1), {
        name: input1,
        location: input2,
        mobileNo: input3,
        items: selectedItems,
        bill: bill,
        date: date,
        time: time,
      });
      fetch("http://localhost:5000/api/send-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: input1,
          location: input2,
          mobileNo: input3,
          items: selectedItems,
          bill: bill,
          date: date,
          time: time,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      navigate("/order");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <b>Name</b> <br />
      <input
        type="text"
        placeholder="Enter Your Name"
        className="border-2 p-2 rounded-md md:w-[500px]"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <br />
      <b>Location</b> <br />
      <input
        type="text"
        placeholder="Enter location"
        className="border-2 p-2 rounded-md md:w-[500px]"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <br />
      <b>WhatsApp no.</b> <br />
      <input
        type="number"
        placeholder="Enter Your Number"
        className="border-2 p-2 rounded-md md:w-[500px] mb-5"
        value={input3}
        onChange={(e) => setInput3(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default InputForm;
