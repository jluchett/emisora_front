import React from 'react';
import './Home.css';
import Footer from '../../components/footer/footer';

const Home = () => {
    return (
        <>
            <main className="main-container">
                <section className="weather-section">
                    <h2>Clima Actual</h2>
                    <p>Aquí se mostrará el clima de la ubicación del usuario.</p>
                </section>
                <div className="content-container">
                    <section className="main-section">
                        <h2>Lo más destacado</h2>

                        {/* Top 10 canciones más escuchadas */}
                        <div className="top-section">
                            <h3>Top 10 Canciones Más Escuchadas</h3>
                            <ol>
                                <li>Canción 1</li>
                                <li>Canción 2</li>
                                <li>Canción 3</li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                {/* ... */}
                            </ol>
                        </div>

                        {/* Top 10 películas mejor calificadas */}
                        <div className="top-section">
                            <h3>Top 10 Películas Mejor Calificadas</h3>
                            <ol>
                                <li>Película 1</li>
                                <li>Película 2</li>
                                <li>Película 3</li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                {/* ... */}
                            </ol>
                        </div>

                        {/* Top 10 libros más recomendados */}
                        <div className="top-section">
                            <h3>Top 10 Libros Más Recomendados</h3>
                            <ol>
                                <li>Libro 1</li>
                                <li>Libro 2</li>
                                <li>Libro 3</li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                {/* ... */}
                            </ol>
                        </div>

                        {/* Slider de reseñas de usuarios */}
                        <div className="reviews-slider">
                            <h3>Reseñas de los Usuarios</h3>
                            <div className="slider">
                                <div className="slide">Reseña 1</div>
                                <div className="slide">Reseña 2</div>
                                <div className="slide">Reseña 3</div>
                                <div className="slide">Reseña 4</div>

                                {/* Implementar funcionalidad del slider aquí */}
                            </div>
                        </div>
                    </section>

                    <section className="news-section">
                        <h2>News</h2>
                        <p>Aquí se mostrarán las noticias.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </>

    );
};

export default Home;
