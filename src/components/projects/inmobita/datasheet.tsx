import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import eye from "../../../assets/svg/eye.svg"
import reactIcon from "../../../assets/svg/technologies/react.svg";
import pythonIcon from "../../../assets/svg/technologies/python.svg";
import djangoIcon from "../../../assets/svg/technologies/django.svg";
import postgresqlIcon from "../../../assets/svg/technologies/postgresql.svg";
import celeryIcon from "../../../assets/svg/technologies/celery.svg";
import openAiIcon from "../../../assets/svg/technologies/openai.svg";



function Datasheet() {
    
    const technologies = [
        { name: "Python", icon: pythonIcon },
        { name: "Django", icon: djangoIcon },
        { name: "Django REST Framework", icon: djangoIcon },
        { name: "React", icon: reactIcon },
        { name: "PostgreSQL", icon: postgresqlIcon },
        { name: "Celery", icon: celeryIcon },
        { name: "OpenAI API", icon: openAiIcon },
 
    ];

    const challenges = [
        "Implementación de tareas asíncronas para generar informes sin bloquear la experiencia del usuario.",
        "Diseño del flujo de generación de informes mediante IA y gestión de posibles errores del proceso.",
        "Diseño de una arquitectura desacoplada entre frontend y backend.",
        "Gestión de estados y validaciones en un formulario complejo.",
        "Despliegue y configuración del entorno de producción.",
    ];

    const learnings = [
        "Diseñar una arquitectura mantenible para una aplicación de tamaño medio.",
        "Desacoplar procesos mediante tareas asíncronas.",
        "Integrar servicios externos de forma robusta.",
        "Desplegar y mantener una aplicación en producción.",
        "Iterar un producto a partir del uso real y el feedback.",
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
                                    Diseño de la arquitectura, desarrollo del backend y
                                    frontend, integración con IA, despliegue y mantenimiento
                                    del proyecto.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 p-8">
                                <span className="text-sm font-semibold text-blue-600">
                                    Estado
                                </span>

                                <p className="mt-3 leading-7 text-gray-600">
                                    MVP desplegado y utilizado para validar el producto con
                                    usuarios reales.
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
                                        Captación de usuarios
                                    </h3>

                                    <ul className="mt-4 space-y-2 text-gray-600">
                                        <li>Formulario multipaso.</li>
                                        <li>Gestión de leads.</li>
                                    </ul>
                                </div>

                                <div className="rounded-2xl border border-gray-200 p-6">
                                    <h3 className="font-semibold text-gray-900">
                                        Valoración
                                    </h3>

                                    <ul className="mt-4 space-y-2 text-gray-600">
                                        <li>Generación de valoraciones mediante IA.</li>
                                        <li>Generación asíncrona de informes.</li>
                                    </ul>
                                </div>

                                <div className="rounded-2xl border border-gray-200 p-6">
                                    <h3 className="font-semibold text-gray-900">
                                        Infraestructura
                                    </h3>

                                    <ul className="mt-4 space-y-2 text-gray-600">
                                        <li>API REST.</li>
                                        <li>Panel de administración.</li>
                                        <li>Seguimiento de conversiones.</li>
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