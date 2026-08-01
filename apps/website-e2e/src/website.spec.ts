import { expect, test } from '@playwright/test';

test.describe('ThriveForward website', () => {
  test('presents the company positioning and primary action', async ({
    page,
  }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/ThriveForward Consulting/i);
    await expect(
      page.getByRole('heading', { name: /Build Better Technology/i }),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: /Book a strategy call/i }).first(),
    ).toBeVisible();
  });

  test('navigates to a service page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'AI Consulting' }).first().click();

    await expect(page).toHaveURL(/\/ai-consulting$/);
    await expect(
      page.getByRole('heading', { name: /Make AI useful/i }),
    ).toBeVisible();
  });

  test('submits the qualification form', async ({ page }) => {
    await page.goto('/contact');
    await page.getByLabel('Full name').fill('Jordan Lee');
    await page.getByLabel('Work email').fill('jordan@example.com');
    await page.getByLabel('Company', { exact: true }).fill('Example Co');
    await page
      .getByLabel('Service needed')
      .selectOption({ label: 'AI Strategy and Implementation' });
    await page
      .getByLabel('Project description')
      .fill('We need a practical AI roadmap.');
    await page.getByRole('button', { name: /Send your inquiry/i }).click();

    await expect(
      page.getByRole('heading', { name: /Thank you/i }),
    ).toBeVisible();
  });
});
