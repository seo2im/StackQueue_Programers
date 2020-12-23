# Function development

### Problem Explain

[programers src](https://programmers.co.kr/learn/courses/30/lessons/42586)

### solution

Queue is consist of rest date for release.
```javascript
const queue = progresses.map((per, i) => {
    let j = 1;
	while (per + j * speeds[i] < 100) {
        j += 1;
	}
	return j;
 })
```
When queue's first value is under min value, can't release, so add package. Over it, push package to answer.