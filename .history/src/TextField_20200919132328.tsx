import React from 'react'

interface Person {
    firstName: string;
    lastName: string;
}

interface Iprops {
    text: string;
    ok: boolean;
    count: number;
    action: () => string;
    person: Person;
}

const TextField: React.FC<Iprops> = () => {
    return (
        <div>
            <input type="text"/>
        </div>
    )
}

export default TextField
