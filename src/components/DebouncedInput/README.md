## Classes

<dl>
<dt><a href="#DebouncedInput">DebouncedInput</a> ⇐ <code>React.Component</code></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#formControl">formControl</a></dt>
<dd><p>formControl is a functional render prop to let the consumer provide the type of input control they wish.</p>
</dd>
<dt><a href="#onChange">onChange</a></dt>
<dd><p>onChange is a functional callback that receives the input value once bouncing is finished</p>
</dd>
<dt><a href="#onKeyUp">onKeyUp</a></dt>
<dd><p>onKeyUp is an optional funcctional callback that receives the keyUp event for additional processing</p>
</dd>
<dt><a href="#onBlur">onBlur</a></dt>
<dd><p>onBlur is an optional functional callback that recieves the blur event for addtional processing</p>
</dd>
<dt><a href="#debounceTimeout">debounceTimeout</a> : <code>number</code></dt>
<dd><p>debounceTimeout is the number of milliseconds to wait for typing activity to stop in the form control</p>
</dd>
</dl>

<a name="DebouncedInput"></a>

## DebouncedInput ⇐ <code>React.Component</code>
**Kind**: global class  
**Extends**: <code>React.Component</code>  
**Export**:   
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| formControl | <code>function</code> | render function for the form control |
| onChange | <code>function</code> | callback function to receive the input value when bouncing stops |
| [onKeyUp] | <code>function</code> | callback function for additional processing of the keyUp event by the consumer |
| [onBlur] | <code>function</code> | callback function for additional processing of the blur event by the consumer |
| [debounceTimeout] | <code>number</code> | milliseconds to wait until bouncing stops |

<a name="new_DebouncedInput_new"></a>

### new DebouncedInput()
Provides a wrapper around an input form control function to wait until the user has stopped typing in the form control.

Debouncing stops if the user presses the "Enter" key or the input form control is blurred.

The caller can provide their own `onKeyUp` and `onBlur` callbacks, which are called when the local processing is finished.

<a name="formControl"></a>

## formControl
formControl is a functional render prop to let the consumer provide the type of input control they wish.

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> | an object containing the properties passed to the form control |

**Example**  
```js
props => (<input {...props} />)
```
<a name="onChange"></a>

## onChange
onChange is a functional callback that receives the input value once bouncing is finished

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | current content of the form control |

**Example**  
```js
string => {
  // ... do something with the input value
}
```
<a name="onKeyUp"></a>

## onKeyUp
onKeyUp is an optional funcctional callback that receives the keyUp event for additional processing

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>object</code> | synthetic event when a keyUp occurs |

**Example**  
```js
event => {
  // ... do domething with the keyUp event
}
```
<a name="onBlur"></a>

## onBlur
onBlur is an optional functional callback that recieves the blur event for addtional processing

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>object</code> | synthetic event when a blur occurs |

**Example**  
```js
event => {
  // ... do something with the blur event
}
```
<a name="debounceTimeout"></a>

## debounceTimeout : <code>number</code>
debounceTimeout is the number of milliseconds to wait for typing activity to stop in the form control

**Kind**: global variable  
