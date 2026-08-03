import { z } from 'zod';
import { getSupabaseBrowserClient } from './supabase';

export const inquirySchema = z.object({
  name: z
    .string()
    .min(2, 'Please enter your full name.')
    .max(120, 'Please keep your name under 120 characters.'),
  email: z
    .string()
    .email('Please enter a valid work email.')
    .max(320, 'Please keep your email under 320 characters.'),
  company: z
    .string()
    .min(2, 'Please enter your company.')
    .max(160, 'Please keep your company name under 160 characters.'),
  title: z.string().max(160).optional(),
  website: z
    .string()
    .url('Enter a full URL including https://')
    .max(2048)
    .or(z.literal(''))
    .optional(),
  service: z.string().min(1, 'Choose the service that best fits.').max(120),
  description: z
    .string()
    .min(20, 'Please share at least 20 characters about the project.')
    .max(5000, 'Please keep the project description under 5,000 characters.'),
  challenge: z.string().max(3000).optional(),
  budget: z.string().max(80).optional(),
  startDate: z.string().max(10).optional(),
  referral: z.string().max(500).optional(),
  contactPreference: z.string().max(0, 'Unable to submit this inquiry.'),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;

function optionalValue(value: string | undefined) {
  const normalized = value?.trim();
  return normalized ? normalized : null;
}

export async function submitInquiry(values: InquiryFormValues) {
  const supabase = getSupabaseBrowserClient();
  const { error } = await supabase.from('inquiries').insert({
    name: values.name.trim(),
    email: values.email.trim().toLowerCase(),
    company: values.company.trim(),
    job_title: optionalValue(values.title),
    company_website: optionalValue(values.website),
    service: values.service,
    project_description: values.description.trim(),
    current_challenge: optionalValue(values.challenge),
    approximate_budget: optionalValue(values.budget),
    desired_start_date: optionalValue(values.startDate),
    referral_source: optionalValue(values.referral),
  });

  if (error) {
    throw new Error('The inquiry could not be saved.', { cause: error });
  }
}
