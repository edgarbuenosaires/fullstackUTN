import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import MealItem from "../components/meals/MealItem";
import '../styles/components/pages/MealsPage.css';

const MealsPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const cargarMeals = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/meals');
            setMeals(response.data);
            setLoading(false);
        };
        cargarMeals();
    }, []);

    return (
        <section className="holder">
            <h2>Meals</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                meals.map(item => <MealItem key={item.id} dish={item.plato} preparation={item.preparacion}
                    imagen={item.imagen} body={item.cuerpo} />)
            )}
        </section>
    );
}
export default MealsPage;