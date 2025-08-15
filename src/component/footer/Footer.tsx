import "./FooterStyle.scss";
export default function Footer() {
    return (
        <>
            <footer id="footer-container">
                <div id="footer-content">
                    <div id="content">
                        <div id="a-container">
                            <a href="#">Plus</a>
                            <a href="#">Page d'Aide</a>
                            <a href="#">Politique de Confidentialite</a>
                            <a href="#">Contactez Nous</a>
                            <a href="#">Feedback</a>
                        </div>
                        <div id="hr"></div>
                        <div id="social-media-link">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com" id="facebook"></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com" id="instagram"></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com" id="pinterest"></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://web.whatsapp.com" id="whatsapp"></a>
                        </div>
                        <div id="copyright-message">
                            Copyright © 2025. Tout droits reserves.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}