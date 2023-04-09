import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import  UserCard from './components/UserCard'
// const BlackCard = ({ name, number, city }) => (
//  <div style={{display: "flex", flexDirection: "row"}}>
//   <div style={{ backgroundColor: "rgb(202, 201, 201)", padding: "15px", width: "170px", color: "white", borderRadius: "12px", border: "1px solid #ccc"}}>
//     <img src={photo} alt="photo" style={{ width: "50px", margin: "0 auto" }} />
//     <h4>{name}</h4>
//     <h4>{number}</h4>
//     <h4>{city}</h4>
//   </div>
//   </div>
// );
// style={{ backgroundColor: "grey", padding: "15px", width: "100px", color: "white" }}
//style={{ width: "50px", margin: "0 auto" }}
const InputForm = () => {
  const [cards, setCards] = useState([]);
   const [user, setUser] = useState({
    name:'',
    city:'',
    number:'',
    avatar:'',
   })
  const enteredValues = (e) => {
    setUser((prev)=>{ return {...prev, [e.target.name]: e.target.value}} )
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCards((prev)=>[...prev, user])
  };
  // const handleDelete = () => {
  //   setCards(cards.slice(0, -1));
  // };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        name='avatar'
          type="text"
          placeholder="photo URL"
          value={user.avatar}
          onChange={(e) => enteredValues(e)}
        />
        <input
        name='name'
          type="text"
          placeholder="name"
          value={user.name}
          onChange={(e) => enteredValues(e)}
        />
        <input 
          name='number'
          type="text"
          placeholder="number"
          value={user.number}
          onChange={(e) => enteredValues(e)}
        />
        <input
        name='city'
          type="text"
          placeholder="city"
          value={user.city}
          onChange={(e) => enteredValues(e)}
        />
        <button type="submit"   className='right'>Submit</button>
      </form>
      {/* <button onClick={handleDelete} className='wrong'>Delete Last</button> */}
      {cards.map((card, i) => (
        <UserCard key={i} photoUrl= {card.avatar}  name={card.name}
        phoneNumber={card.number}  currentCity={card.city}/>
      ))}
    </div>
  );
};
<UserCard />
export default InputForm;