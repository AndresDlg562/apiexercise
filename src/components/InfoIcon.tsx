import Image from "next/image";

interface InfoIconProps {
    iconSrc: string;
    message: string;
    info: string;
    showInfo: (message: string, info: string) => void;
}

const InfoIcon = ({iconSrc, message, info, showInfo }: InfoIconProps) => {
    const handleHover = () => {
        showInfo(message, info);
    }

    return (
        <div 
            className="flex items-center gap-2 transition-all cursor-pointer group"
            onMouseEnter={handleHover}
        >
            <Image 
                src={iconSrc}
                alt="info icon"
                width={20}
                height={20}
            />
        </div>
    );
};

export default InfoIcon;
