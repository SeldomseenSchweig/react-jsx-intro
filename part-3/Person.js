const Person = (props) => {

    return (
        <div>
            <p>Learn some information about this person. {props.name.length > 8 ? props.name.slice(0,8):props.name} is {props.age} years old.”</p>
            {props.age > 18 ? <h3>Please go vote</h3> :  <h3>you must be 18 </h3>}
            <ul>
      { props.hobbies.map(hobby => <li>{hobby}</li>) }
      </ul>
    
        </div>
    )
       
    


}