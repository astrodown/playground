---
title: "Analysis of test"
id: something-else2
label: "Some example Python code"
author: Qiushi Yan
date: "2021-06-31"
description: |
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore ad aut, deleniti cupiditate ullam asperiores at magni praesentium eaque.
tags: ["Inference"]
---

# plot

``` python
# Import seaborn
import seaborn as sns

# Apply the default theme
sns.set_theme()

# Load an example dataset
tips = sns.load_dataset("tips")

# Create a visualization
sns.relplot(
    data=tips,
    x="total_bill",
    y="tip",
    col="time",
    hue="smoker",
    style="smoker",
    size="size",
)
```

    <seaborn.axisgrid.FacetGrid at 0x29b33e190>

![](/analysis/test_files/figure-commonmark/cell-2-output-2.png)
