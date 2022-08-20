import React from 'react';
import Car from './Car';
class Cars extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        cars: [
            {
                id: 1,
                model: "Mercedes",
                name: "Mercedes GLC 200",
                color: "black"
            },
            {
                id: 2,
                model: "Huyndai",
                name: "Huyndai Santafe 2022",
                color: "black"
            },
            {
                id: 3,
                model: "Kia",
                name: "Kia morning",
                color: "black"
            },

        ]
    }
    render() {
        return (
            <div>
                {
                    this.state.cars.map(car => <Car key={car.id} {...car} />)
                }
            </div>
        );
    }
}

export default Cars;