# Employee Feedback Form - Design Guidelines

## Design Approach
**System**: Material Design-inspired with professional restraint
**Rationale**: Utility-focused internal tool requiring clarity, efficiency, and trust. Standard patterns ensure familiarity and reduce cognitive load for employees.

## Layout System

**Container Structure**:
- Form centered on page with max-width of 640px (max-w-2xl)
- Vertical centering on viewport for focused experience
- Single-column layout throughout
- Padding: p-8 for form container, p-6 for inner content

**Spacing Primitives**: Use Tailwind units of 4, 6, and 8
- Form field spacing: space-y-6
- Inner element spacing: space-y-4
- Button margins: mt-8

## Typography

**Hierarchy**:
- Page Title: 2xl font size, font-semibold
- Section Labels: sm font size, font-medium, uppercase tracking-wide
- Input Text: base font size
- Helper Text: sm font size, reduced opacity
- Thank You Message: xl font size, font-semibold

**Font Stack**: System fonts (ui-sans-serif, system-ui) for optimal performance and native feel

## Core Components

**Form Container**:
- Elevated card design with subtle shadow
- Rounded corners (rounded-lg)
- Contrasting background from page

**Input Fields**:
- Full-width text input with border
- Border radius: rounded-md
- Height: h-12 for comfortable touch targets
- Padding: px-4
- Focus state: pronounced border weight/ring effect

**Dropdown (Department)**:
- Matches text input styling
- Include chevron icon on right
- Options: Engineering, Marketing, Sales, HR, Operations, Finance, Other

**Textarea (Message)**:
- Height: rows="6" (approximately 144px)
- Same border/padding treatment as inputs
- Resize: vertical only

**Submit Button**:
- Background: Guild orange (#F2642C) as specified
- Text: White, font-medium
- Height: h-12
- Full-width on mobile, auto-width centered on desktop (min-w-[200px])
- Rounded: rounded-md
- Hover state: Subtle darkening/shadow elevation

**Thank You State**:
- Replace entire form with success message
- Center-aligned content
- Include checkmark icon (success indicator)
- Message text + option to submit another response link

## Page Structure

**Header Section**:
- Company logo or "Guild" text (if logo unavailable)
- Positioned top-left with padding p-6

**Main Form Area**:
- Vertically centered in viewport
- Form title: "Employee Feedback"
- Subtitle: "Share your thoughts with us. All feedback is valued and reviewed."

**Field Order**:
1. Full Name (required indicator)
2. Department (dropdown, required)
3. Your Feedback (textarea, required with character count)

**Footer**:
- Small text: "Submissions are confidential and reviewed by HR"
- Text size: xs, reduced opacity

## Accessibility

- All inputs have associated labels (not placeholders as labels)
- Required fields marked with asterisk and aria-required
- Clear focus indicators on all interactive elements
- Error states with descriptive messages below fields
- Success message announced to screen readers

## Responsive Behavior

**Mobile (< 768px)**:
- Form container: px-4, full-width with minimal side margins
- Maintain vertical spacing
- Full-width button

**Desktop (>= 768px)**:
- Form container: centered with max-width
- Comfortable whitespace around form
- Button auto-width, centered

## Images
**No images required** - This is a form-focused utility interface where imagery would distract from the primary task. Clean, minimal interface reinforces professionalism and efficiency.