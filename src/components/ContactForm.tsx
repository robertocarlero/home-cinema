'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface ContactFormProps {
	className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
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
			toast.success('Message sent successfully!');
			setFormData({ name: '', email: '', message: '' });
		} catch (error) {
			console.error(error);
			toast.error('Failed to send message. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};

	const formIsValid = formData.name && formData.email && formData.message;

	return (
		<>
			<Toaster position='bottom-center'/>
			<form
				onSubmit={handleSubmit}
				className={cn('flex flex-col gap-6', className)}
			>
				<div className="flex flex-col gap-2">
					<Label htmlFor="name" className="text-neutral-400">
						Full name
					</Label>
					<Input
						id="name"
						name="name"
						placeholder="Full name"
						value={formData.name}
						onChange={handleChange}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<Label htmlFor="email" className="text-neutral-400">
						Email address
					</Label>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder="Email address"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<Label htmlFor="message" className="text-neutral-400">
						Message
					</Label>
					<Textarea
						id="message"
						name="message"
						placeholder="Message"
						className="h-28 resize-none"
						rows={8}
						value={formData.message}
						onChange={handleChange}
					/>
				</div>

				<Button type="submit" disabled={isSubmitting || !formIsValid}>
					{isSubmitting ? 'Sending...' : 'Send message'}
				</Button>
			</form>{' '}
		</>
	);
}
