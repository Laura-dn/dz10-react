import React, { Component } from "react";
import Header from "../header";
import Aside from "../aside";

import "./app.css";


export default class App extends Component {
    state = {
        
    };

    render() {
        return (
            <>
                <Header />
                <main className="">
                    <Aside />
                    {/* <AsideRight /> */}
                </main>
            </>
        );
    }
}
