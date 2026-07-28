import emailIcon from "../assets/svg/social/email.svg";
import phoneIcon from "../assets/svg/social/phone.svg";
import linkedinIcon from "../assets/svg/social/linkedin.svg";
import githubIcon from "../assets/svg/social/github.svg";

function Contacto() {
    return (
        <section
            id="contacto"
            className="py-24"
        >
            <div className="mx-auto max-w-6xl px-6">

                {/* Cabecera */}
                <div className="text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Contacto
                    </span>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
                        ¿Hablamos?
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        Si crees que puedo aportar valor a tu equipo o simplemente
                        quieres conocer más sobre mi trabajo, estaré encantado de
                        hablar contigo.
                    </p>
                </div>

                {/* Tarjetas */}
                <div className="mt-16 grid gap-6 md:grid-cols-2">

                    <a
                        href="mailto:martimiranda2356@gmail.com"
                        className="
                            flex items-center gap-5
                            rounded-2xl
                            border border-gray-200
                            bg-white/60
                            p-6
                            backdrop-blur-sm
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:border-blue-300
                            hover:shadow-lg
                        "
                    >
                        <img
                            src={emailIcon}
                            alt=""
                            className="h-8 w-8"
                        />

                        <div>
                            <p className="text-sm font-semibold text-blue-600">
                                Email
                            </p>

                            <p className="mt-1 text-gray-700">
                                martimiranda2356@gmail.com
                            </p>
                        </div>
                    </a>

                    <a
                        href="tel:689667587"
                        className="
                            flex items-center gap-5
                            rounded-2xl
                            border border-gray-200
                            bg-white/60
                            p-6
                            backdrop-blur-sm
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:border-blue-300
                            hover:shadow-lg
                        "
                    >
                        <img
                            src={phoneIcon}
                            alt=""
                            className="h-8 w-8"
                        />

                        <div>
                            <p className="text-sm font-semibold text-blue-600">
                                Teléfono
                            </p>

                            <p className="mt-1 text-gray-700">
                                689 667 587
                            </p>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/mart%C3%AD-miranda-b3281833b/"
                        className="
                            flex items-center gap-5
                            rounded-2xl
                            border border-gray-200
                            bg-white/60
                            p-6
                            backdrop-blur-sm
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:border-blue-300
                            hover:shadow-lg
                        "
                        target="_blank"
                    >
                        <img
                            src={linkedinIcon}
                            alt=""
                            className="h-8 w-8"
                        />

                        <div>
                            <p className="text-sm font-semibold text-blue-600">
                                LinkedIn
                            </p>

                            <p className="mt-1 text-gray-700">
                                Ver perfil
                            </p>
                        </div>
                    </a>

                    <a
                        href="https://github.com/martimiranda"
                        className="
                            flex items-center gap-5
                            rounded-2xl
                            border border-gray-200
                            bg-white/60
                            p-6
                            backdrop-blur-sm
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:border-blue-300
                            hover:shadow-lg
                        "
                    >
                        <img
                            src={githubIcon}
                            alt=""
                            className="h-8 w-8"
                        />

                        <div>
                            <p className="text-sm font-semibold text-blue-600">
                                GitHub
                            </p>

                            <p className="mt-1 text-gray-700">
                                Ver repositorios
                            </p>
                        </div>
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Contacto;

