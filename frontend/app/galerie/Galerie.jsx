"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Galerie = ({ images }) => {
	return (
		<Carousel
			opts={{
				align: "center",
				loop: true,
			}}
			className="mt-8 max-w-xl mx-auto "
		>
			<CarouselContent>
				{images.map((image) => (
					<CarouselItem
						key={image.id}
						className="flex justify-center"
					>
						<Image
							src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
							alt="image"
							width={800}
							height={450}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default Galerie;
