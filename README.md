# VIMM Framework Documentation

This repository contains the official documentation website for the VIMM streaming framework. The site provides comprehensive guides for deploying and configuring all VIMM components.

## Quick Start

1. **Clone this repository**:
   ```bash
   git clone https://github.com/VIMM-TV/vimm-docs.git
   cd vimm-docs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Go to `http://localhost:3000`

## Deployment to Vercel

### Automatic Deployment

1. **Fork this repository** to your GitHub account

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import this repository

3. **Deploy**:
   - Vercel will automatically detect Next.js
   - Click "Deploy"
   - Your site will be live in minutes!

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   ├── getting-started/    # Getting started guides
│   ├── components/         # Component documentation
│   ├── deployment/         # Deployment guides
│   ├── configuration/      # Configuration guides
│   └── guides/            # Additional guides
├── public/                # Static assets
├── styles/                # Global styles
└── content/               # MDX content files
```

## Contributing

We welcome contributions to improve the documentation!

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/improve-docs`
3. **Make your changes**
4. **Test locally**: `npm run dev`
5. **Submit a pull request**

### Adding New Pages

1. Create a new MDX file in the appropriate directory
2. Add the page to the navigation in `app/components/sidebar.tsx`
3. Test your changes locally

### Content Guidelines

- Use clear, concise language
- Include code examples where helpful
- Add screenshots for UI-related instructions
- Keep sections focused and well-organized

## Features

- ✅ **Next.js 14** with App Router
- ✅ **MDX** support for rich content
- ✅ **Dark/Light theme** toggle
- ✅ **Responsive design** for all devices
- ✅ **Syntax highlighting** for code blocks
- ✅ **Copy-to-clipboard** for code examples
- ✅ **SEO optimized** with proper meta tags
- ✅ **Fast search** functionality
- ✅ **Vercel deployment** ready

## License

This documentation is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Documentation Issues**: Open an issue in this repository
- **VIMM Framework Issues**: Check the relevant component repository
- **Community**: Join our Discord/Telegram for discussions

---

Built with ❤️ for the VIMM community