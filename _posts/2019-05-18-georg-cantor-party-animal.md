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

First, ask your conversation partner to imagine the (infinitely large) set <img src="https://render.githubusercontent.com/render/math?math=S"> containing all possible (infinitely long) binary strings. Prompt them to list several such strings so that they roughly form a square matrix. 

<img src="https://render.githubusercontent.com/render/math?math=%5Cbegin%7Bbmatrix%7D%0A%20%20e_1%20%26%20%3D%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5Ccdots%20%5C%5C%0A%20%20e_2%20%26%20%3D%20%26%201%20%26%201%20%26%201%20%26%201%20%26%201%20%26%201%20%26%201%20%26%201%20%26%20%5Ccdots%20%5C%5C%0A%20%20e_3%20%26%20%3D%20%26%20%5C0%20%26%201%20%26%20%5C0%20%26%201%20%26%20%5C0%20%26%201%20%26%20%5C0%20%26%201%20%26%20%5Ccdots%20%5C%5C%0A%20%20e_4%20%26%20%3D%20%26%20%5C0%20%26%201%20%26%20%5C0%20%26%20%5C0%20%26%201%20%26%20%5C0%20%26%20%5C0%20%26%201%20%26%20%5Ccdots%20%5C%5C%0A%20%20e_5%20%26%20%3D%20%26%20%5C0%20%26%20%5C0%20%26%201%20%26%20%5C0%20%26%20%5C0%20%26%201%20%26%20%5C0%20%26%20%5C0%20%26%20%5Ccdots%20%5C%5C%0A%20%20e_6%20%26%20%3D%20%26%201%20%26%20%5C0%20%26%201%20%26%201%20%26%201%20%26%201%20%26%20%5C0%20%26%201%20%26%20%5Ccdots%20%5C%5C%0A%20%20e_7%20%26%20%3D%20%26%20%5C0%20%26%201%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%201%20%26%20%5C0%20%26%20%5Ccdots%20%5C%5C%0A%20%20e_8%20%26%20%3D%20%26%20%5C0%20%26%201%20%26%201%20%26%20%5C0%20%26%201%20%26%201%20%26%20%5C0%20%26%201%20%26%20%5Ccdots%20%5C%5C%0A%20%20%5C%5C%0A%20%20%5Ccdots%20%5C%5C%0A%5Cend%7Bbmatrix%7D">

Now, instruct them to flip the <img src="https://render.githubusercontent.com/render/math?math=n%5E%7Bth%7D"> element of <img src="https://render.githubusercontent.com/render/math?math=e_n">. Suggest that this is easily visusalized by flipping each element down the "diagonal" of the matrix.

<img src="https://render.githubusercontent.com/render/math?math=%5Cbegin%7Bbmatrix%7D%0A%20%20e_1%20%26%20%3D%20%26%20%5Cbf%7B1%7D%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5Ccdots%20%5C%5C%0A%20%20e_2%20%26%20%3D%20%26%20%5C0%20%26%20%5Cbf%7B1%7D%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5Ccdots%20%5C%5C%0A%20%20e_3%20%26%20%3D%20%26%20%5C0%20%26%20%5C0%20%26%20%5Cbf%7B1%7D%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5Ccdots%20%5C%5C%0A%20%20e_4%20%26%20%3D%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5Cbf%7B1%7D%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5Ccdots%20%5C%5C%0A%20%20e_5%20%26%20%3D%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5Cbf%7B1%7D%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5Ccdots%20%5C%5C%0A%20%20e_6%20%26%20%3D%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5Cbf%7B1%7D%20%26%20%5C0%20%26%20%5C0%20%26%20%5Ccdots%20%5C%5C%0A%20%20e_7%20%26%20%3D%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5Cbf%7B1%7D%20%26%20%5C0%20%26%20%5Ccdots%20%5C%5C%0A%20%20e_8%20%26%20%3D%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5C0%20%26%20%5Cbf%7B1%7D%20%26%20%5Ccdots%20%5C%5C%0A%20%20%5C%5C%0A%20%20%5Ccdots%20%5C%5C%0A%5Cend%7Bbmatrix%7D">

Have them explicitly write down the binary string formed by flipping all the diagonal values: <img src="https://render.githubusercontent.com/render/math?math=%5Cbf%7Be%20%3D%201%2C%200%2C%201%2C%201%2C%201%2C%200%2C%200%2C%200%2C%20...%7D">

stablish agreement that <img src="https://render.githubusercontent.com/render/math?math=%5Cbf%7Be%7D"> is, by definition, a member of set <img src="https://render.githubusercontent.com/render/math?math=S">.

Finally, reveal that <img src="https://render.githubusercontent.com/render/math?math=%5Cbf%7Be%7D"> is a new member of set <img src="https://render.githubusercontent.com/render/math?math=S">. Give them a moment to consider this. 

Ultimately they should agree that <img src="https://render.githubusercontent.com/render/math?math=%5Cbf%7Be%7D"> cannot be identical to any other <img src="https://render.githubusercontent.com/render/math?math=e_n"> in set <img src="https://render.githubusercontent.com/render/math?math=S"> because it will always differ in the <img src="https://render.githubusercontent.com/render/math?math=n%5E%7Bth%7D"> element which was flipped from the original value.

Congratulate them on having demonstrably proven that not all infinites are created equal -- some infinite sets (their set <img src="https://render.githubusercontent.com/render/math?math=S">!) are larger than other infinite sets.

But wait, you ask, what kind of party is this, and where are we again?
