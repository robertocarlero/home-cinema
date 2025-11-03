'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { CONTACT_FORM } from '@/constants/ui-texts/contact';

interface ContactFormProps {
	className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		budget: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					access_key: 'MY_ACCESS_KEY',
					...formData,
				}),
			});

			const result = await response.json();
			if (!result.success) throw new Error(result.error);
			toast.success(CONTACT_FORM.messages.success);
			setFormData({ name: '', email: '', budget: '', message: '' });
		} catch (error) {
			console.error(error);
			toast.error(CONTACT_FORM.messages.error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const formIsValid =
		formData.name && formData.email && formData.budget && formData.message;

	return (
		<>
			<Toaster position="bottom-center" />
			<form
				onSubmit={handleSubmit}
				className={cn('flex flex-col gap-6', className)}
			>
				<div className="flex flex-col gap-2">
					<Label htmlFor="name" className="text-neutral-400">
						{CONTACT_FORM.fields.name.label}
					</Label>
					<Input
						id="name"
						name="name"
						placeholder={CONTACT_FORM.fields.name.placeholder}
						value={formData.name}
						onChange={handleChange}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<Label htmlFor="email" className="text-neutral-400">
						{CONTACT_FORM.fields.email.label}
					</Label>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder={CONTACT_FORM.fields.email.placeholder}
						value={formData.email}
						onChange={handleChange}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<Label htmlFor="budget" className="text-neutral-400">
						{CONTACT_FORM.fields.budget.label}
					</Label>
					<Input
						id="budget"
						name="budget"
						placeholder={CONTACT_FORM.fields.budget.placeholder}
						value={formData.budget}
						onChange={handleChange}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<Label htmlFor="message" className="text-neutral-400">
						{CONTACT_FORM.fields.message.label}
					</Label>
					<Textarea
						id="message"
						name="message"
						placeholder={CONTACT_FORM.fields.message.placeholder}
						className="h-28 resize-none"
						rows={8}
						value={formData.message}
						onChange={handleChange}
					/>
				</div>

				<Button type="submit" disabled={isSubmitting || !formIsValid}>
					{isSubmitting
						? CONTACT_FORM.submittingButton
						: CONTACT_FORM.submitButton}
				</Button>
			</form>{' '}
		</>
	);
}
