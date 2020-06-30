import React from "react";

import "./aside.css";

function Aside() {
    const arr = [];

    fetch('https://randomuser.me/api/?results=10')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for(let i = 0; i < 8; i++) {
            let obj = {
                imgSrc: data.results[i].picture.large,
                name: data.results[i].name.first + " " + data.results[i].name.last,
                someText: "Very interesting text from this author"
            };

            arr.push(obj);
        }
        
        setInfo();
    });

    function setInfo() {
        return(
            <aside className="">
                <h6 className="bg-danger col-2">FROM OUR CORRESPONDENTS</h6>
                {
                    this.arr.map(
                        (el, index) => (
                            <article className="card mb-3 col-2 bg-dark">
                                <img className="" src={ el.imgSrc} alt="Card" />
                                <div className="card-body">
                                    { el.someText }
                                    <a href="#" className="text-right m-2">{ el.name }</a>
                                </div>
                            </article>
                        )
                    )
                }
                {/* <article className="card mb-3 col-2 bg-dark">
                    <img className="" src="" alt="Card image" />
                    <div className="card-body">
                        <a href="#" className="text-right m-2"><span className="badge badge-success">READ MORE</span></a>
                    </div>
                </article> */}
            </aside>
        );
    }

    
}

export default Aside;
