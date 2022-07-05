import React from "react";
import "../styles/global.css";
import AddToTheList from "./AddToTheList";
import Header from "./Header";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <AddToTheList />
                </section>
            </main>
        </>
    );
};

export default App;
