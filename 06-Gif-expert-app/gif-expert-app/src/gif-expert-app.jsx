import { useState, Fragment } from "react";
import { AddCategory, GifExpertCategoriesGrid } from "./components/index";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'One piece']);

    const onAddCategory = (value) => {
        console.log(value);
        if (!!value && !categories.includes(value) )
            setCategories([value, ...categories]);
    }

    return (
        <Fragment>
            {/* Title */}
            <h1>Gif Expert App</h1>
            {/* Input */}
            <AddCategory onAddCategory={onAddCategory} />
            {/* Results */}
            {categories.map(category => {
                return (
                    <GifExpertCategoriesGrid key={category} category={ category }/>
                );
            })}
            
            
        </Fragment>
    )
}