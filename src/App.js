// // import { useState } from "react";

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