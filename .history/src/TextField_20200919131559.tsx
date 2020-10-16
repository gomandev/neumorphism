import React from 'react'

interface Iprops {
    text: string;
}

const TextField: React.FC<Iprops> = () => {
    return (
        <div>
            <input type="text"/>
        </div>
    )
}

export default TextField
