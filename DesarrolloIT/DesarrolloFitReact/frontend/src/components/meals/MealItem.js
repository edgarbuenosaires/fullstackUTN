import React from 'react';

const MealItem = (props) => {
    const { dish, preparation, imagen, body } = props;

    return (
        <div className="meals">
            <h2>{dish}</h2>
            <h3>{preparation}</h3>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}
export default MealItem;