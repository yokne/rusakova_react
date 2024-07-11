import * as s from "./App.module.css";
import { restaurants } from "../materials/mock";

function App() {
    return (
        <div className={s.root}>
            <div className="restaurants-container">
                <h1>Рестораны</h1>
                <ul className="rest-list">
                    <li className="rest-item">
                        <h2 className="rest-name">{restaurants[0].name}</h2>
                        <h3 className="subtitle">Меню</h3>
                        <ul className="list">
                            <li className="item">{restaurants[0].menu[0].name}</li>
                            <li className="item">{restaurants[0].menu[1].name}</li>
                            <li className="item">{restaurants[0].menu[2].name}</li>
                        </ul>
                        <h3 className="subtitle">Отзывы</h3>
                        <ul className="list">
                            <li className="item">{restaurants[0].reviews[0].text}</li>
                            <li className="item">{restaurants[0].reviews[1].text}</li>
                        </ul>
                    </li>

                    <li className="rest-item">
                        <h2 className="rest-name">{restaurants[1].name}</h2>
                        <h3 className="subtitle">Меню</h3>
                        <ul className="list">
                            <li className="item">{restaurants[1].menu[0].name}</li>
                            <li className="item">{restaurants[1].menu[1].name}</li>
                        </ul>
                        <h3 className="subtitle">Отзывы</h3>
                        <ul className="list">
                            <li className="item">{restaurants[1].reviews[0].text}</li>
                            <li className="item">{restaurants[1].reviews[1].text}</li>
                            <li className="item">{restaurants[1].reviews[2].text}</li>

                        </ul>
                    </li>

                    <li className="rest-item">
                        <h2 className="rest-name">{restaurants[2].name}</h2>
                        <h3 className="subtitle">Меню</h3>
                        <ul className="list">
                            <li className="item">{restaurants[2].menu[0].name}</li>
                            <li className="item">{restaurants[2].menu[1].name}</li>
                            <li className="item">{restaurants[2].menu[2].name}</li>
                        </ul>
                        <h3 className="subtitle">Отзывы</h3>
                        <ul className="list">
                            <li className="item">{restaurants[2].reviews[0].text}</li>
                        </ul>
                    </li>

                    <li className="rest-item">
                        <h2 className="rest-name">{restaurants[3].name}</h2>
                        <h3 className="subtitle">Меню</h3>
                        <ul className="list">
                            <li className="item">{restaurants[3].menu[0].name}</li>
                            <li className="item">{restaurants[3].menu[1].name}</li>
                        </ul>
                        <h3 className="subtitle">Отзывы</h3>
                        <ul className="list">
                            <li className="item">{restaurants[3].reviews[0].text}</li>
                            <li className="item">{restaurants[3].reviews[1].text}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
