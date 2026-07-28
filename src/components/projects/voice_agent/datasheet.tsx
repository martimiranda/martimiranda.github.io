import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import eye from "../../../assets/svg/eye.svg"
import reactIcon from "../../../assets/svg/technologies/react.svg";
import pythonIcon from "../../../assets/svg/technologies/python.svg";
import djangoIcon from "../../../assets/svg/technologies/django.svg";
import postgresqlIcon from "../../../assets/svg/technologies/postgresql.svg";
import celeryIcon from "../../../assets/svg/technologies/celery.svg";
import openAiIcon from "../../../assets/svg/technologies/openai.svg";
import deepgramIcon from "../../../assets/svg/technologies/deepgram.svg";
import elevenLabsIcon from "../../../assets/svg/technologies/elevenlabs.svg";
import twilioIcon from "../../../assets/svg/technologies/twilio.svg";
import dockerIcon from "../../../assets/svg/technologies/docker.svg";
import fastApiIcon from "../../../assets/svg/technologies/fastapi.svg";




function Datasheet() {
    
    const technologies = [
        { name: "Python", icon: pythonIcon },
        { name: "FastAPI", icon: fastApiIcon },
        { name: "AsyncIO", icon: pythonIcon },
        { name: "Docker", icon: dockerIcon },
        { name: "Twilio", icon: twilioIcon },
        { name: "OpenAI", icon: openAiIcon },
        { name: "Deepgram", icon: deepgramIcon },
        { name: "ElevenLabs", icon: elevenLabsIcon },
 
    ];
    

    const challenges = [
        "Sincronización entre la llamada telefónica, el modelo de lenguaje y la síntesis de voz.",
        "Procesamiento concurrente de múltiples flujos de audio.",
        "Reducción del tiempo de respuesta del agente.",
        "Integración de diferentes APIs de IA dentro de un mismo flujo.",
        "Gestión de errores durante conversaciones en tiempo real.",
    ];

    const learnings = [
        "Diseño de aplicaciones asíncronas con FastAPI.",
        "Coordinación de tareas concurrentes mediante asyncio.TaskGroup.",
        "Integración de modelos de lenguaje en aplicaciones de voz.",
        "Gestión de streaming y procesamiento de audio en tiempo real.",
        "Arquitectura de servicios para aplicaciones basadas en IA.",
    ];

    const [showDatasheet, setShowDatasheet] = useState(false);

    

    return (

            <div>
               <AnimatePresence mode="wait">
                    {!showDatasheet && (
                        <motion.div
                            key="button"
                            initial={{
                                opacity: 0,
                                y: 30,
                                scale: 0.95,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}

                            exit={{
                                opacity: 0,
                                y: -20,
                                scale: 0.95,
                            }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <button
                                onClick={() => setShowDatasheet(true)}
                                className="
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
                                    active:translate-y-0
                                "
                            >
                                <img
                                    src={eye}
                                    alt=""
                                    className="h-6 w-6 brightness-0 invert"
                                />

                                <span>Mostrar ficha técnica</span>
                            </button>
                        </motion.div>
                    )}
                
                


                    {showDatasheet && (
                    <motion.div
                        key="datasheet"
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                    >
                        {/* Cabecera */}
                        <div className="mb-16 text-center">
                            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                Documentación
                            </span>

                            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
                                Ficha técnica
                            </h2>

                            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                                Detalles sobre la arquitectura, tecnologías utilizadas, funcionalidades
                                principales y retos técnicos abordados durante el desarrollo del proyecto.
                            </p>
                        </div>
                        {/* Ficha técnica */}
                        <div className="mt-16 grid gap-8 lg:grid-cols-2">
                            <div className="rounded-2xl border border-gray-200 p-8">
                                <span className="text-sm font-semibold text-blue-600">
                                    Rol
                                </span>

                                <p className="mt-3 leading-7 text-gray-600">
                                    Desarrollo completo (arquitectura, backend, integración
                                    de IA y despliegue).
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 p-8">
                                <span className="text-sm font-semibold text-blue-600">
                                    Estado
                                </span>

                                <p className="mt-3 leading-7 text-gray-600">
                                    Proyecto funcional.
                                </p>
                            </div>
                        </div>

                        {/* Tecnologías */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Tecnologías
                            </h2>

                            
                            <div className="mt-6 flex flex-wrap gap-3">
                                {technologies.map((tech, index) => (
                                    <div
                                        key={tech.name}
                                        style={{
                                            animationDelay: `${index * 100}ms`,
                                        }}
                                        className="
                                            group
                                            flex items-center gap-2
                                            rounded-full
                                            border border-gray-200
                                            bg-gray-50
                                            px-4 py-2

                                            opacity-0
                                            animate-slide-in

                                            transition-all duration-200
                                            hover:-translate-y-1
                                            hover:border-blue-300
                                            hover:bg-blue-50
                                            hover:shadow-md
                                        "
                                    >
                                        <img
                                            src={tech.icon}
                                            alt={`${tech.name} logo`}
                                            className="
                                                h-5 w-5
                                                object-contain
                                                transition-transform duration-200
                                                group-hover:scale-110
                                            "
                                        />

                                        <span
                                            className="
                                                text-sm font-medium
                                                text-gray-700
                                                transition-colors
                                                group-hover:text-blue-700
                                            "
                                        >
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Funcionalidades */}
                        <div className="mt-20">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Funcionalidades principales
                            </h2>

                            <div className="mt-8 grid gap-6 md:grid-cols-3">
                                <div className="rounded-2xl border border-gray-200 p-6">
                                    <h3 className="font-semibold text-gray-900">
                                        Comunicación
                                    </h3>

                                    <ul className="mt-4 space-y-2 text-gray-600">
                                        <li>Recepción y gestión de llamadas telefónicas.</li>
                                        <li>Conversaciones en tiempo real mediante IA.</li>
                                        <li>Gestión de conversaciones.</li>
                                    </ul>
                                </div>

                                <div className="rounded-2xl border border-gray-200 p-6">
                                    <h3 className="font-semibold text-gray-900">
                                        Procesamiento de audio
                                    </h3>

                                    <ul className="mt-4 space-y-2 text-gray-600">
                                        <li>Transcripción de voz a texto.</li>
                                        <li>Conversión de texto a voz.</li>
                                        <li>Streaming de audio.</li>
                                    </ul>
                                </div>

                                <div className="rounded-2xl border border-gray-200 p-6">
                                    <h3 className="font-semibold text-gray-900">
                                        Infraestructura
                                    </h3>

                                    <ul className="mt-4 space-y-2 text-gray-600">
                                        <li>Integración con Twilio.</li>
                                        <li>Procesamiento asíncrono.</li>
                                        <li>Despliegue mediante Docker.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Retos técnicos */}
                        <div className="mt-20 grid gap-16 lg:grid-cols-2">

                            <div>
                                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                    Desarrollo
                                </span>

                                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                                    Retos técnicos resueltos
                                </h2>

                                <ul className="mt-8 space-y-5">
                                    {challenges.map((challenge) => (
                                        <li
                                            key={challenge}
                                            className="flex items-start gap-3 text-gray-600"
                                        >
                                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                                                ✓
                                            </span>

                                            <span className="leading-7">
                                                {challenge}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Aprendizajes */}
                            <div>
                                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                    Experiencia
                                </span>

                                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                                    Lo que aprendí
                                </h2>

                                <ul className="mt-8 space-y-5">
                                    {learnings.map((learning) => (
                                        <li
                                            key={learning}
                                            className="flex items-start gap-3 text-gray-600"
                                        >
                                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                                                ✓
                                            </span>

                                            <span className="leading-7">
                                                {learning}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                        
                    </motion.div>
                    )}
                </AnimatePresence>
           </div>
    );
}

export default Datasheet;