function Person(props) {
    let voteText = props.age >= 18 ? "go vote" : "go study";

    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>
                learn some information about this person:
            </p>
            <ul>
                <li>Name: {props.name.slice(0.6)}</li>
                <li>age: {props.age}</li>
                <ul>
                    hobbies :{hobbies}
                </ul>
            </ul>
            <h3> {voteText} </h3>
        </div>
    );
}