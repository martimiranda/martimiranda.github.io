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
                Inmobita
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
                Plataforma que permite a propietarios obtener una valoración
                aproximada de su vivienda mediante inteligencia artificial y
                facilita el contacto con una agencia inmobiliaria.

            </motion.p></em></strong>
                
            
        </div>
    );
}

export default Header;