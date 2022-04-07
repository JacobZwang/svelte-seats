# Svelte Seats

> Not ready for public use! Api is likely to change and documentation is slim.

library for creating seating layouts in Sveltejs

```svelte
<div class="grid grid-cols-2 gap-x-8">
    <SeatsLinearLayout columns={10} rows={10} alphabeticRows reverseColumns />
    <SeatsLinearLayout columns={10} rows={10} alphabeticRows reverseColumns offsetColumns={10} />
</div>
```

## Layout Types

### Linear Layout

```svelte
// generate from count
<SeatsLinearLayout columns={10} rows={10} />

// generate from array
<SeatsLinearLayout columns={['PP', 'NN', 'MM', 'LL']} ... />

// offset columns and row numbers
<SeatsLinearLayout columns={10} offsetColumns={100} ... />

// exclude specific seats
<SeatsLinearLayout columns={10} exclude={[{x: 0, y: 0}]} ... />

// increment rows or column numbers by larger than 1 ex: 1, 3, 5
<SeatsLinearLayout columns={10} incrementColums={2} ... />

// make rows and/or columns alphabetic
<SeatsLinearLayout columns={10} alphabeticColumns ... />

// reverse columns
<SeatsLinearLayout columns={10} reverseColumns ... />
```

## Layouts (Coming Soon)

### Arc Layout

Will work similar to grid but allow arced layouts. Maybe it should be a parameter on the SeatsLinearLayout? (This may be a bad idea because the arc component may be much heavier weight.)

### XY Layout

Will allow for placing seats using an array of xy coordinates and rotations.

## Integration Options

- use svelte package in your existing svelte project
- compile svelte component as web component for your existing project

## Integration Options (Coming Soon)

- web component library for creating layouts outside of svelte
