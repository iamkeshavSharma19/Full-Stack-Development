//&A synthetic event is a cross-browser wrapper around the browser's native event object.

//& React normalises events so that they behave identically across all browsers

//& Instead of getting a raw MouseEvent or keyboard event from the DOM,you get a SyntheticEvent object that has the same interface {preventDefault(), stopPropagation(), target, currentTarget etc} but works consistently everywhere.
