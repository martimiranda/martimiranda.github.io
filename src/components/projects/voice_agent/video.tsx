import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import playIcon from "../../../assets/svg/play.svg";
import portada from "../../../assets/images/voice-agent-cover.jpg";

function Video() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    const playVideo = () => {
        setPlaying(true);

        setTimeout(() => {
            videoRef.current?.play();
        }, 150);
    };

    return (
        <section>
            <div className="mx-auto max-w-7xl px-6 py-24">

                {/* Cabecera */}
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
                        Creación del agente de voz
                    </motion.h2>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl shadow-2xl"
                >

                    {/* Overlay */}
                    <AnimatePresence>
                        {!playing && (
                            <motion.button
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: .25 }}
                                onClick={playVideo}
                                className="absolute inset-0 z-20 group"
                            >

                                <img
                                    src={portada}
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                    "
                                />

                                <div
                                    className="
                                        absolute inset-0
                                        bg-black/20
                                        transition-colors
                                        group-hover:bg-black/30
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        left-1/2
                                        top-1/2
                                        flex
                                        h-24
                                        w-24
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white/90
                                        shadow-xl
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                    "
                                >
                                    <img
                                        src={playIcon}
                                        className="h-9 w-9 translate-x-0.5"
                                    />
                                </div>

                            </motion.button>
                        )}
                    </AnimatePresence>

                    <video
                        ref={videoRef}
                        controls={playing}
                        preload="metadata"
                        playsInline
                        controlsList="nodownload"
                        poster={portada}
                        className="aspect-video w-full bg-black"
                    >
                        <source
                            src="https://inmobita.es/videos/video-agente-voz.mp4"
                            type="video/mp4"
                        />
                    </video>

                </motion.div>

            </div>
        </section>
    );
}

export default Video;