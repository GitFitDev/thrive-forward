'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  ErrorMessage,
  Field,
  FieldGroup,
  Input,
  Label,
  Select,
  Textarea,
} from '@org/components';
import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  inquirySchema,
  type InquiryFormValues,
  submitInquiry,
} from '../lib/inquiries';
const services = [
  'AI Strategy and Implementation',
  'Custom Software Development',
  'SaaS or MVP Development',
  'Fractional Engineering Leadership',
  'Engineering Effectiveness Assessment',
  'Keynote or Workshop',
  'Executive Advisory',
  'Other',
];
const budgets = [
  'Under $10,000',
  '$10,000–$25,000',
  '$25,000–$50,000',
  '$50,000–$100,000',
  '$100,000–$250,000',
  '$250,000+',
  'Not sure yet',
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    defaultValues: { contactPreference: '' },
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (values: InquiryFormValues) => {
    setSubmissionError('');

    try {
      await submitInquiry(values);
      reset();
      setSubmitted(true);
    } catch {
      setSubmissionError(
        'We could not send your inquiry right now. Please try again in a moment.',
      );
    }
  };

  if (submitted)
    return (
      <div className="border border-zinc-300 bg-white p-8 sm:p-12">
        <CheckCircle2 className="text-rose-600" size={44} />
        <p className="mt-7 text-xs font-bold uppercase tracking-widest text-rose-600">
          Inquiry received
        </p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950">
          Thank you. We&apos;ll be in touch.
        </h2>
        <p className="mt-5 max-w-xl leading-8 text-zinc-600">
          Your inquiry has been securely received. We&apos;ll review the details
          and respond with the clearest next step.
        </p>
        <button
          className="mt-8 font-bold text-rose-600"
          onClick={() => setSubmitted(false)}
          type="button"
        >
          Send another inquiry →
        </button>
      </div>
    );
  return (
    <form
      className="border border-zinc-300 bg-white p-6 sm:p-10"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <FieldGroup>
        <div hidden>
          <label htmlFor="contact-preference">Contact preference</label>
          <input
            id="contact-preference"
            {...register('contactPreference')}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field>
            <Label>Full name</Label>
            <Input {...register('name')} autoComplete="name" />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </Field>
          <Field>
            <Label>Work email</Label>
            <Input {...register('email')} type="email" autoComplete="email" />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label>Company</Label>
            <Input {...register('company')} autoComplete="organization" />
            {errors.company && (
              <ErrorMessage>{errors.company.message}</ErrorMessage>
            )}
          </Field>
          <Field>
            <Label>Job title</Label>
            <Input {...register('title')} autoComplete="organization-title" />
          </Field>
        </div>
        <Field>
          <Label>Company website</Label>
          <Input {...register('website')} type="url" placeholder="https://" />
          {errors.website && (
            <ErrorMessage>{errors.website.message}</ErrorMessage>
          )}
        </Field>
        <Field>
          <Label>Service needed</Label>
          <Select {...register('service')} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </Select>
          {errors.service && (
            <ErrorMessage>{errors.service.message}</ErrorMessage>
          )}
        </Field>
        <Field>
          <Label>Project description</Label>
          <Textarea
            {...register('description')}
            rows={5}
            placeholder="What are you looking to build, change, or understand?"
          />
          {errors.description && (
            <ErrorMessage>{errors.description.message}</ErrorMessage>
          )}
        </Field>
        <Field>
          <Label>Current challenge</Label>
          <Textarea
            {...register('challenge')}
            rows={3}
            placeholder="What is getting in the way today?"
          />
        </Field>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field>
            <Label>Approximate budget</Label>
            <Select {...register('budget')} defaultValue="">
              <option value="">Select a range</option>
              {budgets.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </Field>
          <Field>
            <Label>Desired start date</Label>
            <Input {...register('startDate')} type="date" />
          </Field>
        </div>
        <Field>
          <Label>How did you hear about ThriveForward?</Label>
          <Input {...register('referral')} />
        </Field>
        {submissionError && (
          <p
            className="text-center text-sm font-semibold text-red-700"
            role="alert"
          >
            {submissionError}
          </p>
        )}
        <Button
          className="w-full justify-center"
          color="red"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? 'Sending…' : 'Send Your Inquiry'}
        </Button>
        <p className="text-center text-xs leading-5 text-zinc-500">
          Your information is stored securely and used only to evaluate and
          respond to this inquiry.
        </p>
      </FieldGroup>
    </form>
  );
}
