import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AccordionItem from './AccordionItem';

const DsaPython = () => {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // DSA with Python Topics Data with Detailed Theory
  const dsaTopics = [
    {
      title: "Python Fundamentals",
      description: "Syntax, data types, loops",
      subtopics: [
        "Variables & Data Types",
        "Loops (for, while)",
        "Functions",
        "Recursion Basics"
      ],
      theoryContent: `
        <div class="space-y-6">
          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🔤 Variables & Data Types</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">A variable is a container used to store data values in memory. In Python, variables are dynamically typed, meaning you don't need to declare their type explicitly.</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Real-life Analogy:</h4>
                <p class="text-gray-700 dark:text-gray-300">Think of a variable as a labeled box where you can store different items. You can put a book, a toy, or food in the same box at different times.</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Examples:</h4>
                <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg overflow-x-auto">
                  <pre class="text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre"><code>x = 10          # Integer
name = "Kuldeep"  # String
price = 99.99    # Float
is_valid = True  # Boolean</code></pre>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Key Points:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>No need to declare variable type explicitly</li>
                  <li>Can change value and type anytime</li>
                  <li>Variable names are case-sensitive</li>
                  <li>Use descriptive names (snake_case convention)</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-green-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">📊 Data Types in Python</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">Data types define the type of value a variable can hold. Python automatically assigns data type based on the value assigned.</p>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Built-in Data Types:</h4>
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-green-50 dark:bg-slate-700 p-2 rounded">
                    <strong class="text-green-700 dark:text-green-300">int:</strong> Whole numbers (10, -5, 0)
                  </div>
                  <div class="bg-green-50 dark:bg-slate-700 p-2 rounded">
                    <strong class="text-green-700 dark:text-green-300">float:</strong> Decimal numbers (3.14, -2.5)
                  </div>
                  <div class="bg-green-50 dark:bg-slate-700 p-2 rounded">
                    <strong class="text-green-700 dark:text-green-300">str:</strong> Text data ("Hello", 'Python')
                  </div>
                  <div class="bg-green-50 dark:bg-slate-700 p-2 rounded">
                    <strong class="text-green-700 dark:text-green-300">bool:</strong> True/False values
                  </div>
                  <div class="bg-green-50 dark:bg-slate-700 p-2 rounded">
                    <strong class="text-green-700 dark:text-green-300">list:</strong> Ordered, mutable collection
                  </div>
                  <div class="bg-green-50 dark:bg-slate-700 p-2 rounded">
                    <strong class="text-green-700 dark:text-green-300">tuple:</strong> Ordered, immutable collection
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Examples:</h4>
                <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg overflow-x-auto">
                  <pre class="text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre"><code>age = 25              # int
height = 5.9          # float
message = "Hello"     # str
is_student = True     # bool
numbers = [1,2,3,4]   # list
coordinates = (10,20) # tuple</code></pre>
                </div>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-purple-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🔄 Loops in Python</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">Loops are control structures that allow you to execute a block of code multiple times. Python supports two main types: for loops and while loops.</p>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Types of Loops:</h4>
                <div class="space-y-2">
                  <div>
                    <strong class="text-purple-700 dark:text-purple-300">For Loop:</strong> Used when you know how many times to iterate
                  </div>
                  <div>
                    <strong class="text-purple-700 dark:text-purple-300">While Loop:</strong> Used when you want to continue until a condition becomes false
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Examples:</h4>
                <div class="space-y-3">
                  <div>
                    <strong class="text-purple-700 dark:text-purple-300">For Loop:</strong>
                    <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg overflow-x-auto mt-2">
                      <pre class="text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre"><code>for i in range(5):
    print(f"Number: {i}")</code></pre>
                    </div>
                  </div>
                  <div>
                    <strong class="text-purple-700 dark:text-purple-300">For Loop with List:</strong>
                    <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg overflow-x-auto mt-2">
                      <pre class="text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre"><code>fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)</code></pre>
                    </div>
                  </div>
                  <div>
                    <strong class="text-purple-700 dark:text-purple-300">While Loop:</strong>
                    <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg overflow-x-auto mt-2">
                      <pre class="text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre"><code>count = 0
while count < 3:
    print(f"Count: {count}")
    count += 1</code></pre>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Key Points:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>for loops are used with iterables (lists, strings, range)</li>
                  <li>while loops continue until condition becomes False</li>
                  <li>Use break to exit loop early</li>
                  <li>Use continue to skip current iteration</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-orange-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">⚙️ Functions in Python</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">A function is a reusable block of code that performs a specific task. Functions help organize code, reduce repetition, and make programs more modular.</p>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Why Functions Matter:</h4>
                <p class="text-gray-700 dark:text-gray-300">Functions allow you to write code once and use it multiple times. They make your code more readable, maintainable, and easier to debug.</p>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Examples:</h4>
                <div class="space-y-3">
                  <div>
                    <strong class="text-orange-700 dark:text-orange-300">Simple Function:</strong>
                    <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg overflow-x-auto mt-2">
                      <pre class="text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre"><code>def greet():
    print("Hello, World!")</code></pre>
                    </div>
                  </div>
                  <div>
                    <strong class="text-orange-700 dark:text-orange-300">Function with Parameters:</strong>
                    <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg overflow-x-auto mt-2">
                      <pre class="text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre"><code>def greet_person(name):
    print(f"Hello, {name}!")</code></pre>
                    </div>
                  </div>
                  <div>
                    <strong class="text-orange-700 dark:text-orange-300">Function with Return Value:</strong>
                    <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg overflow-x-auto mt-2">
                      <pre class="text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre"><code>def add_numbers(a, b):
    return a + b</code></pre>
                    </div>
                  </div>
                  <div>
                    <strong class="text-orange-700 dark:text-orange-300">Calling Functions:</strong>
                    <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg overflow-x-auto mt-2">
                      <pre class="text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre"><code>greet()                    # Hello, World!
greet_person("Alice")     # Hello, Alice!
result = add_numbers(5, 3) # result = 8</code></pre>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Key Points:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Functions are defined using the 'def' keyword</li>
                  <li>Parameters are optional inputs to functions</li>
                  <li>Functions can return values using the 'return' statement</li>
                  <li>Functions should have descriptive names</li>
                  <li>Functions help in code reusability and organization</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-red-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🔁 Recursion Basics</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">Recursion is a programming technique where a function calls itself to solve a problem. It's particularly useful for problems that can be broken down into smaller, similar subproblems.</p>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">How Recursion Works:</h4>
                <p class="text-gray-700 dark:text-gray-300">A recursive function has two main parts: the base case (when to stop) and the recursive case (when to call itself). Each recursive call works on a smaller version of the same problem.</p>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Classic Example - Factorial:</h4>
                <div class="space-y-3">
                  <div>
                    <strong class="text-red-700 dark:text-red-300">Recursive Function:</strong>
                    <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg overflow-x-auto mt-2">
                      <pre class="text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre"><code>def factorial(n):
    if n == 0 or n == 1:  # Base case
        return 1
    else:                  # Recursive case
        return n * factorial(n-1)</code></pre>
                    </div>
                  </div>
                  <div>
                    <strong class="text-red-700 dark:text-red-300">Usage:</strong>
                    <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg overflow-x-auto mt-2">
                      <pre class="text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre"><code>print(factorial(5))  # Output: 120
print(factorial(3))  # Output: 6</code></pre>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Key Points:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Every recursive function must have a base case to prevent infinite recursion</li>
                  <li>Each recursive call should work on a smaller problem</li>
                  <li>Recursion can be less efficient than iteration due to function call overhead</li>
                  <li>Some problems (like tree traversal) are naturally recursive</li>
                  <li>Python has a recursion limit (usually 1000) to prevent stack overflow</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Arrays & Strings",
      description: "Array operations and string algorithms",
      subtopics: [
        "Array Traversal",
        "Two Pointer Technique",
        "Sliding Window",
        "String Manipulation"
      ],
      theoryContent: `
        <div class="space-y-6">
          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">📊 Array Fundamentals</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">What is an Array?</h4>
                <p class="text-gray-700 dark:text-gray-300">An array is a data structure that stores a fixed-size sequence of elements of the same type. In Python, we use lists to implement arrays. Arrays provide fast access to elements using indices.</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Memory Layout:</h4>
                <p class="text-gray-700 dark:text-gray-300">Arrays store elements in contiguous memory locations. This allows O(1) access time using indices. Index 0 refers to the first element, index n-1 refers to the last element.</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Real-life Analogy:</h4>
                <p class="text-gray-700 dark:text-gray-300">Think of an array as a row of mailboxes in an apartment building. Each mailbox has a number (index) and can store one item (element).</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Basic Operations:</h4>
                <div class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg font-mono text-sm space-y-1">
                  <div>arr = [10, 20, 30, 40, 50]</div>
                  <div>print(arr[0])     # Access first element: 10</div>
                  <div>print(arr[2])     # Access third element: 30</div>
                  <div>print(len(arr))   # Get array length: 5</div>
                  <div>arr.append(60)    # Add element at end</div>
                  <div>arr.insert(1, 15) # Insert at specific position</div>
                </div>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-green-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🔄 Array Traversal</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">Array traversal means visiting each element of the array exactly once to perform some operation. This is fundamental to most array algorithms.</p>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Methods:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-green-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-green-700 dark:text-green-300">Forward Traversal:</strong>
                    <div class="font-mono text-sm mt-1">for i in range(len(arr)):</div>
                    <div class="font-mono text-sm ml-4">print(arr[i])</div>
                  </div>
                  <div class="bg-green-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-green-700 dark:text-green-300">Backward Traversal:</strong>
                    <div class="font-mono text-sm mt-1">for i in range(len(arr)-1, -1, -1):</div>
                    <div class="font-mono text-sm ml-4">print(arr[i])</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Time Complexity:</h4>
                <p class="text-gray-700 dark:text-gray-300">O(n) - Linear time, where n is the number of elements. Each element is visited exactly once.</p>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-purple-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🎯 Two Pointer Technique</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">What is Two Pointer?</h4>
                <p class="text-gray-700 dark:text-gray-300">Two pointer technique uses two indices to traverse an array simultaneously. It's efficient for problems involving pairs, searching, or optimization.</p>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">When to Use:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Finding pairs that sum to a target</li>
                  <li>Removing duplicates from sorted arrays</li>
                  <li>Reversing arrays</li>
                  <li>Finding maximum area problems</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Example - Two Sum:</h4>
                <pre class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg text-sm overflow-x-auto"><code class="language-python">def two_sum(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return []</code></pre>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Key Benefits:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>O(n) time complexity instead of O(n²)</li>
                  <li>O(1) extra space</li>
                  <li>Works on sorted arrays</li>
                  <li>Efficient for large datasets</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-orange-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🪟 Sliding Window Technique</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">Sliding window technique maintains a subset of elements (window) and slides it through the array to find optimal solutions for subarray problems.</p>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">How it Works:</h4>
                <p class="text-gray-700 dark:text-gray-300">Start with a window of fixed/variable size, calculate some metric, then slide the window by moving start or end pointers while maintaining the window size or condition.</p>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Example - Maximum Sum Subarray of Size K:</h4>
                <pre class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg text-sm overflow-x-auto"><code class="language-python">def max_sum_subarray(arr, k):
    if not arr or k > len(arr):
        return 0
    max_sum = current_sum = sum(arr[:k])
    for i in range(k, len(arr)):
        current_sum = current_sum - arr[i-k] + arr[i]
        max_sum = max(max_sum, current_sum)
    return max_sum</code></pre>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Use Cases:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Maximum/minimum sum subarrays</li>
                  <li>Longest substring without repeating characters</li>
                  <li>Smallest subarray with sum greater than target</li>
                  <li>Fruit basket problems</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-red-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🔤 String Manipulation</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Strings in Python:</h4>
                <p class="text-gray-700 dark:text-gray-300">Strings are immutable sequences of characters. Each character has an index, and strings support various operations like slicing, concatenation, and searching.</p>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Key Properties:</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-red-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-red-700 dark:text-red-300">Immutable:</strong> Cannot modify individual characters
                  </div>
                  <div class="bg-red-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-red-700 dark:text-red-300">Ordered:</strong> Characters have fixed positions
                  </div>
                  <div class="bg-red-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-red-700 dark:text-red-300">Indexable:</strong> Access characters by index
                  </div>
                  <div class="bg-red-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-red-700 dark:text-red-300">Sliceable:</strong> Extract substrings easily
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Common Operations:</h4>
                <pre class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg text-sm overflow-x-auto"><code class="language-python">s = "Hello, World!"
print(len(s))           # Length: 13
print(s[0])             # First char: 'H'
print(s[7:12])          # Slice: 'World'
print(s.upper())        # Uppercase
print(s.lower())        # Lowercase
print(s.split(','))     # Split by comma
print(','.join(['a','b'])) # Join with comma</code></pre>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">String Algorithms:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>Pattern Matching:</strong> Finding substrings, KMP algorithm</li>
                  <li><strong>Palindrome Check:</strong> Two pointer approach</li>
                  <li><strong>Anagram Detection:</strong> Character frequency counting</li>
                  <li><strong>String Compression:</strong> Run-length encoding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Linked Lists",
      description: "Linked data structures",
      subtopics: [
        "Singly Linked List",
        "Doubly Linked List",
        "Reverse Linked List",
        "Cycle Detection"
      ],
      theoryContent: `
        <div class="space-y-6">
          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🔗 What is a Linked List?</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">A linked list is a linear data structure where elements are stored in nodes. Each node contains data and a reference (pointer) to the next node in the sequence.</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Node Structure:</h4>
                <div class="bg-blue-50 dark:bg-slate-700 p-4 rounded-lg">
                  <div class="text-center font-mono text-sm">
                    <div class="inline-block border-2 border-blue-300 rounded p-2">
                      <div class="text-blue-700 dark:text-blue-300 font-bold">Data</div>
                      <div class="text-blue-700 dark:text-blue-300 font-bold">Next →</div>
                    </div>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">Each node has data and a pointer to next node</p>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Real-life Analogy:</h4>
                <p class="text-gray-700 dark:text-gray-300">Imagine a treasure hunt where each clue leads to the next location. Each node is like a clue that contains information and points to the next clue.</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Key Characteristics:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>Dynamic Size:</strong> Can grow or shrink during runtime</li>
                  <li><strong>No Contiguous Memory:</strong> Nodes can be scattered in memory</li>
                  <li><strong>Sequential Access:</strong> Must traverse from head to access elements</li>
                  <li><strong>Efficient Insertions/Deletions:</strong> Especially in middle of list</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-green-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">➡️ Singly Linked List</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Structure:</h4>
                <p class="text-gray-700 dark:text-gray-300">Each node has data and a 'next' pointer that points to the next node. The last node points to None (null).</p>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Basic Operations:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-green-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-green-700 dark:text-green-300">Insertion:</strong>
                    <ul class="text-sm mt-1 space-y-1">
                      <li>• At beginning: O(1)</li>
                      <li>• At end: O(n)</li>
                      <li>• At position: O(n)</li>
                    </ul>
                  </div>
                  <div class="bg-green-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-green-700 dark:text-green-300">Deletion:</strong>
                    <ul class="text-sm mt-1 space-y-1">
                      <li>• From beginning: O(1)</li>
                      <li>• From end: O(n)</li>
                      <li>• From position: O(n)</li>
                    </ul>
                  </div>
                  <div class="bg-green-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-green-700 dark:text-green-300">Traversal:</strong>
                    <ul class="text-sm mt-1 space-y-1">
                      <li>• Access any element: O(n)</li>
                      <li>• Search element: O(n)</li>
                      <li>• Print all elements: O(n)</li>
                    </ul>
                  </div>
                  <div class="bg-green-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-green-700 dark:text-green-300">Space:</strong>
                    <ul class="text-sm mt-1 space-y-1">
                      <li>• O(n) for n elements</li>
                      <li>• Extra space for pointers</li>
                      <li>• No wasted space</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Python Implementation:</h4>
                <pre class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg text-sm overflow-x-auto"><code class="language-python">class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None</code></pre>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-purple-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">↔️ Doubly Linked List</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Enhanced Structure:</h4>
                <p class="text-gray-700 dark:text-gray-300">Each node has three parts: data, previous pointer, and next pointer. This allows bidirectional traversal.</p>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Node Structure:</h4>
                <div class="bg-purple-50 dark:bg-slate-700 p-4 rounded-lg">
                  <div class="text-center font-mono text-sm">
                    <div class="inline-block border-2 border-purple-300 rounded p-2">
                      <div class="text-purple-700 dark:text-purple-300 font-bold">← Prev</div>
                      <div class="text-purple-700 dark:text-purple-300 font-bold">Data</div>
                      <div class="text-purple-700 dark:text-purple-300 font-bold">Next →</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Advantages:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>Bidirectional Traversal:</strong> Can move forward and backward</li>
                  <li><strong>Efficient Deletions:</strong> Can delete node if we have reference to it</li>
                  <li><strong>Reverse Operations:</strong> Easy to implement reverse traversal</li>
                  <li><strong>More Memory:</strong> Requires extra space for previous pointers</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Use Cases:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Browser history (back/forward navigation)</li>
                  <li>LRU Cache implementation</li>
                  <li>Undo/Redo functionality</li>
                  <li>Music playlist with previous/next</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-orange-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🔄 Reversing a Linked List</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Problem Statement:</h4>
                <p class="text-gray-700 dark:text-gray-300">Given a linked list, reverse the order of its nodes. The last node becomes the first, and the first becomes the last.</p>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Approaches:</h4>
                <div class="space-y-3">
                  <div>
                    <strong class="text-orange-700 dark:text-orange-300">Iterative Approach:</strong>
                    <pre class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg text-sm overflow-x-auto mt-2"><code class="language-python">def reverse_list(head):
    prev = None
    current = head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev</code></pre>
                  </div>
                  <div>
                    <strong class="text-orange-700 dark:text-orange-300">Recursive Approach:</strong>
                    <pre class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg text-sm overflow-x-auto mt-2"><code class="language-python">def reverse_recursive(head):
    if not head or not head.next:
        return head
    new_head = reverse_recursive(head.next)
    head.next.next = head
    head.next = None
    return new_head</code></pre>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Time & Space Complexity:</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-orange-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-orange-700 dark:text-orange-300">Iterative:</strong>
                    <div class="text-sm">Time: O(n), Space: O(1)</div>
                  </div>
                  <div class="bg-orange-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-orange-700 dark:text-orange-300">Recursive:</strong>
                    <div class="text-sm">Time: O(n), Space: O(n)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-red-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🔍 Cycle Detection</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">The Problem:</h4>
                <p class="text-gray-700 dark:text-gray-300">Given a linked list, determine if it contains a cycle (loop) where a node's next pointer points back to a previous node.</p>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Floyd's Cycle Detection Algorithm:</h4>
                <p class="text-gray-700 dark:text-gray-300">Uses two pointers moving at different speeds. If there's a cycle, the fast pointer will eventually catch up to the slow pointer.</p>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Algorithm:</h4>
                <div class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg font-mono text-sm space-y-2">
                  <div>def has_cycle(head):</div>
                  <div class="ml-4">if not head or not head.next:</div>
                  <div class="ml-8">return False</div>
                  <div class="ml-4">slow = head</div>
                  <div class="ml-4">fast = head.next</div>
                  <div class="ml-4">while slow != fast:</div>
                  <div class="ml-8">if not fast or not fast.next:</div>
                  <div class="ml-12">return False</div>
                  <div class="ml-8">slow = slow.next</div>
                  <div class="ml-8">fast = fast.next.next</div>
                  <div class="ml-4">return True</div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Why it Works:</h4>
                <p class="text-gray-700 dark:text-gray-300">In a cycle, the fast pointer (moving 2 steps) will eventually lap the slow pointer (moving 1 step). If no cycle exists, fast pointer reaches the end.</p>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Time Complexity:</h4>
                <p class="text-gray-700 dark:text-gray-300">O(n) - Both pointers traverse at most n nodes. Space complexity is O(1) since we only use two pointers.</p>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Applications:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Detecting infinite loops in data structures</li>
                  <li>Finding cycles in graphs</li>
                  <li>Memory leak detection</li>
                  <li>Dependency resolution in build systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Stacks & Queues",
      description: "LIFO and FIFO",
      subtopics: [
        "Stack Implementation",
        "Queue Implementation",
        "Monotonic Stack",
        "Deque"
      ],
      theoryContent: `
        <div class="space-y-6">
          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">📚 Stack Data Structure</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. The last element added is the first one to be removed.</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Real-life Analogy:</h4>
                <p class="text-gray-700 dark:text-gray-300">Think of a stack of plates in a cafeteria. You can only add or remove plates from the top. The last plate placed is the first one taken.</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Basic Operations:</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-blue-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-blue-700 dark:text-blue-300">Push:</strong> Add element to top
                    <div class="font-mono text-sm mt-1">stack.append(item)</div>
                  </div>
                  <div class="bg-blue-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-blue-700 dark:text-blue-300">Pop:</strong> Remove from top
                    <div class="font-mono text-sm mt-1">item = stack.pop()</div>
                  </div>
                  <div class="bg-blue-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-blue-700 dark:text-blue-300">Peek/Top:</strong> View top element
                    <div class="font-mono text-sm mt-1">top = stack[-1]</div>
                  </div>
                  <div class="bg-blue-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-blue-700 dark:text-blue-300">Is Empty:</strong> Check if empty
                    <div class="font-mono text-sm mt-1">len(stack) == 0</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Time Complexity:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>Push:</strong> O(1) - Constant time</li>
                  <li><strong>Pop:</strong> O(1) - Constant time</li>
                  <li><strong>Peek:</strong> O(1) - Constant time</li>
                  <li><strong>Search:</strong> O(n) - Linear time</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-green-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">📋 Queue Data Structure</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">A queue is a linear data structure that follows the First In, First Out (FIFO) principle. The first element added is the first one to be removed.</p>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Real-life Analogy:</h4>
                <p class="text-gray-700 dark:text-gray-300">Think of people waiting in line at a ticket counter. The person who arrives first gets served first. New people join at the end of the line.</p>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Basic Operations:</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-green-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-green-700 dark:text-green-300">Enqueue:</strong> Add to rear
                    <div class="font-mono text-sm mt-1">queue.append(item)</div>
                  </div>
                  <div class="bg-green-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-green-700 dark:text-green-300">Dequeue:</strong> Remove from front
                    <div class="font-mono text-sm mt-1">item = queue.pop(0)</div>
                  </div>
                  <div class="bg-green-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-green-700 dark:text-green-300">Front:</strong> View front element
                    <div class="font-mono text-sm mt-1">front = queue[0]</div>
                  </div>
                  <div class="bg-green-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-green-700 dark:text-green-300">Rear:</strong> View rear element
                    <div class="font-mono text-sm mt-1">rear = queue[-1]</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Python Implementation:</h4>
                <div class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg font-mono text-sm space-y-2">
                  <div>from collections import deque</div>
                  <div class="mt-2"># Using deque for efficient operations</div>
                  <div>queue = deque()</div>
                  <div>queue.append(10)    # Enqueue</div>
                  <div>queue.append(20)    # Enqueue</div>
                  <div>front = queue.popleft()  # Dequeue (returns 10)</div>
                </div>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-purple-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">📈 Monotonic Stack</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">What is Monotonic Stack?</h4>
                <p class="text-gray-700 dark:text-gray-300">A monotonic stack is a stack that maintains elements in either increasing or decreasing order. It's used to solve problems where we need to find the next greater/smaller element.</p>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Types:</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-purple-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-purple-700 dark:text-purple-300">Increasing:</strong>
                    <div class="text-sm">Elements in ascending order</div>
                    <div class="text-sm">Stack: [1, 2, 3, 4]</div>
                  </div>
                  <div class="bg-purple-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-purple-700 dark:text-purple-300">Decreasing:</strong>
                    <div class="text-sm">Elements in descending order</div>
                    <div class="text-sm">Stack: [4, 3, 2, 1]</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Next Greater Element Problem:</h4>
                <div class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg font-mono text-sm space-y-2">
                  <div>def next_greater_element(arr):</div>
                  <div class="ml-4">stack = []</div>
                  <div class="ml-4">result = [-1] * len(arr)</div>
                  <div class="ml-4">for i in range(len(arr)):</div>
                  <div class="ml-8">while stack and arr[stack[-1]] < arr[i]:</div>
                  <div class="ml-12">result[stack.pop()] = arr[i]</div>
                  <div class="ml-8">stack.append(i)</div>
                  <div class="ml-4">return result</div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Applications:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Next greater/smaller element problems</li>
                  <li>Largest rectangle in histogram</li>
                  <li>Stock span problem</li>
                  <li>Trapping rain water</li>
                  <li>Remove k digits</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-orange-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🔄 Deque (Double-Ended Queue)</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">A deque (double-ended queue) is a data structure that allows insertion and deletion from both ends. It combines the features of stacks and queues.</p>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Operations:</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-orange-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-orange-700 dark:text-orange-300">Left Side:</strong>
                    <ul class="text-sm mt-1 space-y-1">
                      <li>• appendleft() - Add to front</li>
                      <li>• popleft() - Remove from front</li>
                    </ul>
                  </div>
                  <div class="bg-orange-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-orange-700 dark:text-orange-300">Right Side:</strong>
                    <ul class="text-sm mt-1 space-y-1">
                      <li>• append() - Add to rear</li>
                      <li>• pop() - Remove from rear</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Python Implementation:</h4>
                <div class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg font-mono text-sm space-y-2">
                  <div>from collections import deque</div>
                  <div class="mt-2">dq = deque()</div>
                  <div>dq.append(10)        # Add to right: [10]</div>
                  <div>dq.appendleft(5)     # Add to left: [5, 10]</div>
                  <div>dq.append(15)        # Add to right: [5, 10, 15]</div>
                  <div>left = dq.popleft()  # Remove from left: returns 5</div>
                  <div>right = dq.pop()     # Remove from right: returns 15</div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Time Complexity:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>All operations:</strong> O(1) - Constant time</li>
                  <li><strong>Access by index:</strong> O(n) - Linear time</li>
                  <li><strong>Memory efficient:</strong> Better than list for queue operations</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Use Cases:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Sliding window maximum/minimum</li>
                  <li>Implement stacks and queues</li>
                  <li>Palindrome checking</li>
                  <li>Recent counter (API rate limiting)</li>
                  <li>Task scheduling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Trees & Graphs",
      description: "Tree and graph algorithms",
      subtopics: [
        "Binary Trees",
        "BST",
        "DFS & BFS",
        "Graph Traversal"
      ],
      theoryContent: `
        <div class="space-y-6">
          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🌳 Binary Trees</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">A binary tree is a hierarchical data structure where each node has at most two children, referred to as the left child and right child.</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Node Structure:</h4>
                <div class="bg-blue-50 dark:bg-slate-700 p-4 rounded-lg">
                  <div class="text-center">
                    <div class="inline-block border-2 border-blue-300 rounded-full p-3 mb-2">
                      <div class="text-blue-700 dark:text-blue-300 font-bold">Root</div>
                    </div>
                    <div class="flex justify-center space-x-8">
                      <div class="inline-block border-2 border-blue-300 rounded-full p-2">
                        <div class="text-blue-700 dark:text-blue-300 text-sm">Left</div>
                      </div>
                      <div class="inline-block border-2 border-blue-300 rounded-full p-2">
                        <div class="text-blue-700 dark:text-blue-300 text-sm">Right</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Real-life Analogy:</h4>
                <p class="text-gray-700 dark:text-gray-300">Think of a family tree where each person has at most two children. The root is the ancestor, and each level represents a generation.</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Types of Binary Trees:</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-blue-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-blue-700 dark:text-blue-300">Full Binary Tree:</strong>
                    <div class="text-sm">Every node has 0 or 2 children</div>
                  </div>
                  <div class="bg-blue-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-blue-700 dark:text-blue-300">Complete Binary Tree:</strong>
                    <div class="text-sm">All levels filled except possibly last</div>
                  </div>
                  <div class="bg-blue-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-blue-700 dark:text-blue-300">Perfect Binary Tree:</strong>
                    <div class="text-sm">All internal nodes have 2 children, all leaves at same level</div>
                  </div>
                  <div class="bg-blue-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-blue-700 dark:text-blue-300">Balanced Binary Tree:</strong>
                    <div class="text-sm">Height difference between subtrees ≤ 1</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Tree Properties:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>Height:</strong> Longest path from root to leaf</li>
                  <li><strong>Depth:</strong> Path length from root to node</li>
                  <li><strong>Level:</strong> Nodes at same depth</li>
                  <li><strong>Size:</strong> Total number of nodes</li>
                  <li><strong>Degree:</strong> Number of children per node</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-green-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🔍 Binary Search Tree (BST)</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">A Binary Search Tree is a binary tree where for each node, all elements in its left subtree are less than the node, and all elements in its right subtree are greater than the node.</p>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">BST Property:</h4>
                <div class="bg-green-50 dark:bg-slate-700 p-4 rounded-lg">
                  <div class="text-center">
                    <div class="inline-block border-2 border-green-300 rounded-full p-3 mb-2">
                      <div class="text-green-700 dark:text-green-300 font-bold">50</div>
                    </div>
                    <div class="flex justify-center space-x-8">
                      <div class="text-center">
                        <div class="inline-block border-2 border-green-300 rounded-full p-2 mb-1">
                          <div class="text-green-700 dark:text-green-300 text-sm">30</div>
                        </div>
                        <div class="text-xs text-green-600 dark:text-green-400">Left: &lt; 50</div>
                      </div>
                      <div class="text-center">
                        <div class="inline-block border-2 border-green-300 rounded-full p-2 mb-1">
                          <div class="text-green-700 dark:text-green-300 text-sm">70</div>
                        </div>
                        <div class="text-xs text-green-600 dark:text-green-400">Right: &gt; 50</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Operations:</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-green-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-green-700 dark:text-green-300">Search:</strong>
                    <div class="text-sm">O(log n) average, O(n) worst</div>
                  </div>
                  <div class="bg-green-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-green-700 dark:text-green-300">Insert:</strong>
                    <div class="text-sm">O(log n) average, O(n) worst</div>
                  </div>
                  <div class="bg-green-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-green-700 dark:text-green-300">Delete:</strong>
                    <div class="text-sm">O(log n) average, O(n) worst</div>
                  </div>
                  <div class="bg-green-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-green-700 dark:text-green-300">Traversal:</strong>
                    <div class="text-sm">Inorder, Preorder, Postorder</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Inorder Traversal:</h4>
                <p class="text-gray-700 dark:text-gray-300">Left → Root → Right. In a BST, inorder traversal gives elements in sorted order.</p>
                <div class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg font-mono text-sm mt-2">
                  <div>def inorder_traversal(root):</div>
                  <div class="ml-4">if root:</div>
                  <div class="ml-8">inorder_traversal(root.left)</div>
                  <div class="ml-8">print(root.val)</div>
                  <div class="ml-8">inorder_traversal(root.right)</div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Advantages:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Efficient search, insert, delete operations</li>
                  <li>Elements are always in sorted order</li>
                  <li>Can find min/max elements quickly</li>
                  <li>Supports range queries efficiently</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-purple-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🔍 Depth-First Search (DFS)</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">DFS is a traversal algorithm that explores as far as possible along each branch before backtracking. It uses a stack (either explicit or recursion) to keep track of the path.</p>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">How DFS Works:</h4>
                <ol class="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Start at the root node (or any starting node)</li>
                  <li>Explore as far as possible along one branch</li>
                  <li>When you reach a dead end, backtrack to the last unexplored branch</li>
                  <li>Continue until all nodes are visited</li>
                </ol>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Implementation:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-purple-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-purple-700 dark:text-purple-300">Recursive DFS:</strong>
                    <div class="font-mono text-sm mt-1">
                      <div>def dfs(node, visited):</div>
                      <div class="ml-4">visited.add(node)</div>
                      <div class="ml-4">for neighbor in graph[node]:</div>
                      <div class="ml-8">if neighbor not in visited:</div>
                      <div class="ml-12">dfs(neighbor, visited)</div>
                    </div>
                  </div>
                  <div class="bg-purple-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-purple-700 dark:text-purple-300">Iterative DFS:</strong>
                    <div class="font-mono text-sm mt-1">
                      <div>def dfs_iterative(start):</div>
                      <div class="ml-4">stack = [start]</div>
                      <div class="ml-4">visited = set()</div>
                      <div class="ml-4">while stack:</div>
                      <div class="ml-8">node = stack.pop()</div>
                      <div class="ml-8">if node not in visited:</div>
                      <div class="ml-12">visited.add(node)</div>
                      <div class="ml-12">stack.extend(graph[node])</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Applications:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Path finding in mazes</li>
                  <li>Topological sorting</li>
                  <li>Detecting cycles in graphs</li>
                  <li>Solving puzzles (like 8-puzzle)</li>
                  <li>Tree traversals (preorder, inorder, postorder)</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Time & Space Complexity:</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-purple-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-purple-700 dark:text-purple-300">Time:</strong>
                    <div class="text-sm">O(V + E) for graphs, O(n) for trees</div>
                  </div>
                  <div class="bg-purple-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-purple-700 dark:text-purple-300">Space:</strong>
                    <div class="text-sm">O(V) worst case, O(log V) average for trees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-orange-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🌊 Breadth-First Search (BFS)</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">BFS is a traversal algorithm that explores all nodes at the current level before moving to the next level. It uses a queue to keep track of nodes to visit next.</p>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">How BFS Works:</h4>
                <ol class="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Start with a queue containing the starting node</li>
                  <li>Mark the starting node as visited</li>
                  <li>While queue is not empty:</li>
                  <li class="ml-4">Dequeue a node and process it</li>
                  <li class="ml-4">Enqueue all unvisited neighbors</li>
                  <li class="ml-4">Mark neighbors as visited</li>
                </ol>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Implementation:</h4>
                <div class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg font-mono text-sm space-y-2">
                  <div>from collections import deque</div>
                  <div class="mt-2">def bfs(start):</div>
                  <div class="ml-4">visited = set()</div>
                  <div class="ml-4">queue = deque([start])</div>
                  <div class="ml-4">visited.add(start)</div>
                  <div class="ml-4">while queue:</div>
                  <div class="ml-8">node = queue.popleft()</div>
                  <div class="ml-8">print(node)  # Process node</div>
                  <div class="ml-8">for neighbor in graph[node]:</div>
                  <div class="ml-12">if neighbor not in visited:</div>
                  <div class="ml-16">visited.add(neighbor)</div>
                  <div class="ml-16">queue.append(neighbor)</div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Key Characteristics:</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-orange-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-orange-700 dark:text-orange-300">Level Order:</strong>
                    <div class="text-sm">Visits nodes level by level</div>
                  </div>
                  <div class="bg-orange-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-orange-700 dark:text-orange-300">Shortest Path:</strong>
                    <div class="text-sm">Finds shortest path in unweighted graphs</div>
                  </div>
                  <div class="bg-orange-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-orange-700 dark:text-orange-300">Queue Based:</strong>
                    <div class="text-sm">Uses FIFO queue data structure</div>
                  </div>
                  <div class="bg-orange-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-orange-700 dark:text-orange-300">Memory Intensive:</strong>
                    <div class="text-sm">Stores all nodes at current level</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Applications:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Finding shortest path in unweighted graphs</li>
                  <li>Level order traversal of trees</li>
                  <li>Web crawling</li>
                  <li>Social network analysis</li>
                  <li>GPS navigation systems</li>
                  <li>Finding connected components</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Time & Space Complexity:</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-orange-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-orange-700 dark:text-orange-300">Time:</strong>
                    <div class="text-sm">O(V + E) where V=vertices, E=edges</div>
                  </div>
                  <div class="bg-orange-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-orange-700 dark:text-orange-300">Space:</strong>
                    <div class="text-sm">O(V) worst case for queue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-red-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🌐 Graph Traversal</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">What is Graph Traversal?</h4>
                <p class="text-gray-700 dark:text-gray-300">Graph traversal is the process of visiting all vertices in a graph in a systematic way. The two main methods are DFS (Depth-First Search) and BFS (Breadth-First Search).</p>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Graph Representations:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-red-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-red-700 dark:text-red-300">Adjacency List:</strong>
                    <div class="font-mono text-sm mt-1">
                      <div>graph = {</div>
                      <div class="ml-4">'A': ['B', 'C'],</div>
                      <div class="ml-4">'B': ['A', 'D'],</div>
                      <div class="ml-4">'C': ['A', 'D'],</div>
                      <div class="ml-4">'D': ['B', 'C']</div>
                      <div>}</div>
                    </div>
                  </div>
                  <div class="bg-red-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-red-700 dark:text-red-300">Adjacency Matrix:</strong>
                    <div class="font-mono text-sm mt-1">
                      <div>matrix = [</div>
                      <div class="ml-4">[0, 1, 1, 0],</div>
                      <div class="ml-4">[1, 0, 0, 1],</div>
                      <div class="ml-4">[1, 0, 0, 1],</div>
                      <div class="ml-4">[0, 1, 1, 0]</div>
                      <div>]</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">DFS vs BFS Comparison:</h4>
                <div class="overflow-x-auto">
                  <table class="w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr class="bg-gray-100 dark:bg-slate-700">
                        <th class="border border-gray-300 dark:border-gray-600 p-2">Aspect</th>
                        <th class="border border-gray-300 dark:border-gray-600 p-2">DFS</th>
                        <th class="border border-gray-300 dark:border-gray-600 p-2">BFS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border border-gray-300 dark:border-gray-600 p-2 font-semibold">Data Structure</td>
                        <td class="border border-gray-300 dark:border-gray-600 p-2">Stack</td>
                        <td class="border border-gray-300 dark:border-gray-600 p-2">Queue</td>
                      </tr>
                      <tr class="bg-gray-50 dark:bg-slate-800">
                        <td class="border border-gray-300 dark:border-gray-600 p-2 font-semibold">Traversal Order</td>
                        <td class="border border-gray-300 dark:border-gray-600 p-2">Depth-first</td>
                        <td class="border border-gray-300 dark:border-gray-600 p-2">Level-by-level</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-300 dark:border-gray-600 p-2 font-semibold">Space Complexity</td>
                        <td class="border border-gray-300 dark:border-gray-600 p-2">O(V)</td>
                        <td class="border border-gray-300 dark:border-gray-600 p-2">O(V)</td>
                      </tr>
                      <tr class="bg-gray-50 dark:bg-slate-800">
                        <td class="border border-gray-300 dark:border-gray-600 p-2 font-semibold">Time Complexity</td>
                        <td class="border border-gray-300 dark:border-gray-600 p-2">O(V + E)</td>
                        <td class="border border-gray-300 dark:border-gray-600 p-2">O(V + E)</td>
                      </tr>
                      <tr>
                        <td class="border border-gray-300 dark:border-gray-600 p-2 font-semibold">Shortest Path</td>
                        <td class="border border-gray-300 dark:border-gray-600 p-2">No</td>
                        <td class="border border-gray-300 dark:border-gray-600 p-2">Yes (unweighted)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Common Graph Problems:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-red-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-red-700 dark:text-red-300">Path Finding:</strong>
                    <div class="text-sm">Find path between two nodes</div>
                  </div>
                  <div class="bg-red-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-red-700 dark:text-red-300">Cycle Detection:</strong>
                    <div class="text-sm">Check if graph has cycles</div>
                  </div>
                  <div class="bg-red-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-red-700 dark:text-red-300">Connected Components:</strong>
                    <div class="text-sm">Find separate subgraphs</div>
                  </div>
                  <div class="bg-red-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-red-700 dark:text-red-300">Topological Sort:</strong>
                    <div class="text-sm">Order tasks with dependencies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Dynamic Programming",
      description: "Optimization techniques",
      subtopics: [
        "Memoization",
        "Tabulation",
        "Knapsack",
        "Longest Common Subsequence"
      ],
      theoryContent: `
        <div class="space-y-6">
          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🎯 What is Dynamic Programming?</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">Dynamic Programming is a method for solving complex problems by breaking them down into simpler subproblems. It solves each subproblem only once and stores the results for future use.</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Key Principles:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-blue-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-blue-700 dark:text-blue-300">Optimal Substructure:</strong>
                    <div class="text-sm">Optimal solution contains optimal solutions to subproblems</div>
                  </div>
                  <div class="bg-blue-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-blue-700 dark:text-blue-300">Overlapping Subproblems:</strong>
                    <div class="text-sm">Same subproblems solved multiple times</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Real-life Analogy:</h4>
                <p class="text-gray-700 dark:text-gray-300">Think of calculating Fibonacci numbers. Instead of recalculating fib(3) every time you need it, you store the result and reuse it.</p>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">When to Use DP:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Problems that can be divided into overlapping subproblems</li>
                  <li>Optimization problems (minimize cost, maximize profit)</li>
                  <li>Counting problems (number of ways to do something)</li>
                  <li>Problems with optimal substructure property</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">DP Approaches:</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-blue-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-blue-700 dark:text-blue-300">Top-Down (Memoization):</strong>
                    <div class="text-sm">Recursive + caching</div>
                    <div class="text-sm">Natural recursive thinking</div>
                  </div>
                  <div class="bg-blue-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-blue-700 dark:text-blue-300">Bottom-Up (Tabulation):</strong>
                    <div class="text-sm">Iterative approach</div>
                    <div class="text-sm">Fills table systematically</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-green-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🧠 Memoization</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">Memoization is a top-down DP approach that stores the results of expensive function calls and returns the cached result when the same inputs occur again.</p>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">How it Works:</h4>
                <ol class="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Write the recursive solution first</li>
                  <li>Add a cache (usually a dictionary or array) to store results</li>
                  <li>Check cache before computing</li>
                  <li>Store result in cache after computing</li>
                </ol>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Fibonacci Example:</h4>
                <div class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg font-mono text-sm space-y-2">
                  <div>cache = {}</div>
                  <div class="mt-2">def fib_memo(n):</div>
                  <div class="ml-4">if n in cache:</div>
                  <div class="ml-8">return cache[n]</div>
                  <div class="ml-4">if n <= 1:</div>
                  <div class="ml-8">cache[n] = n</div>
                  <div class="ml-8">return n</div>
                  <div class="ml-4">cache[n] = fib_memo(n-1) + fib_memo(n-2)</div>
                  <div class="ml-4">return cache[n]</div>
                  <div class="mt-2"><strong># Without memoization: O(2^n)</strong></div>
                  <div><strong># With memoization: O(n)</strong></div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Advantages:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Easy to implement on recursive solutions</li>
                  <li>Natural top-down thinking</li>
                  <li>Only computes needed subproblems</li>
                  <li>Can handle large inputs with good cache</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Disadvantages:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Recursion can cause stack overflow</li>
                  <li>Cache storage overhead</li>
                  <li>Not suitable for all problems</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-purple-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">📊 Tabulation</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Definition:</h4>
                <p class="text-gray-700 dark:text-gray-300">Tabulation is a bottom-up DP approach that builds a table of solutions to subproblems, starting from the smallest subproblems and working up to the original problem.</p>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">How it Works:</h4>
                <ol class="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Create a table to store results of subproblems</li>
                  <li>Initialize the table with base cases</li>
                  <li>Fill the table iteratively using previously computed values</li>
                  <li>The final answer is in the last cell of the table</li>
                </ol>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Fibonacci Example:</h4>
                <div class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg font-mono text-sm space-y-2">
                  <div>def fib_tabulation(n):</div>
                  <div class="ml-4">if n <= 1:</div>
                  <div class="ml-8">return n</div>
                  <div class="ml-4">dp = [0] * (n + 1)</div>
                  <div class="ml-4">dp[1] = 1</div>
                  <div class="ml-4">for i in range(2, n + 1):</div>
                  <div class="ml-8">dp[i] = dp[i-1] + dp[i-2]</div>
                  <div class="ml-4">return dp[n]</div>
                  <div class="mt-2"><strong># Time: O(n), Space: O(n)</strong></div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Advantages:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>No recursion stack overflow risk</li>
                  <li>More cache-friendly (better performance)</li>
                  <li>Easier to debug and understand</li>
                  <li>Can be optimized for space in some cases</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">When to Choose Tabulation:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>When you need all subproblem solutions</li>
                  <li>When recursion depth might be too large</li>
                  <li>When you want to avoid function call overhead</li>
                  <li>When debugging recursive solutions is difficult</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-orange-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">🎒 0/1 Knapsack Problem</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Problem Statement:</h4>
                <p class="text-gray-700 dark:text-gray-300">Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.</p>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Key Constraint:</h4>
                <p class="text-gray-700 dark:text-gray-300">Each item can be used only once (0/1 property). You cannot take a fraction of an item or use the same item multiple times.</p>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">DP Solution:</h4>
                <div class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg font-mono text-sm space-y-2">
                  <div>def knapsack(weights, values, capacity):</div>
                  <div class="ml-4">n = len(weights)</div>
                  <div class="ml-4">dp = [[0] * (capacity + 1) for _ in range(n + 1)]</div>
                  <div class="ml-4">for i in range(1, n + 1):</div>
                  <div class="ml-8">for w in range(capacity + 1):</div>
                  <div class="ml-12">if weights[i-1] <= w:</div>
                  <div class="ml-16">dp[i][w] = max(</div>
                  <div class="ml-20">dp[i-1][w],</div>
                  <div class="ml-20">dp[i-1][w - weights[i-1]] + values[i-1]</div>
                  <div class="ml-16">)</div>
                  <div class="ml-12">else:</div>
                  <div class="ml-16">dp[i][w] = dp[i-1][w]</div>
                  <div class="ml-4">return dp[n][capacity]</div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">DP Table Explanation:</h4>
                <p class="text-gray-700 dark:text-gray-300">dp[i][w] represents the maximum value we can get using the first i items with weight limit w.</p>
                <div class="bg-orange-50 dark:bg-slate-700 p-3 rounded-lg mt-2">
                  <div class="text-sm">
                    <strong>For each item i and weight w:</strong>
                    <br />• If item doesn't fit: dp[i][w] = dp[i-1][w]
                    <br />• If item fits: dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight] + value)
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Time & Space Complexity:</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-orange-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-orange-700 dark:text-orange-300">Time:</strong>
                    <div class="text-sm">O(n × W) where n=items, W=capacity</div>
                  </div>
                  <div class="bg-orange-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-orange-700 dark:text-orange-300">Space:</strong>
                    <div class="text-sm">O(n × W) - Can be optimized to O(W)</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-orange-600 dark:text-orange-400">Variations:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>Unbounded Knapsack:</strong> Items can be used multiple times</li>
                  <li><strong>Fractional Knapsack:</strong> Items can be taken in fractions (greedy)</li>
                  <li><strong>Multiple Constraints:</strong> Multiple knapsack constraints</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="border-l-4 border-red-500 pl-4">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">📏 Longest Common Subsequence</h3>
            <div class="space-y-3">
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Problem Statement:</h4>
                <p class="text-gray-700 dark:text-gray-300">Given two strings, find the length of the longest subsequence present in both of them. A subsequence is derived from another sequence by deleting some or no elements without changing the order of the remaining elements.</p>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Key Difference from Substring:</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-red-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-red-700 dark:text-red-300">Subsequence:</strong>
                    <div class="text-sm">Characters don't need to be contiguous</div>
                    <div class="text-sm font-mono">"ABC" in "XABYC" → "ABC"</div>
                  </div>
                  <div class="bg-red-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-red-700 dark:text-red-300">Substring:</strong>
                    <div class="text-sm">Characters must be contiguous</div>
                    <div class="text-sm font-mono">"AB" in "XABYC" → "AB"</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">DP Solution:</h4>
                <div class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg font-mono text-sm space-y-2">
                  <div>def lcs(X, Y):</div>
                  <div class="ml-4">m, n = len(X), len(Y)</div>
                  <div class="ml-4">dp = [[0] * (n + 1) for _ in range(m + 1)]</div>
                  <div class="ml-4">for i in range(1, m + 1):</div>
                  <div class="ml-8">for j in range(1, n + 1):</div>
                  <div class="ml-12">if X[i-1] == Y[j-1]:</div>
                  <div class="ml-16">dp[i][j] = dp[i-1][j-1] + 1</div>
                  <div class="ml-12">else:</div>
                  <div class="ml-16">dp[i][j] = max(dp[i-1][j], dp[i][j-1])</div>
                  <div class="ml-4">return dp[m][n]</div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">DP Table Logic:</h4>
                <div class="bg-red-50 dark:bg-slate-700 p-3 rounded-lg">
                  <div class="text-sm space-y-1">
                    <div><strong>If characters match:</strong> dp[i][j] = dp[i-1][j-1] + 1</div>
                    <div><strong>If characters don't match:</strong> dp[i][j] = max(dp[i-1][j], dp[i][j-1])</div>
                    <div><strong>Take maximum from:</strong> left cell or top cell</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Example:</h4>
                <div class="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg">
                  <div class="text-sm">
                    <strong>Strings:</strong> "AGGTAB" and "GXTXAYB"
                    <br /><strong>LCS:</strong> "GTAB" (length 4)
                    <br /><strong>Explanation:</strong> Characters G,T,A,B appear in order in both strings
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Applications:</h4>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>DNA sequence analysis</li>
                  <li>Diff utility (file comparison)</li>
                  <li>Spell checking</li>
                  <li>Version control systems</li>
                  <li>Plagiarism detection</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-red-600 dark:text-red-400">Time & Space Complexity:</h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-red-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-red-700 dark:text-red-300">Time:</strong>
                    <div class="text-sm">O(m × n) where m,n are string lengths</div>
                  </div>
                  <div class="bg-red-50 dark:bg-slate-700 p-3 rounded">
                    <strong class="text-red-700 dark:text-red-300">Space:</strong>
                    <div class="text-sm">O(m × n) - Can be optimized to O(min(m,n))</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/courses')}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold mb-8 transition-colors"
        >
          ← Back to Courses
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 md:p-12"
        >
          <div className="flex items-start gap-6 md:gap-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-6xl"
            >
              🧠
            </motion.div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Data Structures & Algorithms
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                DSA with Python
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Master Data Structures and Algorithms using Python. Solve interview problems and competitive programming challenges with hands-on coding practice.
              </p>

              {/* Course Info */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Target Audience</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Programmers
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    2-3 Months
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Difficulty</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Beginner to Advanced
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Start Learning Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12"
        >
          <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95 text-lg">
            🎉 Start Learning Now
          </button>
        </motion.div>

        {/* Topics & Modules Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            📚 Topics & Modules
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dsaTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <AccordionItem
                  title={topic.title}
                  description={topic.description}
                  subtopics={topic.subtopics}
                  theoryContent={topic.theoryContent}
                  isOpen={activeAccordion === index}
                  onToggle={() => handleAccordionToggle(index)}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What's Included Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-green-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📖 What's Included?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Interactive Video Lectures Card */}
            <div 
              onClick={() => window.open('https://youtube.com/playlist?list=PLxgZQoSe9cg2DC5wMlW7d0zvSkRXlTobC&si=bKMtQGd1qbhWZMCY', '_blank')}
              className="flex items-start gap-4 p-4 rounded-lg cursor-pointer group hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-transparent hover:border-blue-400 dark:hover:border-blue-500"
              title="Open YouTube Playlist"
            >
              <span className="text-3xl group-hover:scale-125 transition-transform duration-300">🎥</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Video Lectures</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive video content</p>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  🔗 Open YouTube
                </p>
              </div>
            </div>

            {/* Code Examples Card */}
            <div className="flex items-start gap-4 p-4 rounded-lg border-2 border-gray-200 dark:border-slate-600">
              <span className="text-3xl">💻</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Code Examples</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ready-to-run code samples</p>
              </div>
            </div>

            {/* Interactive Practice Problems Card */}
            <div 
              onClick={() => window.open('https://leetcode.com/problemset/', '_blank')}
              className="flex items-start gap-4 p-4 rounded-lg cursor-pointer group hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-transparent hover:border-green-400 dark:hover:border-green-500"
              title="Open LeetCode"
            >
              <span className="text-3xl group-hover:scale-125 transition-transform duration-300">📝</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Practice Problems</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">LeetCode-style problems</p>
                <p className="text-xs text-green-600 dark:text-green-400 font-semibold mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  🔗 Open LeetCode
                </p>
              </div>
            </div>

            {/* Assignments Card */}
            <div className="flex items-start gap-4 p-4 rounded-lg border-2 border-gray-200 dark:border-slate-600">
              <span className="text-3xl">✏️</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Assignments</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Weekly coding assignments</p>
              </div>
            </div>

            {/* Mock Interviews Card */}
            <div className="flex items-start gap-4 p-4 rounded-lg border-2 border-gray-200 dark:border-slate-600">
              <span className="text-3xl">🎯</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Mock Interviews</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Interview preparation</p>
              </div>
            </div>

            {/* Certification Card */}
            <div className="flex items-start gap-4 p-4 rounded-lg border-2 border-gray-200 dark:border-slate-600">
              <span className="text-3xl">🏆</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Certification</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Industry-recognized cert</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Master DSA?
          </h3>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95 text-lg">
            Enroll Now & Start Coding! 🚀
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DsaPython;