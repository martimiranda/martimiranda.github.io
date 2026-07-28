import Header from "./header";
import Datasheet from "./datasheet";
import Video from "./video";

function VoiceAgentProject() {
return (
    <section
            id="voice-agent"
            className="min-h-screen"
        >
        <div className="mx-auto max-w-7xl px-6 py-24">
            <Header />
            <Video />
            <Datasheet />


        </div>

    </section>
);

}

export default VoiceAgentProject