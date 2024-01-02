import { useState } from "react";
import QuesList from "./questionList";

const faqData = [
    { id : 1,question: 'What is the purpose of this website?', answer: 'This website aims to provide information about various topics and answer common questions.' },
    { id: 2, question: 'How can I contact support?', answer: 'You can contact our support team by sending an email to support@example.com.' },
    { id: 3, question: 'Is there a mobile app available?', answer: 'Currently, we do not have a dedicated mobile app, but our website is mobile-friendly.' }
];

export default function Questions() {
    const [active, setActive] = useState(null);
    function handleClick(event) {
        
        (active == event.currentTarget.id) ? setActive(null):setActive(event.currentTarget.id);
    }
    return <div className="questions">{
        faqData.map((quesList) => {
            return <QuesList key={quesList.id} active={active} handleClick={handleClick} quesId={quesList.id} question={quesList.question} answer={quesList.answer} ></QuesList>
        })
    }
    </div>
}