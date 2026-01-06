// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

// ============================================
// РЕШЕНИЕ:
// Используем стек (stack) для отслеживания открывающих скобок.
// При встрече открывающей скобки - добавляем в стек.
// При встрече закрывающей - проверяем, соответствует ли она последней открывающей.
// Если стек пуст в конце - все скобки правильно закрыты.
// ============================================
// ВРЕМЕННАЯ СЛОЖНОСТЬ: O(n) - один проход по строке
// ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ: O(n) - в худшем случае все символы в стеке
// ============================================

var isValid = function(s) {
    // Шаг 1: Создаем стек для хранения открывающих скобок
    const stack = []
    // Шаг 2: Создаем объект с парами скобок
    const bracketPairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    // Шаг 3: Проходим по каждому символу строки
    for(let char of s){
        // Шаг 4: Если символ - открывающая скобка
        if(bracketPairs[char]){
            // Шаг 5: Добавляем её в стек
            stack.push(char)
        } else {
            // Шаг 6: Если символ - закрывающая скобка
            // Шаг 7: Проверяем, есть ли открывающая скобка в стеке
            if(stack.length === 0){
                return false
            }
            // Шаг 8: Берем последнюю открывающую скобку из стека
            // Шаг 9: Проверяем, соответствует ли она текущей закрывающей
            if(bracketPairs[stack.pop()] !== char){
                return false
            }
        }
    }

    // Шаг 10: Если стек пуст - все скобки правильно закрыты
    return stack.length === 0
};