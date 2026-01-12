# Guild Employee Feedback Form

An internal employee feedback form application for Guild that allows employees to submit feedback to HR.

![Guild Feedback Form Screenshot](docs/screenshot.png)

## Features

- **Simple Form Interface**: Clean, centered form with name, department dropdown, and message textarea
- **Department Selection**: 7 departments to choose from (Engineering, Marketing, Sales, HR, Finance, Operations, Product)
- **Character Counter**: Live character count for feedback messages
- **Form Validation**: All fields are required with proper validation
- **CSV Storage**: Submissions are saved to a CSV file with timestamps
- **Thank You Screen**: Confirmation message after submission with option to submit another response
- **Guild Branding**: Official Guild colors, Maitree font, and logo

## Branding

This application uses Guild's official brand guidelines:

| Element | Value |
|---------|-------|
| Primary Color (Orange) | `#ED732E` |
| Background (Ivory) | `#F8F2E9` |
| Text (Charcoal) | `#170B01` |
| Primary Font | Maitree |
| Secondary Font | Helvetica Neue |

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Backend**: Express.js
- **Data Storage**: CSV file (`feedback.csv`)
- **Build Tool**: Vite

## Project Structure

```
├── client/                 # React frontend
│   └── src/
│       ├── components/ui/  # shadcn/ui components
│       ├── pages/          # Page components
│       └── index.css       # Global styles with Guild branding
├── server/                 # Express backend
│   ├── index.ts            # Server entry point
│   └── routes.ts           # API endpoints
├── shared/                 # Shared code
│   └── schema.ts           # Zod validation schemas
└── feedback.csv            # Stored feedback submissions
```

## API Endpoints

### POST /api/feedback

Submit new feedback.

**Request Body:**
```json
{
  "name": "John Doe",
  "department": "Engineering",
  "message": "Your feedback message here..."
}
```

**Response:**
```json
{
  "success": true
}
```

## Running Locally

The application runs on port 5000:

```bash
npm run dev
```

## Demo Notice

This application includes a scrolling ticker banner indicating it is for demo purposes only (AI Champions Onsite Jan, 2026).

---

Built with Replit Agent
