import React from "react";
import "../styles/global.css";
import AddToTheList from "./AddToTheList";
import Header from "./Header";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <AddToTheList />
            </main>
        </>
    );
};

export default App;
