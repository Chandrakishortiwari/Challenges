import React from 'react';
import '../Task/style.css';


const cardData = [
    { id: 1, title: "Card 1", text: "Some text for card 1" },
    { id: 2, title: "Card 2", text: "Some text for card 2" },
    { id: 3, title: "Card 3", text: "Some text for card 3" },
    { id: 4, title: "Card 4", text: "Some text for card 4" },
    { id: 5, title: "Card 5", text: "Some text for card 5" },
    { id: 6, title: "Card 6", text: "Some text for card 6" }
];

function Task1() {
    return (
        <>
        <div className='main'>
            <div className="container text-center">
                <div className="row">
                {cardData.map((card) => (
                            <div className="col-12 col-sm-6 col-md-4 mb-4" key={card.id}>
                                <Card title={card.title} text={card.text} />
                            </div>
                        ))}

                </div>
            </div>

            </div>
        </>
    );
}

export default Task1;

 function Card({ title, text}){
    return(
     
        <div className="card color" style={{ width: '100%' }}>
                            {/* Replace "..." with a valid image source */}
                            <div className='img-con'></div>
                            <img src="https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8113.jpg?w=740&t=st=1727443904~exp=1727444504~hmac=152e360476eb5011c0fb88468d1f145d353139ba1791aff11727ab41ddaef8e3" className="card-img-top" alt="Placeholder" />
                            <div className="card-body">
                                <div className='del-card'>X</div>
                                <h2 className="card-title ">{ title} </h2>
                                <p className="card-text ptext">{text}</p>
                                <p className="card-text">Mon, 27 Sep 2024 14:57 GMT </p>
                            </div>
                        </div>

    )
 }