#Node verion
v10.15.3

#Library used
react-input-range

## React Loan Calculator

> Simple react loan calculator

Drag sliders and get an accurate loan amount.


## Documentation

### Amount Range Slider

- A controlled component that can accept number values between 500 and 50000
- Increases or decreases by a number value of 100 at a time ('step' prop)

### Month Range Slider

- A controlled component that can accept number values between 6 and 24
- The values indicate the amount of months
- Increases or decreases by a number value of 1 month at a time ('step' prop), to represent changes of 1 month at a time.

### Display component

- Must have two props: 'months' and 'amount', both values are numbers.
