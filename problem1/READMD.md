# Stock price

### Problem Explain

[programers src](https://programmers.co.kr/learn/courses/30/lessons/42584)

### Solution

Stack has index of stock price. When meet low price, answer update to 'current index - record', and pop record. lefts of record are never descendented, so 'time - record'