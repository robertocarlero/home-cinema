import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/constants/navigation';

/**
 * Interface for slide data structure
 */
export interface SlideData {
	title: string;
	description: string;
	buttonText: string;
	image: ImageMetadata;
}

/**
 * Props for the Slider component
 */
interface SliderProps {
	slides: readonly SlideData[];
	className?: string;
}

/**
 * Reusable slider component with navigation controls and progress bar.
 * Features horizontal sliding with arrow navigation and visual progress indicator.
 */
export function Slider({ slides, className }: SliderProps) {
	const [currentSlide, setCurrentSlide] = useState(0);

	/**
	 * Navigate to the previous slide
	 */
	const goToPrevious = () => {
		setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
	};

	/**
	 * Navigate to the next slide
	 */
	const goToNext = () => {
		setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
	};

	/**
	 * Calculate the progress bar width percentage
	 */
	const progressWidth = ((currentSlide + 1) / slides.length) * 100;

	return (
		<div className={cn('w-full', className)}>
			{/* Slider Container */}
			<div className="relative overflow-hidden rounded-lg ">
				<div
					className="flex transition-transform duration-300 ease-in-out gap-4 sm:gap-8"
					style={{
						transform: `translateX(calc(-${currentSlide * 50}% - ${
							currentSlide * 1.5
						}rem))`,
						width: `calc(${slides.length * 50}% + ${
							(slides.length - 1) * 1.5
						}rem)`,
					}}
				>
					{slides.map((slide, index) => (
						<div key={index} className="w-1/2  flex-shrink-0">
							<div className="flex flex-col lg:flex-row rounded-lg overflow-hidden border border-neutral-900 h-full">
								{/* Image Section */}
								<div className="lg:w-1/2 relative">
									<img
										src={slide.image.src}
										alt={slide.title}
										className="h-full aspect-video object-cover"
									/>
								</div>

								{/* Content Section */}
								<div className="lg:w-1/2 p-4 sm:p-8 flex flex-col justify-center">
									<h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
										{slide.title}
									</h3>
									<p className="text-neutral-400 mb-6 leading-relaxed">
										{slide.description}
									</p>
									<a href={ROUTES.CONTACT.href}>
										<Button
											variant="outline"
											className="w-fit"
										>
											{slide.buttonText}
										</Button>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Progress Bar and Navigation */}
			<div className="flex items-center justify-between mt-6 gap-4">
				{/* Progress Bar */}
				<div className="flex-1 max-w-xs">
					<div className="w-full h-1 bg-neutral-600 rounded-full">
						<div
							className="h-full bg-white rounded-full transition-all duration-300 ease-in-out"
							style={{ width: `${progressWidth}%` }}
						/>
					</div>
				</div>

				{/* Navigation Arrows */}
				<div className="flex gap-2">
					<Button
						variant="ghost"
						size="icon"
						onClick={goToPrevious}
						disabled={currentSlide === 0}
						className="text-white hover:bg-neutral-800 disabled:opacity-50"
						aria-label="Go to previous slide"
					>
						<ArrowLeft className="h-5 w-5" />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						onClick={goToNext}
						disabled={currentSlide === slides.length - 1}
						className="text-white hover:bg-neutral-800 disabled:opacity-50"
						aria-label="Go to next slide"
					>
						<ArrowRight className="h-5 w-5" />
					</Button>
				</div>
			</div>
		</div>
	);
}
