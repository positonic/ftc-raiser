"use client";
// TODO: details as server component?

import { useFetchHypercert } from "@/hooks/use-fetch-hypercert";
import Image from "next/image";

export default function HypercertDetails() {
	const { hypercertData, isLoading, error } = useFetchHypercert(
		"11155111-0xa16DFb32Eb140a6f3F2AC68f41dAd8c7e83C4941-235135115542368478253191853735351834116096",
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!hypercertData) {
		return <div>No data available</div>;
	}

	// TODO fix types for hypercert data object using gql Fragments
	//eslint-disable-next-line @typescript-eslint/no-explicit-any
	const imageSrc = (hypercertData as any).metadata.image;
	//eslint-disable-next-line @typescript-eslint/no-explicit-any
	const description = (hypercertData as any).metadata.description;

	return (
		<div className="container p-4">
			<div className="container mx-auto p-4">
				<div className="relative w-full h-[450px]">
					{" "}
					{/* Set a fixed height container */}
					<Image
						src={imageSrc}
						alt="hypercerts card image"
						fill
						style={{
							objectFit: "contain", // This will ensure the image fits within the container
							maxHeight: "450px", // Set maximum height to 250px
						}}
					/>
				</div>
				<p>{description}</p>
			</div>
		</div>
	);
}
