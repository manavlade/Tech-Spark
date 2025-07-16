"use client"
import rotate1 from "@/assets/Profiles 4.png";
import rotate3 from "@/assets/Profiles 3.png";
import rotate2 from "@/assets/Profiles 2.png";
import Image from "next/image";

import logo from "@/assets/techSpring - Copy.png";

const HomePage = () => {
    return (
        <>
            <div>
                <div className="xl:mb-[450px] lg:mb-[280px] w-full md:mb-44">
                    <div className="relative">
                        <div className="flex justify-center items-center">
                            <div className="absolute xl:mt-10 lg:mt-10 mt-20 animate-[rotateAlternating_25s_linear_infinite] z-0 hidden md:block lg:block">
                                <Image
                                    src={rotate1}
                                    alt="Rotating background 3"
                                    className="lg:max-w-[1050px]  xl:max-w-[1400px] md:max-w-[764px]"
                                />
                            </div>
                            <div className="absolute xl:mt-32 lg:mt-8 mt-40 animate-[rotateAlternating2_25s_linear_infinite] z-0 hidden md:block lg:block">
                                <Image
                                    src={rotate2}
                                    alt="Rotating background 2"
                                    className="lg:max-w-[890px] xl:max-w-[1120px] md:max-w-[620px]"
                                />
                            </div>
                            <div className="absolute xl:mt-52 lg:mt-16 mt-52 animate-[rotateAlternating_25s_linear_infinite] z-0 hidden md:block lg:block ">
                                <Image
                                    src={rotate3}
                                    alt="Rotating background 1"
                                    className="lg:max-w-[700px] xl:max-w-[810px] md:max-w-[460px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex relative justify-center w-full items-center mb-6 text-center">
                        <div className="flex flex-col items-center justify-center w-full max-w-2xl">
                            <Image src={logo} alt="Logo" width={360} height={360} className="mb-6 mt-4" />
                            <h1 className="text-lg md:text-2xl lg:text-6xl font-montserrat font-[700] tracking-wider">
                                We Build Digital
                                <br />
                                <span className="text-blue-600">Experiences</span>
                                <br />
                                That Matter
                            </h1>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default HomePage;