/***
 
1.To create a form:  use form tag and onSubmit handler with event(e) from e access>> e.target.[name of input field].value

2.Controlled Element: (StatefulForm.jsx)
>> use individual field state for each input field.
>> one object in a state holding all the input fields value. 

3.Uncontrolled Element: useRef to create a reference to the element and access value by using like: [nameRef.current.value]

4.Custom Hook: 
>> use hook to handle states and submit and error. (HookForm.jsx)
>> reuseable component.

5.Reusable Form: same form(input field, button,) used for multiple times using props to create multiple forms in same component.

 */