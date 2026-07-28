
import downloadIcon from "../assets/svg/download.svg";

function Curriculum() {
    return (
        <section
            id="curriculum"
            className=""
        >
            <div className="mx-auto max-w-4xl px-6 py-24">

                {/* Cabecera */}
                <div className="mb-12 text-center">
                  

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
                        Currículum
                    </h2>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-12 text-center shadow-sm">

                    <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
                        Descarga mi currículum para conocer mi formación,
                        experiencia, tecnologías y los proyectos en los que he
                        trabajado.
                    </p>

                    
                        <a
                            href="/Marti_Miranda_Martorell_CV.pdf"
                            download="Marti_Miranda_Martorell_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            mt-10
                            inline-flex
                            items-center
                            gap-3
                            rounded-2xl
                            bg-blue-600
                            px-8
                            py-5
                            text-lg
                            font-semibold
                            text-white
                            shadow-md
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-blue-700
                            hover:shadow-xl
                        "
                        >
                        <img
                            src={downloadIcon}
                            alt=""
                            className="h-6 w-6 brightness-0 invert"
                        />

                        <span>Descargar currículum</span>
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Curriculum;

