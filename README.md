# CyberSec'25 | ElTmsah Platform

A comprehensive Next.js platform for Cyber Security 2025 course management, built and maintained by students for students.

## 🚀 Features

- **Dynamic Content**: Fetch course materials, tasks, and schedules from external JSON files
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Cyber Academic Theme**: Dark background with neon blue accents
- **Real-time Updates**: Content updates automatically when JSON files change
- **WhatsApp Integration**: Quick communication via floating WhatsApp button
- **Search & Filter**: Easy content discovery with search and filtering capabilities
- **Print-Friendly**: Schedule page optimized for printing
- **Accessibility**: Built with accessibility best practices

## 📁 Project Structure

```
cybersec25-eltmsah/
├── pages/                    # Next.js pages
│   ├── index.js             # Home page with overview
│   ├── schedule.js          # Class schedules (Group A/B)
│   ├── materials.js         # Course materials with search/filter
│   ├── tasks.js             # Assignments with status tracking
│   ├── announcements.js     # Important announcements
│   ├── about.js             # About page and contact info
│   └── _app.js              # App wrapper with global styles
├── components/              # React components
│   ├── Navbar.js            # Navigation with mobile menu
│   ├── Footer.js            # Footer with links
│   ├── WhatsAppButton.js    # Floating WhatsApp contact
│   ├── MaterialCard.js      # Material display card
│   └── TaskCard.js          # Task display with status toggle
├── styles/                  # CSS stylesheets
│   ├── globals.css          # Global styles and variables
│   └── components.css       # Component-specific styles
├── public/                  # Static assets
│   ├── data/               # Example JSON files
│   ├── assets/             # Images and PDFs
│   └── favicon.ico         # Site favicon
├── package.json            # Dependencies and scripts
├── next.config.js          # Next.js configuration
└── README.md               # This file
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (Pages Router)
- **Styling**: Custom CSS with CSS Variables
- **Animations**: AOS (Animate On Scroll)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins, Orbitron)
- **Deployment**: Vercel-ready

## 🚀 Quick Start

### 1. Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd cybersec25-eltmsah

# Install dependencies
npm install
```

### 2. Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### 3. Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔗 Connecting to GitHub Data

To make the platform dynamic, you need to host your JSON data files on GitHub and update the URLs in the code.

### Step 1: Create JSON Files on GitHub

1. Create a new GitHub repository (or use an existing one)
2. Create a `data/` folder in your repository
3. Add your JSON files:
   - `materials.json` - Course materials data
   - `tasks.json` - Assignments and tasks data
   - `schedule.json` - Class schedules data
   - `announcements.json` - Announcements data (optional)

### Step 2: Update URLs in Code

Replace the placeholder URLs in these files:

**In `pages/materials.js`:**
```javascript
// TODO: Replace this URL with your actual GitHub raw URL
const MATERIALS_JSON_URL = "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/data/materials.json"
```

**In `pages/tasks.js`:**
```javascript
// TODO: Replace this URL with your actual GitHub raw URL
const TASKS_JSON_URL = "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/data/tasks.json"
```

**In `pages/schedule.js`:**
```javascript
// TODO: Replace this URL with your actual GitHub raw URL
const SCHEDULE_JSON_URL = "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/data/schedule.json"
```

### Step 3: JSON Data Format

#### materials.json
```json
[
  {
    "id": "mat-1",
    "title": "Course Material Title",
    "course": "Course Name",
    "uploaded_by": "Instructor Name",
    "date": "2025-01-15",
    "pdf_url": "https://drive.google.com/file/d/your-file/view"
  }
]
```

#### tasks.json
```json
[
  {
    "id": "task-1",
    "title": "Assignment Title",
    "course": "Course Name",
    "due_date": "2025-02-15",
    "description": "Assignment description",
    "status": "open"
  }
]
```

#### schedule.json
```json
{
  "groupA": [
    {
      "day": "Monday",
      "time": "10:00-11:00",
      "course": "Course Name",
      "location": "Hall A"
    }
  ],
  "groupB": [
    {
      "day": "Monday",
      "time": "14:00-15:00",
      "course": "Course Name",
      "location": "Hall A"
    }
  ]
}
```

## 🎨 Customization

### Colors and Theme

The platform uses CSS variables for easy theming. Edit `styles/globals.css`:

```css
:root {
  --bg-primary: #0A0A0A;        /* Main background */
  --neon-blue: #00BFFF;         /* Primary accent color */
  --text-primary: #E0E0E0;      /* Main text color */
  --accent-silver: #C0C0C0;     /* Secondary accent */
}
```

### WhatsApp Contact

Update the WhatsApp number in `components/WhatsAppButton.js`:

```javascript
window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank')
```

### Profile Information

Update the profile information in `pages/about.js`:

```javascript
// Update name, bio, and contact information
```

## 🚀 Deployment on Vercel

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Sign in with your GitHub account
4. Click "New Project"
5. Import your repository
6. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
7. Click "Deploy"

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# Follow the prompts
```

### Environment Variables

If you need environment variables, add them in Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add your variables

## 📱 Mobile Optimization

The platform is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized font sizes for mobile
- Collapsible mobile menu
- WhatsApp integration for easy mobile contact

## 🔧 Development Tips

### Adding New Pages

1. Create a new file in `pages/` directory
2. Follow the existing page structure
3. Add navigation link in `components/Navbar.js`
4. Update the footer links if needed

### Adding New Components

1. Create component file in `components/` directory
2. Add component-specific styles to `styles/components.css`
3. Import and use in your pages

### Styling Guidelines

- Use CSS variables for consistent theming
- Follow the cyber academic design system
- Ensure accessibility (proper contrast, keyboard navigation)
- Test on multiple devices and browsers

## 🐛 Troubleshooting

### Common Issues

**Build Errors:**
- Ensure all dependencies are installed: `npm install`
- Check for syntax errors in your code
- Verify all imports are correct

**Data Not Loading:**
- Check your GitHub raw URLs are correct
- Ensure JSON files are valid and accessible
- Check browser console for fetch errors

**Styling Issues:**
- Clear browser cache
- Check CSS syntax
- Verify Font Awesome and Google Fonts are loading

### Getting Help

1. Check the browser console for errors
2. Verify all JSON URLs are working
3. Ensure all dependencies are installed
4. Contact via WhatsApp for support

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 📞 Support

For support and questions:
- WhatsApp: [Contact via WhatsApp](https://wa.me/201553450232)
- Email: Check the About page for contact information

---

**Built with ❤️ by ElTmsah for the Cyber Security 2025 community**
