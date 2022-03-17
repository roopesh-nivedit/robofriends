import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    return (
        <Fragment>
            {
                robots.map((robots) => {
                    return (
                        <Card
                            key={robots.id}
                            id={robots.id}
                            name={robots.name}
                            email={robots.email}
                        />
                    );
                })
            }
        </Fragment>
    );
}

export default CardList;