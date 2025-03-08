import { BasicButtonComponent } from '../buttons/basic-button-component';

import './card.component.css'

export const CardComponent = () => {
  const cardData = [
    {
      title: "Code Explorer",
      text: "Diving into the world of programming, one line at a time.",
      img: "https://plus.unsplash.com/premium_photo-1740992237716-2bb9f560cc6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      alertMessage: "Keep exploring new coding adventures!"
    },
    {
      title: "Debugging Ninja",
      text: "Finding bugs faster than they appear!",
      img: "https://images.unsplash.com/photo-1741335661631-439871f2b3b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
      alertMessage: "Squashing bugs like a pro!"
    },
    {
      title: "React Enthusiast",
      text: "Building dynamic UI components with React and TypeScript.",
      img: "https://images.unsplash.com/photo-1734671223970-16adb03bedb7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
      alertMessage: "React makes UI development fun!"
    },
    {
      title: "AI & Machine Learning",
      text: "Exploring neural networks and deep learning.",
      img: "https://images.unsplash.com/photo-1735025679581-95eb998f859f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
      alertMessage: "AI is shaping the future!"
    },
    {
      title: "Backend Wizard",
      text: "Creating powerful REST APIs and database solutions.",
      img: "https://images.unsplash.com/photo-1736462832668-551150b5e5b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
      alertMessage: "Building scalable backend solutions!"
    }
  ];

  return (
    <>

      {cardData.map((card, index) => (
        <div key={index} className='card'>
          <img className="card-image" src={card.img} alt="profilePicture"></img>
          <h1 className='card-title'>{card.title}</h1>
          <p className='card-text'>{card.text}</p>
          <BasicButtonComponent text="click me" alertMessage={card.alertMessage} />
        </div>
      ))
      }
    </>
  )
}