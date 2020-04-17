import React from 'react';
import Card from './Card';

// Option 1
const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map(robot =>
                <Card
                    key={robot.id}
                    id={robot.id}
                    name={robot.name}
                    email={robot.email}
                />
            )}
        </div>
    );
};

// Option 2
// const CardList = ({ robots }) => {
//     const robotCards = robots.map(robot => {
//         return (
//             <Card
//                 key={robot.id}
//                 id={robot.id}
//                 name={robot.name}
//                 email={robot.email}
//             />
//         )
//     });
//     return (
//         <div>
//             {robotCards}
//         </div>
//     );
// };

export default CardList;