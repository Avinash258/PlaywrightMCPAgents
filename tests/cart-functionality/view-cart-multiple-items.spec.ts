// spec: specs/cart-page-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Cart Page Functionality Tests', () => {
  test('View Cart with Multiple Items', async ({ page }) => {
    // Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // Login with standard_user credentials (username: standard_user, password: secret_sauce)
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    
    // Wait for products page to load
    await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();

    // Add Sauce Labs Backpack to cart by clicking 'Add to cart' button
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Add Sauce Labs Bike Light to cart by clicking 'Add to cart' button
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Add Sauce Labs Bolt T-Shirt to cart by clicking 'Add to cart' button
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    // Click on the shopping cart icon in the header
    await page.locator('[data-test="shopping-cart-link"]').click();

    // Verify the cart page loads with URL /cart.html
    await expect(page).toHaveURL(/.*\/cart\.html$/);

    // Verify page title shows 'Your Cart'
    await expect(page.getByText('Your Cart')).toBeVisible();

    // Verify cart contains exactly 3 items
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
    await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
    await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible();

    // Verify cart icon shows count of 3
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('3');

    // Verify cart displays proper layout elements
    await expect(page.getByText('QTY')).toBeVisible();
    await expect(page.getByText('Description')).toBeVisible();
    await expect(page.locator('[data-test="continue-shopping"]')).toBeVisible();
    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
    
    // Verify each item has expected details
    const cartItems = page.locator('.cart_item');
    await expect(cartItems).toHaveCount(3);
    
    // Verify remove buttons are present for each item
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toBeVisible();
    await expect(page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')).toBeVisible();
    
    // Verify product names are correctly displayed in cart
    await expect(page.locator('[data-test="item-4-title-link"]')).toHaveText('Sauce Labs Backpack');
    await expect(page.locator('[data-test="item-0-title-link"]')).toHaveText('Sauce Labs Bike Light');
    await expect(page.locator('[data-test="item-1-title-link"]')).toHaveText('Sauce Labs Bolt T-Shirt');
  });
});