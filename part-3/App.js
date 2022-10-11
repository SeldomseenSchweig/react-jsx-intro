const App = ( ) => {


    return (<div> 
        <Person name = "MadMan" age={21} hobbies={["sking","swimming"]} />
        <Person name = "mary" age={12} hobbies={["running","jumping"]}  />
        <Person name = "Moonboots" age={18} hobbies={["lopping","reading"]} />
        </div>
    )
} 

ReactDOM.render(<App />, document.getElementById("root"));

