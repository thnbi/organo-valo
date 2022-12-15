import './style.css'

const Footer = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/thnbi" target="_blank" rel="noreferrer">
                        <img src="/img/github.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/thnbii" target="_blank" rel="noreferrer">
                        <img src="/img/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/thnbii/" target="_blank" rel="noreferrer">
                        <img src="/img/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/img/logo.png" alt="" />
        </section>
        <section>
            <p>
               Desenvolvido por hanabi.
            </p>
        </section>
    </footer>)
}

export default Footer