# SauceDemo Cart Page Test Plan

## Application Overview

Comprehensive test plan for the shopping cart functionality on SauceDemo.com, an e-commerce demo application. The cart page allows users to review items, modify quantities, remove items, continue shopping, and proceed to checkout. Testing covers functional requirements, edge cases, UI validation, and user experience scenarios.

## Test Scenarios

### 1. Cart Page Functionality Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. View Cart with Multiple Items

**File:** `tests/cart-functionality/view-cart-multiple-items.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials (username: standard_user, password: secret_sauce)
  3. Add Sauce Labs Backpack to cart by clicking 'Add to cart' button
  4. Add Sauce Labs Bike Light to cart by clicking 'Add to cart' button
  5. Add Sauce Labs Bolt T-Shirt to cart by clicking 'Add to cart' button
  6. Click on the shopping cart icon in the header
  7. Verify the cart page loads with URL /cart.html
  8. Verify page title shows 'Your Cart'
  9. Verify cart contains exactly 3 items
  10. Verify cart icon shows count of 3

**Expected Results:**
  - Cart page displays with proper layout and branding
  - All 3 added items are visible in cart with correct details
  - Each item shows quantity of 1, product name, description, and price
  - Cart header shows QTY and Description columns
  - Continue Shopping and Checkout buttons are visible and enabled
  - Remove button is present for each item
  - Shopping cart icon in header shows correct count

#### 1.2. Remove Single Item from Cart

**File:** `tests/cart-functionality/remove-single-item.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials
  3. Add Sauce Labs Backpack and Sauce Labs Bike Light to cart
  4. Navigate to cart page by clicking cart icon
  5. Click 'Remove' button for Sauce Labs Bike Light
  6. Verify item is removed from cart
  7. Verify cart count updates to 1
  8. Verify remaining item (Sauce Labs Backpack) is still displayed

**Expected Results:**
  - Sauce Labs Bike Light is immediately removed from cart display
  - Cart count in header updates from 2 to 1
  - Sauce Labs Backpack remains in cart with all details intact
  - Page remains on cart without any errors or redirects
  - Continue Shopping and Checkout buttons remain functional

#### 1.3. Remove All Items from Cart

**File:** `tests/cart-functionality/remove-all-items.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials
  3. Add 2 items to cart (any products)
  4. Navigate to cart page
  5. Remove first item by clicking its 'Remove' button
  6. Remove second item by clicking its 'Remove' button
  7. Verify cart is now empty
  8. Verify cart count is no longer displayed in header

**Expected Results:**
  - Cart displays empty state with only column headers visible
  - No product items are displayed in cart area
  - Cart count indicator disappears from header cart icon
  - Continue Shopping button remains clickable
  - Checkout button remains visible and clickable
  - Page layout remains intact without errors

#### 1.4. Continue Shopping Functionality

**File:** `tests/cart-functionality/continue-shopping.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials
  3. Add at least 1 item to cart
  4. Navigate to cart page
  5. Click 'Continue Shopping' button
  6. Verify navigation back to products page
  7. Verify cart count is preserved
  8. Add another item from products page
  9. Return to cart and verify both items are present

**Expected Results:**
  - Clicking Continue Shopping navigates to /inventory.html
  - Products page displays with all product listings
  - Cart count in header remains unchanged
  - Previously added items remain in cart state
  - User can add more items and cart updates correctly
  - Navigation between pages preserves cart state

#### 1.5. Checkout Button Functionality

**File:** `tests/cart-functionality/checkout-button.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials
  3. Add 2 different items to cart
  4. Navigate to cart page
  5. Click 'Checkout' button
  6. Verify navigation to checkout information page
  7. Verify cart count is preserved during checkout flow

**Expected Results:**
  - Clicking Checkout navigates to /checkout-step-one.html
  - Checkout page displays 'Checkout: Your Information' header
  - Required form fields are present (First Name, Last Name, Zip/Postal Code)
  - Cancel and Continue buttons are visible
  - Cart count remains visible in header
  - Items remain in cart state during checkout process

#### 1.6. Product Link Navigation from Cart

**File:** `tests/cart-functionality/product-link-navigation.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials
  3. Add Sauce Labs Fleece Jacket to cart
  4. Navigate to cart page
  5. Click on the product name link 'Sauce Labs Fleece Jacket'
  6. Verify navigation to product detail page
  7. Verify cart state is preserved

**Expected Results:**
  - Product name appears as clickable link in cart
  - Clicking product name navigates to individual product page
  - Product details page displays with correct product information
  - Cart count remains visible and accurate in header
  - Back navigation returns to cart with items preserved

#### 1.7. Cart State Persistence

**File:** `tests/cart-functionality/cart-state-persistence.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials
  3. Add 3 different items to cart
  4. Navigate to cart page and verify all items
  5. Navigate back to products page using Continue Shopping
  6. Navigate to cart again using cart icon
  7. Verify all items are still present
  8. Navigate to a product detail page
  9. Return to cart and verify items are preserved

**Expected Results:**
  - Cart contents persist across page navigation
  - Cart count remains accurate throughout session
  - Item details (name, description, price) remain unchanged
  - Remove buttons remain functional for all items
  - Cart state is maintained during normal browsing

#### 1.8. Cart with Maximum Items

**File:** `tests/cart-functionality/cart-maximum-items.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials
  3. Add all 6 available products to cart (Backpack, Bike Light, Bolt T-Shirt, Fleece Jacket, Onesie, Test T-Shirt Red)
  4. Navigate to cart page
  5. Verify all 6 items are displayed correctly
  6. Verify cart count shows 6
  7. Verify page layout handles multiple items properly

**Expected Results:**
  - Cart displays all 6 items without layout issues
  - Each item shows correct quantity (1), name, description, and price
  - Cart count accurately shows 6 in header
  - Page scrolling works if needed for all items
  - Remove buttons are accessible for all items
  - Continue Shopping and Checkout buttons remain visible

### 2. Cart UI and UX Tests

**Seed:** `tests/seed.spec.ts`

#### 2.1. Cart Visual Elements and Layout

**File:** `tests/cart-ui/visual-elements-layout.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials
  3. Add 1 item to cart
  4. Navigate to cart page
  5. Verify page header displays correctly
  6. Verify column headers (QTY, Description) are properly aligned
  7. Verify item information is well-formatted
  8. Verify buttons are properly styled and positioned

**Expected Results:**
  - Page header shows 'Your Cart' title clearly
  - Swag Labs branding is visible in header
  - Cart icon with count is properly positioned
  - QTY and Description column headers are aligned
  - Product images, names, descriptions, and prices are readable
  - Remove buttons are clearly visible and accessible
  - Continue Shopping and Checkout buttons are prominent

#### 2.2. Responsive Cart Display

**File:** `tests/cart-ui/responsive-display.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials
  3. Add multiple items to cart
  4. Navigate to cart page
  5. Verify layout adapts to different content amounts
  6. Test with empty cart layout
  7. Test with single item layout
  8. Test with multiple items layout

**Expected Results:**
  - Layout remains organized with varying numbers of items
  - Text wrapping works correctly for long product descriptions
  - Buttons remain accessible regardless of cart contents
  - Empty cart state displays appropriately
  - Page footer remains in correct position
  - No horizontal scrolling required for normal content

#### 2.3. Cart Accessibility Features

**File:** `tests/cart-ui/accessibility-features.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials
  3. Add items to cart and navigate to cart page
  4. Test keyboard navigation through cart elements
  5. Verify button accessibility
  6. Verify link accessibility for product names
  7. Test cart with screen reader compatibility

**Expected Results:**
  - All interactive elements are keyboard accessible
  - Tab order follows logical flow through cart items
  - Remove buttons have clear labels/descriptions
  - Product links are properly identified
  - Cart count is accessible to screen readers
  - Button states are clearly communicated

### 3. Cart Error Handling and Edge Cases

**Seed:** `tests/seed.spec.ts`

#### 3.1. Direct Cart URL Access with Empty Cart

**File:** `tests/cart-edge-cases/direct-url-empty-cart.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials
  3. Navigate directly to https://www.saucedemo.com/cart.html without adding items
  4. Verify empty cart displays correctly
  5. Verify functionality of Continue Shopping button
  6. Verify Checkout button behavior with empty cart

**Expected Results:**
  - Cart page loads successfully with empty state
  - Column headers (QTY, Description) are still visible
  - Continue Shopping button navigates to products page
  - Checkout button is clickable and navigates to checkout
  - No error messages or broken layout
  - Cart count is not displayed when empty

#### 3.2. Cart Behavior After Logout/Login

**File:** `tests/cart-edge-cases/logout-login-behavior.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials
  3. Add multiple items to cart
  4. Open hamburger menu and logout
  5. Login again with same credentials
  6. Check if cart contents are preserved or reset
  7. Navigate to cart page and verify state

**Expected Results:**
  - Login process completes successfully
  - Cart state behavior is consistent with application design
  - If cart is cleared: empty state displays correctly
  - If cart is preserved: all items remain with correct details
  - No errors occur during logout/login process
  - Cart functionality works normally after re-login

#### 3.3. Rapid Item Addition and Removal

**File:** `tests/cart-edge-cases/rapid-item-operations.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials
  3. Rapidly add multiple items to cart from products page
  4. Navigate to cart page
  5. Rapidly click remove buttons for multiple items
  6. Add items back rapidly
  7. Verify cart count and contents remain accurate

**Expected Results:**
  - Cart count updates accurately with rapid operations
  - No duplicate items appear in cart
  - Remove operations process correctly without errors
  - Page remains responsive during rapid operations
  - Final cart state matches expected item count
  - No JavaScript errors occur in browser console

#### 3.4. Checkout from Empty Cart

**File:** `tests/cart-edge-cases/checkout-empty-cart.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials
  3. Ensure cart is empty (remove all items if any)
  4. Navigate to cart page
  5. Click 'Checkout' button with empty cart
  6. Verify application behavior
  7. Test navigation and error handling

**Expected Results:**
  - Application handles empty cart checkout gracefully
  - Either prevents checkout with appropriate message
  - Or allows checkout flow with empty order
  - No application crashes or errors occur
  - User can return to shopping after empty checkout attempt
  - Consistent behavior with application design

#### 3.5. Browser Back Button Behavior

**File:** `tests/cart-edge-cases/browser-back-button.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
  2. Login with standard_user credentials
  3. Add items to cart and navigate to cart page
  4. Click Continue Shopping to go to products page
  5. Use browser back button to return to cart
  6. Verify cart state is preserved
  7. Navigate to checkout and use back button to return to cart

**Expected Results:**
  - Browser back button navigates to previous page correctly
  - Cart contents are preserved when using back button
  - Cart count remains accurate after back navigation
  - All cart functionality works normally after back navigation
  - No duplicate items or state issues occur
  - Page layout and functionality remain intact
