# Utility Classes Reference

Quick reference for the Minimal Elemental design system utility classes.

## Spacing

### Padding
- `.p-0` - No padding
- `.p-sm` - Small padding (0.5rem)
- `.p-md` - Medium padding (1rem)
- `.p-lg` - Large padding (1.5rem)
- `.p-xl` - Extra large padding (2rem)
- `.p-2xl` - 2X large padding (3rem)

### Margin
- `.m-0` - No margin
- `.m-sm` - Small margin (0.5rem)
- `.m-md` - Medium margin (1rem)
- `.m-lg` - Large margin (1.5rem)
- `.m-xl` - Extra large margin (2rem)
- `.m-2xl` - 2X large margin (3rem)
- `.m-auto` - Auto margin (centers horizontally)

### Gap
- `.gap-sm` - Small gap (0.5rem)
- `.gap-md` - Medium gap (1rem)
- `.gap-lg` - Large gap (1.5rem)
- `.gap-xl` - Extra large gap (2rem)

## Display

- `.flex` - Flexbox display
- `.grid` - Grid display
- `.block` - Block display
- `.inline` - Inline display
- `.hidden` - Hide element

## Flexbox

- `.flex-col` - Column direction
- `.flex-row` - Row direction
- `.items-center` - Center items vertically
- `.items-start` - Align items to start
- `.items-end` - Align items to end
- `.justify-center` - Center content horizontally
- `.justify-between` - Space between
- `.justify-start` - Justify to start
- `.justify-end` - Justify to end
- `.flex-wrap` - Allow wrapping
- `.flex-1` - Flex grow

## Text

### Alignment
- `.text-center` - Center text
- `.text-left` - Left align
- `.text-right` - Right align

### Colors
- `.text-accent` - Accent color (cyan)
- `.text-muted` - Muted text color
- `.text-white` - White text

### Sizes
- `.text-sm` - Small text (0.9rem)
- `.text-md` - Medium text (1rem)
- `.text-lg` - Large text (1.25rem)
- `.text-xl` - Extra large text (1.5rem)

### Weight
- `.font-bold` - Bold weight
- `.font-normal` - Normal weight

## Width

- `.w-full` - Full width (100%)
- `.w-auto` - Auto width
- `.max-w-sm` - Max width small (24rem)
- `.max-w-md` - Max width medium (32rem)
- `.max-w-lg` - Max width large (48rem)
- `.max-w-xl` - Max width extra large (64rem)
- `.max-w-full` - Max width 100%

## Container

- `.container` - Centered container with max-width and padding

## Borders

- `.border` - Standard border
- `.border-accent` - Accent border
- `.border-t` - Top border
- `.border-b` - Bottom border
- `.rounded` - Standard border radius
- `.rounded-sm` - Small border radius
- `.rounded-lg` - Large border radius

## Background

- `.bg-secondary` - Secondary background
- `.bg-card` - Card background

## Position

- `.sticky` - Sticky positioning
- `.relative` - Relative positioning
- `.absolute` - Absolute positioning
- `.fixed` - Fixed positioning
- `.top-0` - Top: 0
- `.z-100` - Z-index: 100

## Overflow

- `.overflow-hidden` - Hide overflow
- `.overflow-auto` - Auto overflow

## Cursor

- `.cursor-pointer` - Pointer cursor
- `.cursor-not-allowed` - Not allowed cursor

## Usage Examples

```html
<!-- Spacing -->
<div class="p-lg m-md">Content</div>

<!-- Flexbox Layout -->
<div class="flex items-center justify-between">
  <span>Left</span>
  <span>Right</span>
</div>

<!-- Text Styling -->
<p class="text-accent text-lg text-center">Highlighted Text</p>

<!-- Width Control -->
<div class="w-full max-w-lg m-auto">Centered container</div>

<!-- Borders -->
<div class="border rounded p-md">Card-like element</div>
```

