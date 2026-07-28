import dibujoMarti from "../assets/dibujo-marti.png";
import { motion } from "framer-motion";

function AboutMe() {
    const skills = [
        "Desarrollo de APIs REST con Django y FastAPI.",
        "Diseño y desarrollo de aplicaciones backend escalables.",
        "Integración de modelos de IA y automatización de procesos.",
        "Desarrollo de aplicaciones full-stack con React.",
        "Contenerización y despliegue de aplicaciones con Docker.",
        "Integración con APIs de terceros (OpenAI, WhatsApp, Google Maps, etc.).",
    ];

    return (

        <section
    id="sobre-mi"
    className="relative flex min-h-screen items-center overflow-hidden"
>
    {/* Imagen */}
    

    {/* Contenido */}
    <div className="relative z-10 mx-auto w-full max-w-7xl px-8 lg:px-20">

    

    
        <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-blue-600"
        >
            Sobre mí
        </motion.span>
        
            
        

        
        <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
            className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
        >
            ¿Quién soy?
        </motion.h2>
            
        

        <div className="mt-12 max-w-5xl space-y-8">
            <div className="space-y-4">
                <img
                    src={dibujoMarti}
                    alt=""
                    className="
                                absolute
                                left-1/2
                                top-1/2
                                -translate-x-1/2
                                -translate-y-1/2

                                h-[90%]
                                max-h-[900px]
                                object-contain

                                opacity-15

                                pointer-events-none
                                select-none
                            "
                />
                
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 }}
                    viewport={{ once: true }}
                    className="text-lg leading-8 text-gray-600"
                >
                    Soy un joven <strong className="font-semibold text-gray-900"><em>apasionado por el crecimiento personal 
                    y la tecnología</em></strong>, desde pequeño siempre he tenido gran afán
                        por las matemáticas y por resolver problemas complejos, 
                        lo que me llevo a estudiar programación orientada al desarrollo web, 
                        tuve un amor a primera vista con el desarrollo backend y 
                        siempre he buscado ponerme a prueba con retos personales durante mi carrera,
                        he tratado siempre de <strong className="font-semibold text-gray-900"><em>aportar con mi desarrollo a otras personas </em></strong> 
                        y puedo decir que lucho por conseguirlo aunque aún me queda mucho camino por <strong className="font-semibold text-gray-900"><em>recorrer y mejorar.</em></strong>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 }}
                    viewport={{ once: true }}
                    className="text-lg leading-8 text-gray-600"
                >
                    Lo que más valoro es sentirme útil, sentir que realmente estoy <strong className="font-semibold text-gray-900"><em>trabajando
                    por un propósito</em></strong> y que mi trabajo aporta al equipo, 
                    ese diría que es el valor
                    más alto en mis prioridades referentes al trabajo.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 }}
                    viewport={{ once: true }}
                    className="text-lg leading-8 text-gray-600"
                >
                    Puedo decir que soy una persona muy trabajadora, 
                    abierta y que puedo comprender diversas maneras de 
                    pensar <strong className="font-semibold text-gray-900"><em>sin juzgar</em></strong>.
                </motion.p>
            </div>

            <div className="mt-24">

                
                <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center text-3xl font-bold text-gray-900"
                >
                    Habilidades técnicas
                </motion.h3>
                    
                

                
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 }}
                    viewport={{ once: true }}
                    className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2"
                >
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="
                                flex items-center gap-4
                                rounded-2xl
                                border border-gray-200
                                bg-white/60
                                p-5
                                backdrop-blur-sm

                                transition-all duration-300
                                hover:-translate-y-1
                                hover:border-blue-300
                                hover:bg-blue-50
                                hover:shadow-md
                            "
                        >
                            <div className="h-10 w-1 rounded-full bg-blue-600" />

                            <span className="text-gray-700">
                                {skill}
                            </span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </div>

    </div>
</section>
        
        
       
        
    );
}

export default AboutMe;