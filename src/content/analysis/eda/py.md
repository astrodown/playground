---
title: "Exploratory Analysis with Python"
id: eda-python
label: "EDA in Python"
author: Qiushi Yan
date: "2021-05-31"
description: |
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore ad aut, deleniti cupiditate ullam asperiores at magni praesentium eaque.
tags: ["EDA"]
relationships:
  - id: iris-data
    label: "produces"
  - id: marketing.md
    label: "comes before"
---

## Data

This is our data

``` python
import numpy as np
import matplotlib.pyplot as plt

# Fixing random state for reproducibility
np.random.seed(19680801)

dt = 0.01
t = np.arange(0, 30, dt)
nse1 = np.random.randn(len(t))  # white noise 1
nse2 = np.random.randn(len(t))  # white noise 2

# Two signals with a coherent part at 10 Hz and a random part
s1 = np.sin(2 * np.pi * 10 * t) + nse1
s2 = np.sin(2 * np.pi * 10 * t) + nse2

s1, s2
```

    (array([ 1.04930431,  1.45388443,  1.50219112, ..., -1.98986183,
            -1.51153048, -1.5387947 ]),
     array([ 1.61546082,  0.6624488 ,  0.02742616, ..., -0.28010323,
            -0.58555687, -0.71388576]))

## Plot

Let’s plot it.

``` python
fig, axs = plt.subplots(2, 1)
axs[0].plot(t, s1, t, s2)
axs[0].set_xlim(0, 2)
axs[0].set_xlabel("Time")
axs[0].set_ylabel("s1 and s2")
axs[0].grid(True)

cxy, f = axs[1].cohere(s1, s2, 256, 1.0 / dt)
axs[1].set_ylabel("Coherence")

fig.tight_layout()
plt.show()
```

![](/analysis/eda/py_files/figure-commonmark/cell-3-output-1.png)
