# Akeem Mohammed - Professional Portfolio

A modern, responsive portfolio website showcasing my skills, experience, and projects. Built with React.js and featuring smooth animations and professional design.

## 🌟 Features

### Modern Design
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Glass Morphism**: Beautiful frosted glass effects with backdrop blur
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Gradient Background**: Eye-catching purple gradient design

### Navigation
- **Fixed Navigation Bar**: Easy access to all sections
- **Smooth Transitions**: Animated section changes
- **Active State Indicators**: Clear visual feedback

### Sections
1. **Home**: Personal introduction with profile picture and resume link
2. **Experience**: Detailed work history and achievements
3. **Skills**: Technical skills with proficiency levels and icons
4. **Projects**: Showcase of personal and professional projects
5. **Contact**: Contact form and professional links

## 🛠️ Technologies Used

- **Frontend**: React.js 18
- **Styling**: CSS3 with modern features (Grid, Flexbox, Backdrop Filter)
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Netlify

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ak55m/my-profile.git
   cd my-profile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── App.js              # Main application component
│   ├── Navigation.js       # Navigation bar component
│   ├── Owner.js           # Home/About section
│   ├── Experience.js      # Work experience section
│   ├── Skills.js          # Technical skills section
│   ├── Projects.js        # Projects showcase section
│   ├── Contact.js         # Contact form section
│   └── Clock.js           # Clock component
├── styles/
│   ├── design.css         # Original styling
│   ├── portfolio.css      # Modern portfolio styles
│   └── clock.css          # Clock component styles
├── img/                   # Images and logos
└── pdf/                   # Resume and documents
```

## 🎨 Design Features

### Color Scheme
- Primary gradient: Purple to blue (`#667eea` to `#764ba2`)
- Text: White with varying opacity levels
- Accents: Semi-transparent whites for glass effects

### Typography
- Clean, modern font stack
- Responsive font sizes
- Proper hierarchy with different weights

### Animations
- **Page Transitions**: Smooth fade-in effects
- **Hover Effects**: Scale and shadow animations
- **Stagger Animations**: Sequential element reveals
- **Spring Animations**: Natural movement feel

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full layout with side-by-side sections
- **Tablet**: Adjusted spacing and grid layouts
- **Mobile**: Stacked layout with touch-friendly navigation

## 🔧 Customization

### Adding New Skills
Edit `src/Skills.js` and add new skills to the `skills` array:
```javascript
{ name: 'New Skill', icon: <IconComponent />, level: 'Advanced' }
```

### Adding New Projects
Edit `src/Projects.js` and add new projects to the `projects` array:
```javascript
{
  title: "Project Name",
  description: "Project description",
  technologies: ["Tech1", "Tech2"],
  liveLink: "https://project-url.com",
  githubLink: "https://github.com/username/project"
}
```

### Updating Contact Information
Edit `src/Contact.js` and update the `contactInfo` array with your details.

## 🚀 Deployment

The portfolio is deployed on Netlify and can be accessed at:
[https://akeemmohammed.netlify.app](https://akeemmohammed.netlify.app)

### Build for Production
```bash
npm run build
```

## 📞 Contact

- **Email**: akeem.mohammed@utdallas.edu
- **LinkedIn**: [linkedin.com/in/akeem-mohammed](https://linkedin.com/in/akeem-mohammed)
- **GitHub**: [github.com/ak55m](https://github.com/ak55m)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Akeem Mohammed** - Computer Science Graduate Student @ University of Texas at Dallas
