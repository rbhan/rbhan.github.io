---
layout: post
title: Georg Cantor, party animal
date: 2019-05-18 00:00:00
excerpt_separator: <!--more-->
tags: 
katex: true
---

"Here's a great party trick," my realtor hollered over the NSX's V6 engine. "You got a cocktail napkin and pen?"

It's called the diagonal argument and it goes something like this:

<!--more-->

First, ask your conversation partner to imagine the (infinitely large) set \\(S\\) containing all possible (infinitely long) binary strings. Prompt them to list several such strings so that they roughly form a square matrix. 

\\[ \begin{bmatrix} \begin{align} & e1 = 0, 0, 0, 0, 0, 0, 0, 0, ... \newline & e2 = 1, 1, 1, 1, 1, 1, 1, 1, ... \newline & e3 = 0, 1, 0, 1, 0, 1, 0, 1, ... \newline & e4 = 0, 1, 0, 0, 1, 0, 0, 1, ... \newline & e5 = 0, 0, 1, 0, 0, 1, 0, 0, ... \newline & e6 = 1, 0, 1, 1, 1, 1, 0, 1, ... \newline & e7 = 0, 1, 0, 0, 0, 0, 1, 0, ... \newline & e8 = 0, 1, 1, 0, 1, 1, 0, 1, ... \newline & ... \end{align} \end{bmatrix} \\]

Now, instruct them to flip the $n^{th}$ element of $en$. Suggest that this is easily visusalized by flipping each element down the "diagonal" of the matrix. $$ \begin{bmatrix} \begin{align} & e1 = \textbf{1}, 0, 0, 0, 0, 0, 0, 0, ... \newline & e2 = 1, \textbf{0}, 1, 1, 1, 1, 1, 1, ... \newline & e3 = 0, 1, \textbf{1}, 1, 0, 1, 0, 1, ... \newline & e4 = 0, 1, 0, \textbf{1}, 1, 0, 0, 1, ... \newline & e5 = 0, 0, 1, 0, \textbf{1}, 1, 0, 0, ... \newline & e6 = 1, 0, 1, 1, 1, \textbf{0}, 0, 1, ... \newline & e7 = 0, 1, 0, 0, 0, 0, \textbf{0}, 0, ... \newline & e_8 = 0, 1, 1, 0, 1, 1, 0, \textbf{0}, ... \newline & ... \end{align} \end{bmatrix} $$

Have them explicitly write down the binary string formed by flipping all the diagonal values: $\textbf{e = 1, 0, 1, 1, 1, 0, 0, 0, ...}$ . Establish agreement that $\textbf{e}$ is, by definition, a member of set $S$.

Finally, reveal that $\textbf{e}$ is a new member of set $S$. Give them a moment to consider this. Ultimately they should agree that $\textbf{e}$ cannot be identical to any other $e_n$ in set $S$ because it will always differ in the $n^{th}$ element which was flipped from the original value.

Congratulate them on having demonstrably proven that not all infinites are created equal -- some infinite sets (their set $S$!) are larger than other infinite sets.

But wait, you ask, what kind of party is this, and where are we again?
