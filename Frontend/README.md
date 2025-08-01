# DreamDecoder - Dream Journaling & AI Interpretation App

A comprehensive dream journaling application that allows users to record their dreams and get AI-powered interpretations and story generation.

## Features

### 🏠 Homepage
- Beautiful hero section with call-to-action
- Navigation to all main features
- Action grid with four main functionalities

### 📖 Dream Journal
- **Journal Entry**: Record daily journal entries with calendar integration
- **Dream Entry**: Dedicated form for recording dreams
- Tabbed interface for easy switching between entry types

### 🤖 AI Dream Interpreter
- Select from saved dreams via dropdown
- Interactive chatbot interface
- Choose between "Fun" and "Psych" analysis types
- Real-time conversation with AI interpreter

### 📚 Story Generator
- Transform dreams into engaging stories
- AI-powered narrative creation
- Interactive chat interface for story development

### 🎬 Storyboard Generator
- Create visual storyboards from dreams
- Scene-by-scene breakdown
- Visual storytelling elements

## Technical Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **Styling**: Pure CSS with CSS Custom Properties
- **Fonts**: Google Fonts (Inter, Irish Grover, Alegreya, Inknut Antiqua, Montserrat, Poppins, Gwendolyn)

## Component Architecture

### Reusable Components
- `Navigation` - Top navigation bar with brand and links
- `Button` - Customizable button with multiple variants
- `Dropdown` - Interactive dropdown with search functionality
- `Tabs` - Tab navigation component
- `Calendar` - Full-featured calendar with date selection
- `Chatbot` - Interactive chat interface for AI communication

### Pages
- `Homepage` - Landing page with hero and action grid
- `Journal` - Main journal selection page
- `JournalEntry` - Daily journal writing interface
- `DreamEntry` - Dream-specific entry form
- `Interpreter` - AI dream interpretation interface
- `StoryGenerator` - AI story creation interface
- `StoryboardGenerator` - Visual storyboard creation

## Design System

### Colors
- **Primary Purple**: `#7949FF`
- **Dark Purple**: `#6500D0`
- **Medium Purple**: `#9747FF`
- **Light Purple**: `#E9E1FF`
- **Border Purple**: `#D3BAFF`
- **Background Overlay**: `rgba(6, 0, 174, 0.40)`

### Typography
- **Headings**: Irish Grover (hero), Inter (sections)
- **Body Text**: Poppins, Inter
- **Form Text**: Gwendolyn, Inknut Antiqua
- **Buttons**: Alegreya

## Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd dream-decoder
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Calendar.jsx
│   ├── Chatbot.jsx
│   ├── Dropdown.jsx
│   ├── Navigation.jsx
│   └── Tabs.jsx
├── pages/              # Page components
│   ├── DreamEntry.jsx
│   ├── Homepage.jsx
│   ├── Interpreter.jsx
│   ├── Journal.jsx
│   ├── JournalEntry.jsx
│   ├── StoryGenerator.jsx
│   └── StoryboardGenerator.jsx
├── App.jsx             # Main app component with routing
├── index.css           # Global styles and design system
└── main.jsx           # React app entry point
```

## Key Features Implemented

✅ **Complete Navigation System**
- Responsive navigation with logo and menu items
- Consistent across all pages

✅ **Homepage with Hero Section**
- Full-screen hero with background image
- Call-to-action button
- Action grid with four main features

✅ **Journal System**
- Dual-tab interface (Journal Entry / Dream Entry)
- Calendar integration for date selection
- Rich text areas for content entry

✅ **AI Chatbot Interfaces**
- Interactive chat UI for all AI features
- Message history and real-time interaction
- Regenerate response functionality

✅ **Dream Selection**
- Dropdown component for selecting saved dreams
- Used across interpretation and generation features

✅ **Responsive Design**
- Mobile-friendly layouts
- Breakpoint-based responsive behavior
- Optimized for various screen sizes

## Future Enhancements

- **Backend Integration**: Connect to AI services for real interpretation
- **Database Storage**: Save dreams and journal entries
- **User Authentication**: Personal accounts and data persistence
- **Export Functionality**: PDF/image export of stories and storyboards
- **Social Features**: Share dreams and interpretations
- **Advanced Calendar**: Multiple months, recurring entries
- **Themes**: Dark mode and custom color schemes

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**DreamDecoder** - *Record Your Dreams. Let AI Reveal Their Secrets.*
#   D r e a m D e c o d e r  
 #   D r e a m e r  
 