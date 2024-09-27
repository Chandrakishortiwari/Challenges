import React from 'react';
import '../Task/style.css'

function Task1() {
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <Card />
                    </div>
                    <div className="col ">
                        Column2
                    </div>
                    <div className="col">
                        Column3
                    </div>
                </div>
            </div>
        </>
    );
}

export default Task1;

 function Card(){
    return(
     
        <div className="card color" style={{ width: '18rem' }}>
                            {/* Replace "..." with a valid image source */}
                            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" />
                            <div className="card-body">
                                <div className='del-card'>X</div>
                                <h2 className="card-title ">Heading Section </h2>
                                <p className="card-text ptext">
                                    Some quick example text to build on the card title t.
                                </p>
                                <p className="card-text">Mon, 27 Sep 2024 14:57 GMT </p>
                            </div>
                        </div>

    )
 }