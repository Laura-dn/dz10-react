import React from "react";
import ArticleAside from "../article-aside/article-aside";

import "./aside.css";


function Aside() {
    return(
        <aside className="">
            <h6 className="bg-danger col-2">FROM OUR CORRESPONDENTS</h6>
            <ArticleAside 
                num = { "women/44.jpg" } />
            <ArticleAside 
                num = { "men/13.jpg" } />
            <ArticleAside  
                num = { "men/19.jpg" } />
            <ArticleAside 
                num = { "women/33.jpg" } />
            <ArticleAside 
                num = { "women/15.jpg" } />
            <ArticleAside  
                num = { "men/22.jpg" } />
            <ArticleAside 
                num = { "women/26.jpg" } />
            <ArticleAside 
                num = { "women/41.jpg" } />
        </aside>
    );    
}

export default Aside;
