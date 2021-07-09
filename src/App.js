import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect,useContext} from 'react'
// function Counter({initialCount}) {
//     console.log(initialCount)
//     const [count, setCount] = useState(initialCount);
//     return (
//         <>
//             Count: {count}
//             <button onClick={() => setCount(initialCount)}>Reset</button>
//             <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
//         </>
//     );
// }
// function App() {
//
//   return (
//     <div className="App">
//         {Counter({initialCount:4})}
//     </div>
//   );
// }

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};
//react中的状态共享的几种方式

console.log(1111)
const ThemeContext = React.createContext(themes.light);

function App() {
    this.myRef=React.createRef()
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar ref={this.myRef} />
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {

    return (
        <div>
            <ThemedButton   />
        </div>
    );
}

function ThemedButton() {
    console.log(ThemeContext)
    const theme = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
    );
}
export default App;
