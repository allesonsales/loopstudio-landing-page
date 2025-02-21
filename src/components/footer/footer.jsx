import './style.css'

const Footer = () => {
    return (
        <section id="footer">
            <div className="sectionContainer">
                <div className="item1">
                    <div className="imageContainer">
                        <img src="/logo.svg" alt="Loopstudios" />
                    </div>
                    <ul>
                        <a href='#vr'>
                        <li>About</li>
                        </a>
                        <li>Carrers</li>
                        <li>Events</li>
                        <a href="#creations">
                        <li>Products</li>
                        </a>
                        <a href="#footer">
                        <li>Support</li>
                        </a>
                    </ul>
                </div>
                <div className="item2">
                    <div className="socialContainer">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-pinterest"></i>
                        <i class="bi bi-instagram"></i>
                    </div>
                    <small>2021 | Loopstudios. All rights reserved.</small>
                </div>
                <div className="frontend">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Alleson Sales</a>.
                </div>
            </div>
        </section>
    )
}

export default Footer