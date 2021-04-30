import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./App.css"
import Input from "./Input";
function App() {
  const [massege, setMessege] = useState("");
  const [post, setPost] = useState([])
  const classNames = ['App'];
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    classNames.push('submitted');
  }
  function submitClickCallback() {
    setSubmitted(true);
  }
  function formSubmitCallback(event) {
    const data = new FormData(event.target);
    const user = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      gender: data.get('gender'),
      email: data.get('email'),
      phone: data.get('phone'),
      dateOfBirth: data.get('dateOfBirth'),
      languages: data.get('lastName'),
      education: data.get('education'),
      address: data.get('address'),
      city: data.get('city'),
      zip: data.get('zip'),
      // ...
    }
    axios.post('https://home-work-8eb2a-default-rtdb.firebaseio.com//data.json', {
      user
    })
    //  useEffect(() =>{
    //    axios.get('https://home-work-8eb2a-default-rtdb.firebaseio.com//data.json')
    //    .then((response) =>{
    //      const test = response.data;
    //      setPost(test)
    //    }, [massege])
    //    const result = post.map((post) =>(
    //      <table>
    //        <h2>{post.user}</h2>
           
    //      </table>
    //    ))
    //  })
    event.preventDefault();
  }
  return (
    <div>
    <form className={classNames.join(" ")} onSubmit={formSubmitCallback}>
      <div>
        <label for="firstName">First name</label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          pattern="[a-zA-Z ]+"
          validity="hahoho"
          required
        />
        <span className="error">First name is required.</span>
      </div>
      <div>
        <label for="lastName">Last name</label>
        <Input type="text"
          name="lastName"
          id="lastName"
          pattern="[a-zA-Z ]+"
          required />
        <span className="error">Last name is required.</span>
      </div>
      <div>
        <label for="email">Email</label>
        <Input type="email"
          name="email"
          id="email"
          pattern="[a-zA-Z0-9._-+]+@[a-zA-Z0-9._-]+\.com"// \. обозначает точку, а просто . может обозначать все от букв до цифр и так далее
          required />
        <span className="error">Valid email is reqiured.</span>
      </div>
      <div>
        <label for="phone">Phone</label>
        <Input type="text"
          name="phone"
          id="phone"
          pattern="(0|\+996)(777|555|700)[0-9]{6}"
          required />
        <span className="error">Valid phone number is required.</span>
      </div>
      <div>
        <label for="dateOfBirth">Date of birth</label>
        <Input type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          pattern="[0-9]"
          required />
        <span className="error">Date of birth is required.</span>
      </div>
      <div>
        <label for="gender">Gender</label>
        <Input name="gender"
          required
          type="select"
          validity="Hihihi"
          options={{
            "": "- Select -",
            "male": "Male",
            "female": "Female",
          }}
          id="gender" />
        <span className="error">Gender is required.</span>
      </div>
      <div>
        <label>Education</label>
        <div>
          <label for="school">
            <Input type="radio"
              name="education"
              id="school"
              value="school"
              required /> School
         </label>
        </div>
        <div>
          <label for="university">
            <Input type="radio"
              name="education"
              id="university"
              value="university"
              required /> University
         </label>
        </div>
      </div>
      <div>
        <label>Languages</label>
        <div>
          <label for="english">
            <Input type="checkbox"
              name="language"
              id="english"
              value="english" /> English
         </label>
        </div>
        <div>
          <label for="kyrgyz">
            <Input type="checkbox"
              name="language"
              id="kyrgyz"
              value="kyrgyz" /> Kyrgyz
         </label>
        </div>
        <div>
          <label for="russian">
            <Input type="checkbox"
              name="language"
              id="russian"
              value="russian" /> Russian
         </label>
        </div>
      </div>
      <div>
        <label for="address">Address</label>
        <Input type="text"
          name="address"
          id="address"
          required />
        <span className="error">Address is required.</span>
      </div>
      <div>
        <label for="city">City</label>
        <Input type="text"
          name="city"
          id="city"
          required />
        <span className="error">City is re

</span>
      </div>
      <div>
        <label for="zip">ZIP</label>
        <Input type="text"
          pattern="72[0-9]{4}"
          required />
        <span className="error">ZIPPPP must be in 72xxxx format.</span>
      </div>
      <div>
        <button onClick={submitClickCallback}>Submit</button>
      </div>
     
    </form>
    
     </div>
  );
}
export default App;





// import { useState } from "react";
// import axios from 'axios';
// import './App.css';
// import Input from "./Input";
// function App() {
//   function formSubmitCallback(event) {
//     const data = new FormData(event.target);
//     const user = {
//       firstName: data.get('firstName'),
//       lastName: data.get('lastName'),
//       gender: data.get('gender'),
//       email: data.get('email'),
//       phone: data.get('phone'),
//       dateOfBirth: data.get('dateOfBirth'),
//       languages: data.get('lastName'),
//       education: data.get('education'),
//       address: data.get('address'),
//       city: data.get('city'),
//       zip: data.get('zip'),
//       // ...
//     }
//     axios.post('https://home-work-8eb2a-default-rtdb.firebaseio.com//data.json', {
//       user
//     })
//     console.log(user);
//     event.preventDefault();
//   }
//   return (
//     <form className="App" onSubmit={formSubmitCallback}>
//       <div>
//         <label for="firstName">First name</label>
//         <Input type="text"
//           name="firstName"
//           id="firstName"
//           required />
//           <span  className="error">First Name</span>
//       </div>
//       <div>
//         <label for="lastName">Last name</label>
//         <Input type="text"
//           name="lastName"
//           id="lastName"
//           required />
//            <span  className="error">Lirst Name</span>
//       </div>
//       <div>
//         <label for="email">Email</label>
//         <Input type="email"
//           name="email"
//           id="email" />
//            <span  className="error">Email</span>
//       </div>
//       <div>
//         <label for="phone">Phone</label>
//         <Input type="tel"
//           name="phone"
//           id="phone"
//           minlength="10"
//           maxlength="10"
//           required />
//            <span  className="error">Phone</span>
//       </div>
//       <div>
//         <label for="dateOfBirth">Date of birth</label>
//         <Input type="date"
//           name="dateOfBirth"
//           id="dateOfBirth"
//           required />
//            <span  className="error">Date of birth day</span>
//       </div>
//       <div>
//         <label for="gender">Gender</label>
//         <select name="gender"
//           required
//           id="gender">
//           <option value="">- Select -</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//         <span  className="error">Gender</span>
//       </div>
//       <div>
//         <label>Education</label>
//         <div>
//           <label for="school">
//             <input type="radio"
//               name="education"
//               id="school"
//               value="school"
//               required /> School
//           </label>
//         </div>
//         <div>
//           <label for="university">
//             <input type="radio"
//               name="education"
//               id="university"
//               value="university"
//               required /> University
//           </label>
//         </div>
//       </div>
//       <div>
//         <label>Languages</label>
//         <div>
//           <label for="english">
//             <input type="checkbox"
//               name="language"
//               id="english"
//               value="english" /> English
//           </label>
//         </div>
//         <div>
//           <label for="kyrgyz">
//             <input type="checkbox"
//               name="language"
//               id="kyrgyz"
//               value="kyrgyz" /> Kyrgyz
//           </label>
//         </div>
//         <div>
//           <label for="russian">
//             <input type="checkbox"
//               name="language"
//               id="russian"
//               value="russian" /> Russian
//           </label>
//         </div>
//       </div>
//       <div>
//         <label for="address">Address</label>
//         <input type="text"
//           name="address"
//           id="address"
//           required />
//       </div>
//       <div>
//         <label for="city">City</label>
//         <input type="text"
//           name="city"
//           id="city"
//           required />
//       </div>
//       <div>
//         <label for="zip">ZIP</label>
//         <input type="number"
//           name="zip"
//           id="zip"
//           min="720000"
//           max="740000"
//           pattern="72[0-9]{4}"
//           required />
//            <span  className="error">Должен быть код страны 72XXXXX</span>
//       </div>
//       <div>
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// }
// export default App;
// import { useState } from "react";

// function App() {
//   function formSubmitCallback(event) {
//     const data = {
//       firstName: event.target.form[0].value,
//       // ...
//     }
//     event.preventDefault();
//   }
//   return (
//     <form className="App">
//       <div>
//         <label for="firstName">First name</label>
//         <input type="text"
//           name="firstName"
//           id="firstName" />
//       </div>
//       <div>
//         <label for="lastName">Last name</label>
//         <input type="text"
//           name="lastName"
//           id="lastName" />
//       </div>
//       <div>
//         <label for="email">Email</label>
//         <input type="email"
//           name="email"
//           id="email" />
//       </div>
//       <div>
//         <label for="phone">Phone</label>
//         <input type="tel"
//           name="phone"
//           id="phone" />
//       </div>
//       <div>
//         <label for="dateOfBirth">Date of birth</label>
//         <input type="date"
//           name="dateOfBirth"
//           id="dateOfBirth" />
//       </div>
//       <div>
//         <label for="gender">Gender</label>
//         <select name="gender"
//           id="gender">
//           <option>- Select -</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//       </div>
//       <div>
//         <label>Education</label>
//         <div>
//           <label for="school">
//             <input type="radio"
//               name="education"
//               id="school"
//               value="school" /> School
//           </label>
//         </div>
//         <div>
//           <label for="university">
//             <input type="radio"
//               name="education"
//               id="university"
//               value="university" /> University
//           </label>
//         </div>
//       </div>
//       <div>
//         <label>Languages</label>
//         <div>
//           <label for="english">
//             <input type="checkbox"
//               name="language"
//               id="english"
//               value="english" /> English
//           </label>
//         </div>
//         <div>
//           <label for="kyrgyz">
//             <input type="checkbox"
//               name="language"
//               id="kyrgyz"
//               value="kyrgyz" /> Kyrgyz
//           </label>
//         </div>
//         <div>
//           <label for="russian">
//             <input type="checkbox"
//               name="language"
//               id="russian"
//               value="russian" /> Russian
//           </label>
//         </div>
//       </div>
//       <div>
//         <label for="address">Address</label>
//         <input type="text"
//           name="address"
//           id="address" />
//       </div>
//       <div>
//         <label for="city">City</label>
//         <input type="text"
//           name="city"
//           id="city" />
//       </div>
//       <div>
//         <label for="zip">ZIP</label>
//         <input type="number"
//           name="zip"
//           id="zip" />
//       </div>
//       <div>
//         <button type="submit" onClick={formSubmitCallback}>Submit</button>
//       </div>
//     </form>
//   );
// }
// export default App;
// import { useState } from 'react';
// import './App.css';

// function App() {

//   const [firstName, setFirstName] = useState("")
//   const [lastName, setLastName] = useState("")
//   const [date, setDate] = useState("")
//   const [lenguages, setLenguages] = useState("")
//   const [jender, setJender] = useState("")
//   const [address, setAddress] = useState("")
//   const [city, setCity] = useState("")
//   const [email, setEmail] = useState("")
//   const [tel, setTel] = useState("")
//   const [education, setEducation] = useState("")
//   const [zip, setZip] = useState("")

//   return (
//     <div className="App">
//       <div>
//         <label for="firstName"> first Name</label>
//         <input type="text" name="firstName" id="firstName" value={firstName} onChange={({target}) => setFirstName(target.value)}/>
//       </div>
//       <div>
//         <label for="lastName">last Name</label>
//         <input type="text" name="lastName" id="lastName" value={lastName} onChange={({ target }) => setLastName(target.value)} /> 
//       </div>
//       <div>
//         <label for="date">date of bitrth</label>
//         <input type="date" name="date" id="date" value={date} onChange={({ target }) => setDate(target.value)} />
//       </div>
//       <div>
//         {/* <label for="Languages">Languages</label> */}
//        <label >English</label>
//         <input type="radio" name="english" id="english" value="english" onChange={({ target }) => setLenguages(target.value)} /> english
//         <input type="radio" name="browser" value="rassia" onChange={({ target }) => setLenguages(target.value)} /> rassia
//         <input type="radio" name="browser" value="kyrgyz" onChange={({ target }) => setLenguages(target.value)} /> kyrgyz
//       </div>
//       <div>
//         jender
//         <select onChange={({ target }) => setJender(target.value)}>
//           <option>man</option>
//           <option>woman</option>
//         </select>
//       </div>
//       <div>
//         <input type="text" onChange={({ target }) => setAddress(target.value)} /> address
//       </div>
//       <div>
//         <input type="text" onChange={({ target }) => setCity(target.value)} /> city
//       </div>
//       <div>
//         <input type="email" id="email" onChange={({ target }) => setEmail(target.value)} /> email
//       </div>
//       <div>
//         <input type="tel" id="phone" name="phone" onChange={({ target }) => setTel(target.value)} /> phone
//       </div>
//       <div>
//         <input type="radio" name="educational" value="shcool" onChange={({ target }) => setEducation(target.value)} /> shcool
//         <input type="radio" name="educational" value="university" onChange={({ target }) => setEducation(target.value)} /> university
//       </div>
//       <div>
//         <input type="number" onChange={({ target }) => setZip(target.value)} /> zip
//       </div>
//       {firstName}
//       {lastName}
//       {date}
//       {lenguages}
//       {jender}
//       {address}
//       {city}
//       {email}
//       {tel}
//       {education}
//       {zip}
//     </div>
//   );
// }

// export default App;