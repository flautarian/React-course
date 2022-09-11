import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (!!inputValue) {
            onAddCategory(inputValue);
            setInputValue('');
        }
    }

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    return (
        <div className="center-content">
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        placeholder="get gifs like...."
                        value={inputValue}
                        onChange={ onInputChange }>
                    </input>
                </div>
                <button className="glow-on-hover" type="submit">
                    Add Gifs
                </button>
            </form>
        </div>
    )
}