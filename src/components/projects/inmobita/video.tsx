import { motion } from "framer-motion";

function Video() {
    return (
        <section>
            <div className="mx-auto max-w-7xl px-6 py-24">

                <div className="mb-10 max-w-2xl">

                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold uppercase tracking-wider text-blue-600"
                    >
                        Arquitectura y funcionamiento
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                        viewport={{ once: true }}
                        className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
                    >
                        Creación de Inmobita
                    </motion.h2>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 }}
                    viewport={{ once: true }}
                    className="
                        overflow-hidden
                        rounded-3xl
                        shadow-2xl
                    "
                >
                    <video
                        className="
                            aspect-video
                            w-full
                            bg-black
                        "
                        controls
                        preload="metadata"
                        playsInline
                        controlsList="nodownload"
                    >
                        <source
                            src="https://inmobita.es/videos/inmobita-demo.mp4"
                            type="video/mp4"
                        />

                        Tu navegador no soporta la reproducción de vídeo.
                    </video>
                </motion.div>

            </div>
        </section>
    );
}

export default Video;