#include <string>
#include <vector>
#include <stack>

using namespace std;

vector<int> solution(vector<int> prices) {
    vector<int> answer(prices.size(), 0);
    stack<int> records;
    
    for (int i = 0; i < prices.size(); i++) {
        while (!records.empty() && prices[records.top()] > prices[i]) {
            answer[records.top()] = i - records.top();
            records.pop();
        }
        records.push(i);
    }
    
    while (!records.empty()) {
        answer[records.top()] = prices.size() - records.top() - 1;
        records.pop();
    }
    
    return answer;
}