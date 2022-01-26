import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Project.css';

const Project = (props) => {
    // console.log(props.project)
    const {name, age, img, role, salary, email} = props.project;
    const user = <FontAwesomeIcon icon={faUser} />;
    return (
        <div>
            <div className="carts">
                <div className="cart">
                    <img src={img} alt="" />
                    <h2>{name}</h2>
                    <h4>Age : {age}</h4>
                    <h4>Role: {role}</h4>
                    <p><small>E-mail: {email}</small></p>
                    <h5>Salary: ${salary}</h5>
                    <button onClick={() => props.handleAddToCart(props.project)}> {user} Add To Project</button>
                </div>
            </div>
        </div>
    );
};

export default Project;