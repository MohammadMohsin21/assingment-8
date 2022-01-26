import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Project from '../Project/Project';
import './Employee.css';

const Employee = () => {
    const [projects, setProjects] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./employee.JSON')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])

    const handleAddToCart = (project) => {
        const newCart = [...cart, project];
        setCart(newCart);
    }
    return (
        <div className='employee-container'>
            <div className='product-container'>
                <div className='project-budget'>
                    <h1>Our Company Employee : {projects.length}</h1>
                    <h1>Project Budget : 35 Milion USD Dolar</h1>
                </div>
                {
                    projects.map(project => <Project 
                    key={project.name}    
                    project={project}
                    handleAddToCart={handleAddToCart}
                    ></Project>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Employee;