import "./MainContentStyle.scss";

export default function MainContent() {
    return (
        <>
            <div id="main-content">
                <div id="content-container">
                    <div id="show-bg-container">
                        <div id="show-bg">
                            <h1>Bienvenue à l'Hôtel</h1>
                            <div id="reservation-landing-section">
                                <p>
                                    Vivez une expérience unique dans un cadre élégant et raffiné.
                                    <br />
                                    Séjournez, dînez et détendez-vous avec le confort que vous méritez.
                                    <br />
                                    Réservez facilement votre chambre ou votre table
                                    <br />
                                    Choisissez vos dates, confirmez en quelques clics.
                                    <br /> <br />
                                    Simple, rapide et sécurisé.
                                </p>
                                <a id="reservation-button" href="#reservation-sec">Reserver</a>
                            </div>
                        </div>
                    </div>
                    <div className="content-text">
                        <section id="show-logo-container">
                            <div id="show-logo">
                            </div>
                            <div>
                                <p>
                                    Bien plus qu’un simple hôtel : c’est un lieu où le raffinement rencontre la chaleur de l’accueil.
                                    Situé au cœur d’un cadre paisible et prestigieux, notre établissement vous invite à vivre une expérience unique, alliant confort, élégance et authenticité.
                                    <br />
                                    Depuis notre ouverture, nous nous engageons à offrir un service irréprochable, avec une attention particulière portée aux détails. Que vous soyez en voyage d’affaires, en escapade romantique ou en séjour détente, chaque instant passé chez nous est pensé pour votre bien-être.
                                </p>
                                <br />
                                <p>
                                    Nos valeurs :
                                    <br />
                                    • Excellence du service
                                    <br />
                                    • Ambiance chaleureuse et apaisante
                                    <br />
                                    • Expérience client personnalisée
                                </p>
                            </div>
                            <div id="nothing"></div>
                        </section>
                        <span id="services-sec"></span>
                        <section className="section-container" id="services">
                            <h1>SERVICES</h1>
                            <div id="services-container">
                                <div id="service-one">
                                    <div>
                                    </div>
                                    <p>
                                        Chambre VIP
                                    </p>
                                </div>
                                <div id="service-two">
                                    <div></div>
                                    <p>
                                        Restaurant
                                    </p>
                                </div>
                                <div id="service-three">
                                    <div></div>
                                    <p>
                                        Salle de conférence
                                    </p>
                                </div>
                                <div id="service-four">
                                    <div></div>
                                    <p>
                                        Salle de réunion
                                    </p>
                                </div>
                                <div id="service-five">
                                    <div></div>
                                    <p>
                                        Salle de réception
                                    </p>
                                </div>
                                <div id="service-six">
                                    <div></div>
                                    <p>
                                        Salle de cabaret
                                    </p>
                                </div>
                                <div id="service-seven">
                                    <div></div>
                                    <p>
                                        Piscine chauffée
                                    </p>
                                </div>
                                <div id="service-eight">
                                    <div></div>
                                    <p>
                                        Parking sécurisé
                                    </p>
                                </div>
                            </div>
                        </section>
                        <span id="assistance-sec"></span>
                        <section className="section-container" id="assistance">
                            <h1>ASSISTANCE</h1>
                            <p>
                                Chez Nous, votre tranquillité d’esprit est notre priorité.
                                <br />
                                Notre équipe est à votre disposition 7j/7 et 24h/24 pour répondre à toutes vos questions et vous accompagner avant, pendant et après votre séjour.
                            </p>
                            <br />
                            <p>
                                Nous pouvons vous aider pour :
                                <br />
                                • Réservations ou modifications de séjour
                                <br />
                                • Informations sur nos chambres, services ou restaurant
                                <br />
                                • Besoins spécifiques (transfert, allergies, demandes spéciales...)
                                <br />
                                • Problèmes techniques ou urgences
                            </p>
                            <br />
                            <p id="contact-info">
                                📞 Contactez-nous à tout moment :
                                <br />
                                • Par téléphone et WhastApp : <a href="tel:+261376140523">+261 37 61 405 23</a> | <a href="tel:+261386856123">+261 38 68 561 23</a>
                                <br />
                                • Par e-mail : <a href="mailto:assistance@fangolden-hotel.com">assistance@fangolden-hotel.com</a>
                                <br />
                                • Ou directement à la réception
                            </p>
                            <div id="maps-container">
                                <p>Maps :</p>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.7510391019487!2d48.23001281186681!3d-18.94241080824503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f11b0053860541%3A0xaac1fbdc75cb6d0!2sFan&#39;s%20Golden%20Hotel!5e0!3m2!1sen!2smg!4v1755069621010!5m2!1sen!2smg"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </section>
                        <span id="reservation-sec"></span>
                        <section className="section-container" id="reservation">
                            <h1>RESERVATION</h1>
                            <div id="reservation-info">
                                <p>
                                    Réservez votre séjour en toute simplicité :
                                    <br />
                                    ✅ Réservation sécurisée et flexible
                                    <br />
                                    • Sans frais cachés
                                    <br />
                                    • Paiement sécurisé
                                    <br />
                                    • Annulation gratuite (selon conditions)
                                </p>
                                <br />
                                <p>
                                    📅 Mentionnez vos dates
                                    <br />
                                    🛏️ Choisissez votre chambre ou suite
                                    <br />
                                    👤 Indiquez vos informations
                                    <br />
                                    ✅ Soumettez en un clic
                                    <br />
                                    Vous recevrez une confirmation par e-mail avec tous les détails de votre réservation.
                                </p>
                                <br />
                                <p>
                                    Vous pouvez également réserver par téléphone, e-mail ou à la réception si vous préférez.
                                    <br />
                                    Notre équipe est là pour vous aider à chaque étape.
                                </p>
                            </div>
                            <div id="reservation-section-with-image">
                                <div id="reservation-image"></div>
                                <div id="reservation-form">
                                    <div id="form-input">
                                        <input type="text" placeholder="Nom ..." />
                                        <input type="email" placeholder="Adresse Email ..." />
                                        <input type="text" placeholder="Numéro de téléphone ..." />
                                        <input id="message-input" type="text" placeholder="Votre Message ..." />
                                    </div>
                                    <button id="form-button">Soumettre</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}