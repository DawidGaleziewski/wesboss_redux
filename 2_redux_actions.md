# actions and action creators

Action is something that happens in the application action is dispatched to the store with payload.
payload contains the information on what specifically happened:
- which action got deleted
- which photo got upvoted
- what ammount was added

Reducers - how do we actually update the data

## action creator structure

```javascript
// ACTION Creator - function that will return body of a action
const increment = (index) => {
    // ACTION - body returned of a action that will be dispatch
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
```