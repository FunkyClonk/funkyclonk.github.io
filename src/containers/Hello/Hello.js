import React, {useContext} from "react";
import emoji from "react-easy-emoji";

export default function Greeting() {
    return (
        <div className="hello-main" id="hello">
            <h1>
                Hello, I'm FunkyClonk
                <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
        </div>
    );
}