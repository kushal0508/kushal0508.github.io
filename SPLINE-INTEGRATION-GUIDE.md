# Spline Scene Integration Guide

This document provides comprehensive instructions for integrating the Spline Scene components into your shadcn project.

## Project Structure

The project already supports:
- ✅ shadcn project structure (components/ui directory)
- ✅ Tailwind CSS (configured in tailwind.config.ts)
- ✅ TypeScript (configured in tsconfig.json)

## Component Files

All components have been integrated into the `/components/ui` directory:

### 1. SplineScene Component (`components/ui/splite.tsx`)
A lazy-loaded 3D scene component using Spline and React.

**Props:**
- `scene: string` - The Spline scene URL
- `className?: string` - Additional CSS classes

**Features:**
- Lazy loading for performance
- Suspense fallback with loading indicator
- Full responsive support

### 2. SplineSceneBasic Component (`components/ui/demo.tsx`)
A complete demo showing the SplineScene in action with:
- Interactive 3D content on the right
- Text content on the left
- Spotlight effect for enhanced visuals

### 3. Card Component (`components/ui/card.tsx`)
Standard shadcn Card component with:
- Border, background, and shadow styles
- Header, title, description, content, and footer sections

### 4. Spotlight Component (`components/ui/spotlight.tsx`)
Two spotlight implementations available:
- **aceternity/spotlight** (default): Static SVG spotlight effect
- **ibelick/spotlight** (spotlight-ibelick.tsx): Interactive mouse-tracking spotlight

## Dependencies

All required dependencies are already installed:
```json
"@splinetool/react-spline": "^4.0.0",
"@splinetool/runtime": "^1.9.48",
"framer-motion": "^11.11.17"
```

## Usage Examples

### Basic Usage
```tsx
import { SplineScene } from "@/components/ui/splite";

<SplineScene 
  scene="https://prod.spline.design/your-scene-url"
  className="w-full h-[500px]"
/>
```

### With Demo Component
```tsx
import { SplineSceneBasic } from "@/components/ui/demo";

<SplineSceneBasic />
```

### Interactive Spotlight
```tsx
import { Spotlight } from "@/components/ui/spotlight";

<div className="relative h-[400px]">
  <Spotlight size={300} />
  <YourContent />
</div>
```

## Customization Guide

### Changing the Spline Scene
Replace the scene URL in the `SplineScene` component:
```tsx
<SplineScene 
  scene="https://prod.spline.design/YOUR-CUSTOM-SCENE-URL"
  className="w-full h-[500px]"
/>
```

### Modifying the Spotlight Effect
For the interactive spotlight, adjust these props:
- `size`: Controls the spotlight diameter
- `springOptions`: Custom animation settings

### Styling the Card
The Card component accepts standard Tailwind CSS classes:
```tsx
<Card className="w-full max-w-2xl mx-auto">
  <CardContent>
    Your content here
  </CardContent>
</Card>
```

## Implementation Steps

1. **Copy Components**: All components are already in `/components/ui`
2. **Install Dependencies**: Already done
3. **Use Components**: Import and use in your pages
4. **Customize**: Modify props and styles as needed

## Common Issues and Solutions

### Issue: Spline Scene Not Loading
**Solution**: Ensure the scene URL is correct and accessible.

### Issue: Spotlight Not Visible
**Solution**: The spotlight has `opacity-0` by default and only shows on hover (for ibelick version) or requires CSS animation.

### Issue: TypeScript Errors
**Solution**: Ensure TypeScript configuration is correct and all imports are properly typed.

## Best Practices

1. **Performance**: Use lazy loading for 3D scenes
2. **Responsiveness**: Always provide className for responsive sizing
3. **Accessibility**: Add appropriate ARIA labels for interactive elements
4. **Loading States**: Use the built-in Suspense fallback for better UX

## Next Steps

1. Add your own Spline scene URL
2. Customize the styling to match your design
3. Add error boundaries for production use
4. Consider adding loading optimizations

## File Structure

```
components/
  ui/
    splite.tsx          # SplineScene component
    demo.tsx           # SplineSceneBasic demo
    card.tsx           # Card component
    spotlight.tsx      # Aceternity spotlight
    spotlight-ibelick.tsx # Interactive spotlight
```

## Documentation Notes

- The `roboat` reference in the original request appears to be a typo or outdated reference
- All components follow shadcn/ui conventions
- TypeScript support is built-in
- Tailwind CSS is fully integrated
- The project is ready for production use
