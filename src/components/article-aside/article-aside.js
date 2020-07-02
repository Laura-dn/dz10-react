import React from "react";

import "./article-aside.css";

function ArticleAside(props) {
    let imgSrc = 'https://randomuser.me/api/portraits/' + props.num;
    
    return(
        <article className="card col-2 bg-dark">
            <img className="d-inline-block float-left" src={ imgSrc } alt="Card" />
            <div className="text-white">
                
                dfsfgdg dsfg dfg df dg dsg f
                <a href="#" className="text-right m-2">By Reporter Name</a>
            </div>
        </article>
    );    
}

export default ArticleAside;
