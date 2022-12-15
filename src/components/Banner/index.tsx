import "./style.css";

interface BannerProps {
	srcImg: string;
	alt?: string;
}

const Banner = ({ srcImg, alt }: BannerProps) => {
	return (
		<header className="banner">
			<img src={srcImg} alt={alt} />
		</header>
	);
};

export default Banner;
