create extension if not exists pgcrypto;

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 120),
  email text not null check (char_length(email) between 3 and 320 and position('@' in email) > 1),
  company text not null check (char_length(company) between 2 and 160),
  job_title text check (job_title is null or char_length(job_title) <= 160),
  company_website text check (company_website is null or char_length(company_website) <= 2048),
  service text not null check (
    service in (
      'AI Strategy and Implementation',
      'Custom Software Development',
      'SaaS or MVP Development',
      'Fractional Engineering Leadership',
      'Engineering Effectiveness Assessment',
      'Keynote or Workshop',
      'Executive Advisory',
      'Other'
    )
  ),
  project_description text not null check (char_length(project_description) between 20 and 5000),
  current_challenge text check (current_challenge is null or char_length(current_challenge) <= 3000),
  approximate_budget text check (
    approximate_budget is null or approximate_budget in (
      'Under $10,000',
      '$10,000–$25,000',
      '$25,000–$50,000',
      '$50,000–$100,000',
      '$100,000–$250,000',
      '$250,000+',
      'Not sure yet'
    )
  ),
  desired_start_date date,
  referral_source text check (referral_source is null or char_length(referral_source) <= 500),
  status text not null default 'new' check (status in ('new', 'reviewing', 'contacted', 'closed'))
);

alter table public.inquiries enable row level security;

revoke all on table public.inquiries from anon, authenticated;

grant insert (
  name,
  email,
  company,
  job_title,
  company_website,
  service,
  project_description,
  current_challenge,
  approximate_budget,
  desired_start_date,
  referral_source
) on table public.inquiries to anon, authenticated;

drop policy if exists "Public can submit inquiries" on public.inquiries;
create policy "Public can submit inquiries"
on public.inquiries
for insert
to anon, authenticated
with check (true);

comment on table public.inquiries is
  'Qualification inquiries submitted through the ThriveForward Consulting website.';
