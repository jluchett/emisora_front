import React from 'react';
import './Home.css';
import Footer from '../../components/footer/footer';

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <section className="weather-section">
                    <h2>Clima Actual</h2>
                    <p>Aquí se mostrará el clima de la ubicación del usuario.</p>
                </section>
                <div className="content-container">
                    <section className="main-section">
                        <h2>Main</h2>
                        <p>Aquí se mostrará información de varias secciones de la página.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni fugiat maiores voluptates assumenda nostrum iure. Ab, unde molestiae iste aspernatur, in quibusdam, nostrum eaque repellat totam nulla porro ipsa.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem magni, commodi odit assumenda voluptatum laboriosam consequatur saepe nobis ipsam, quibusdam rerum soluta quae facilis voluptas nisi explicabo cumque. Ullam, neque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente enim doloremque distinctio ut odio earum autem eveniet provident cum. Voluptatibus, delectus. Eveniet incidunt perferendis eius rerum, et beatae cum?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed dignissimos, corrupti velit reprehenderit consectetur eveniet itaque ipsum harum perferendis error nobis cum sunt delectus aspernatur fugit facere debitis recusandae consequatur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sunt iusto commodi eaque itaque non consectetur ut repudiandae delectus consequuntur distinctio aliquam omnis laborum quas sint, possimus quis autem animi?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, excepturi veritatis sit numquam laboriosam dolorem, non harum voluptas a recusandae nostrum obcaecati modi quod. Nesciunt deleniti nam fugit ipsum ratione!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illo iure at amet, ut expedita quidem, ad nobis ratione molestiae aspernatur aut. Cumque dignissimos dolorum ratione. Possimus molestiae provident tenetur.</p>
                    </section>

                    <section className="news-section">
                        <h2>News</h2>
                        <p>Aquí se mostrarán las noticias.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Home;
