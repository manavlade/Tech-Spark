export default function Services() {
    const testimonials = [
        {
            name: "Mobile App Development",
            designation: " Native iOS and Android apps, cross-platform solutions with React Native and Flutter. Apps users love, businesses trust.",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Game Development",
            designation: "CTO at InnovateSphere",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return (
        <>
            <div>
                <div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2d3725] tracking-tight">
                            Services We Offer
                        </h2>
                        <p className="text-lg md:text-xl text-[#546d3c] max-w-2xl mx-auto leading-relaxed">
                            From powerful mobile apps to immersive games, we craft digital experiences that inspire and deliver real results.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}