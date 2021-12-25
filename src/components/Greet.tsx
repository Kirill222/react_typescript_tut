type GreetProps = {
    name: string;
}

export const Greet = ({name}: GreetProps) => {
    return (
        <div>
            <h2>Hi {name}</h2>
        </div>
    )
}