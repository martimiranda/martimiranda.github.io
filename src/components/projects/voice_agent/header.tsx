import { motion } from "framer-motion";

function Header() {
    return (
        
        <div className="relative w-full">
            <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                viewport={{ once: true }}
                className="text-sm font-semibold uppercase tracking-wider text-blue-600"
            >
                Proyecto
            </motion.span>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                viewport={{ once: true }}
                className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
            >
                Agente de Voz con Inteligencia Artificial
            </motion.h1>

            <strong><em>
            <motion.p
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="mt-8 max-w-6xl text-xl leading-9 text-gray-700"
            >
                Creación un agente de voz capaz de mantener conversaciones telefónicas en tiempo real, 
                utilizando modelos de lenguaje para generar respuestas, 
                transcripción de voz y síntesis de audio, 
                integrando todo el flujo con Twilio.
            </motion.p></em></strong>
        </div>
    );
}

export default Header;