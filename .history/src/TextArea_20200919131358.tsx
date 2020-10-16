import React from 'react'

interface Iprops {
    text: string;
}

const TextArea: React.FC<Iprops> = () => {
    return (
        <div>
            <input type="text"/>
        </div>
    )
}

export default TextArea
