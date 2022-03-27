import * as React from "https//cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https//cdn.skypack.dev/react-dom@17.0.1";

function App(){
    return(
        <div className = "wrapper">
            <Card 
            img="https://www.google.com/search?q=sunset&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjThpLU8eX2AhWbh_0HHfrkBPAQ_AUoAXoECAEQAw&biw=868&bih=637&dpr=2#imgrc=3u8K4ZBP7u2rrM"
            title="City Lights"
            subtitle = "The city that never sleeps"
            description = "NY, the largest city in the US"
            />
        </div>
    )
}

function Card(props){
    return(
        <div className = "card">
            <div className= "card__body">
                <img src= {props.img}>
                <h2 className="date">{new Date().toLocaleString() + ""}</h2>
                <h1>PHOTOS</h1>
                </img>
                <h3>{props.title}</h3>
                <h4>{props.subtitle}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))
