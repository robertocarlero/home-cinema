import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Accordion,
} from '@/components/ui/accordion';
import { CONTACT_FAQ_ACCORDION } from '@/constants/ui-texts/contact';

export function FAQAccordion() {
	const faqItems = CONTACT_FAQ_ACCORDION.items;

	return (
		<Accordion className="w-full space-y-2" collapsible type="single">
			{faqItems.map((item, index) => (
				<AccordionItem
					className="border-b border-neutral-800"
					value={`item-${index}`}
				>
					<AccordionTrigger className="text-left text-base font-bold hover:text-neutral-200">
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
