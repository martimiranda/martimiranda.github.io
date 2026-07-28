import InmobitaProject from "../components/projects/inmobita/inmobitaProject";
import VoiceAgentProject from "./projects/voice_agent/voiceAgentProject";
import { motion } from "framer-motion";

function Projects() {
    return (<section
            id="proyectos"
            className="flex min-h-screen items-center"
        >
            <div className="mx-auto w-full max-w-7xl px-6 py-24">
                <div className="mb-16">
                    
                    <motion.span
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .5 }}
                            viewport={{ once: true }}
                            className="text-sm font-semibold uppercase tracking-wider text-blue-600"
                        >
                        Como trabajo
                    </motion.span>

                    
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                        viewport={{ once: true }}
                        className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
                    >
                    Mis proyectos
                    </motion.h2>
                    
                </div>

                <InmobitaProject />
                <VoiceAgentProject />


                
            </div>
        </section>);
}

export default Projects