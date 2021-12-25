type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map((name, index) => {
                return <p key={index}>{`${name.first} ${name.last}`}</p>
            })}
        </div>
    )
}