import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Accordion,
} from '@/components/ui/accordion';

export function FAQAccordion() {
	const faqItems = [
		{
			question: 'What’s included in a Home Cinema installation?',
			answer: 'Every installation includes a tailored setup: audio calibration, acoustic optimization, projector or TV installation, and smart integration.',
		},
		{
			question: 'Do you offer custom designs?',
			answer: 'Absolutely. We specialize in fully customized designs that match your space, style, and performance goals.',
		},
		{
			question: 'Can you upgrade my existing system?',
			answer: 'Yes — we can integrate your current equipment, enhance audio and visual quality, or modernize your control systems.',
		},
		{
			question: 'How long does the installation take?',
			answer: "Typical installations take between 1 and 3 weeks, depending on the project's complexity and customization level.",
		},
		{
			question: 'Do you work with designers or builders?',
			answer: 'We frequently collaborate with architects, interior designers, and builders to ensure a seamless integration into your home design.',
		},
	];

	return (
		<Accordion className="w-full space-y-2" collapsible type="single">
			{faqItems.map((item, index) => (
				<AccordionItem
					className="border-b border-neutral-800"
					value={`item-${index}`}
				>
					<AccordionTrigger className="text-left text-base font-medium hover:text-neutral-200">
						{item.question}
					</AccordionTrigger>
					<AccordionContent className="text-neutral-400 text-sm leading-relaxed">
						{item.answer}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
