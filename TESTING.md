# 🧪 Testing Your Fern First Insurance Landing Page

## Quick Test Steps:

### 1. Open Your Site
- **Method A:** Double-click `index.html`
- **Method B:** Open `test-local.html` then click "Open Main Site"
- **Method C:** Visit `http://localhost:3000` (if server is running)

### 2. Core Functionality Tests

#### Language Toggle
- [ ] Click EN/ES flags in header
- [ ] Verify all text changes to Spanish
- [ ] Check form placeholders update
- [ ] Test select dropdown options

#### Quote Form
- [ ] Enter 5-digit ZIP code
- [ ] Verify ZIP validation (rejects non-numbers)
- [ ] Progress through insurance type selection
- [ ] Fill contact information
- [ ] Test phone number auto-formatting: (123) 456-7890
- [ ] Submit form and see success message
- [ ] Try submitting with empty fields (should show validation)

#### Mobile Responsiveness
- [ ] Resize browser window to phone size (375px wide)
- [ ] Check quote widget stacks properly
- [ ] Verify navigation is mobile-friendly
- [ ] Test form usability on small screen
- [ ] Check testimonials display correctly

#### Trust Elements
- [ ] Verify testimonials show star ratings
- [ ] Check trust badges ("100% Secure", etc.)
- [ ] Test all phone number links
- [ ] Hover effects on cards and buttons

### 3. Performance Check
- [ ] Page loads in under 2 seconds
- [ ] No console errors (press F12 → Console tab)
- [ ] Images load properly (logo placeholder)
- [ ] All CSS styling applied correctly

### 4. Content Review
- [ ] All text is professional and error-free
- [ ] Spanish translations make sense
- [ ] Phone numbers are consistent
- [ ] Company name appears correctly
- [ ] Call-to-action buttons are prominent

## Common Issues & Fixes

### If styles don't load:
- Check `styles.css` is in same folder as `index.html`
- Refresh browser (Ctrl+F5 or Cmd+Shift+R)

### If JavaScript doesn't work:
- Check browser console for errors (F12)
- Ensure `script.js` is in same folder

### If form doesn't work:
- Form currently logs to console (F12 → Console)
- Success message should appear after submission

## Ready for Production?

Once all tests pass:
1. Replace `logo-placeholder.svg` with real logo
2. Update phone number from (555) FERN-INS
3. Connect form to your CRM/backend
4. Deploy to your chosen platform

## Browser Testing

Test in multiple browsers:
- [ ] Chrome/Edge
- [ ] Firefox  
- [ ] Safari
- [ ] Mobile browsers