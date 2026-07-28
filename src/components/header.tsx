import downloadIcon from "../assets/svg/download.svg";

function Header() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
            <div className="mx-auto max-w-7xl px-6">

                {/* Escritorio */}
                <div className="code-font hidden h-16 items-center justify-between md:flex">
                    <a
                        href="#home"
                        className="flex items-center gap-3 text-gray-900 transition-colors hover:text-blue-600"
                    >
                        <span className="text-lg font-semibold tracking-tight">
                            Martí Miranda Martorell
                        </span>
                    </a>

                    <nav className="flex items-center gap-8">
                        <a
                            href="#sobre-mi"
                            className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-blue-600"
                        >
                            Sobre mí
                        </a>

                        <a
                            href="#proyectos"
                            className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-blue-600"
                        >
                            Proyectos
                        </a>

                        <a
                            href="#contacto"
                            className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-blue-600"
                        >
                            Contacto
                        </a>

                        <a
                            href="/Marti_Miranda_Martorell_CV.pdf"
                            download="Marti_Miranda_Martorell_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
                        >
                            <img
                                src={downloadIcon}
                                alt=""
                                className="h-4 w-4"
                            />

                            Descargar CV
                        </a>
                    </nav>
                </div>

                {/* Móvil */}
                <div className="py-3 md:hidden">
                    <div className="flex items-center justify-between">
                        <a
                            href="#home"
                            className="text-lg font-semibold tracking-tight text-gray-900 transition-colors hover:text-blue-600"
                        >
                            Martí Miranda
                        </a>

                        <a
                            href="/Marti_Miranda_Martorell_CV.pdf"
                            download="Marti_Miranda_Martorell_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700"
                        >
                            <img
                                src={downloadIcon}
                                alt=""
                                className="h-4 w-4"
                            />

                            CV
                        </a>
                    </div>

                    <nav className="mt-4 flex justify-center gap-8 text-sm font-medium">
                        <a
                            href="#sobre-mi"
                            className="text-gray-600 transition-colors hover:text-blue-600"
                        >
                            Sobre mí
                        </a>

                        <a
                            href="#proyectos"
                            className="text-gray-600 transition-colors hover:text-blue-600"
                        >
                            Proyectos
                        </a>

                        <a
                            href="#contacto"
                            className="text-gray-600 transition-colors hover:text-blue-600"
                        >
                            Contacto
                        </a>
                    </nav>
                </div>

            </div>
        </header>
    );
}

export default Header;