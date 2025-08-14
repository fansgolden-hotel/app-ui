import { useEffect, useRef, useState } from "react";
import "./NavBarStyle.scss";

// Light mode is default here
const getInitialTheme = () => {
    return localStorage.getItem("theme") === "dark";
};

export default function NavBar() {
    const [darkMode, setDarkMode] = useState(getInitialTheme());

    const toggleDarkMode = (value: boolean | ((prev: boolean) => boolean)) => {
        setDarkMode(value);
    };
    // Sync HTML attribute and localStorage on toggle
    useEffect(() => {
        const theme = darkMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [darkMode]);

    const sectionIds = ["nothing", "services-sec", "assistance-sec", "reservation-sec"];
    const [activeId, setActiveId] = useState<string>("");
    const lastScrollTop = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            lastScrollTop.current = scrollTop;

            const navbarOffset = 80; // adjust this to your actual navbar height
            let closestId = "";
            let minDistance = Infinity;

            for (const id of sectionIds) {
                const section = document.getElementById(id);
                if (!section) continue;

                const rect = section.getBoundingClientRect();
                const distance = Math.abs(rect.top - navbarOffset);

                // When the section is near the top (after considering offset)
                if (rect.top - navbarOffset <= 1 && distance < minDistance) {
                    closestId = id;
                    minDistance = distance;
                }
            }

            if (closestId && closestId !== activeId) {
                setActiveId(closestId);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // initial call

        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeId]);

    useEffect(() => {
        // Reset all dots
        document.querySelectorAll("#center-a a > p:first-child").forEach((el) => {
            el.classList.add("unactive-dot");
        });

        // Activate the current one
        if (activeId) {
            const dot = document.querySelector(`a[href="#${activeId}"] > p`);
            if (dot) dot.classList.remove("unactive-dot");
        }
    }, [activeId]);

    return (
        <>
            <nav id="navbar-container">
                <div id="navbar">
                    <a href="#" id="logo">
                        <p>Fan's Golden</p>
                    </a>
                    <div id="center-a">
                        <a href="#services-sec">
                            <p className="unactive-dot">•</p>
                            <p>Services</p>
                        </a>
                        <a href="#assistance-sec">
                            <p className="unactive-dot">•</p>
                            <p>Assistance</p>
                        </a>
                        <a href="#reservation-sec">
                            <p className="unactive-dot">•</p>
                            <p>Reservation</p>
                        </a>
                    </div>
                    <div id="right-a">
                        <div id="dark-mode-toggle"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleDarkMode(prev => !prev);
                            }}
                        ></div>
                        <a id="connect" href="#">Se Connecter</a>
                    </div>
                </div>
            </nav>
        </>
    );
}