---
title: "Analysis of something else"
id: something-else
label: "Some example R code"
author: Qiushi Yan
date: "2021-05-31"
description: |
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore ad aut, deleniti cupiditate ullam asperiores at magni praesentium eaque.
tags: ["Bayesian"]
exports:
    - name: df
      type: pandas
      value: "https://media.githubusercontent.com/media/qiushiyan/blog-data/main/codes.csv"

    - name: num
      type: raw
      value: 123
relationships:
  - id: iris
    label: "produces"
  - id: marketing.md
    label: "comes before"
---

# Introduction

``` python
print("hello world")
```

    hello world

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
    x="total_bill", y="tip", col="time",
    hue="smoker", style="smoker", size="size",
)
```

    <seaborn.axisgrid.FacetGrid at 0x14cc54250>

![](/analysis/python/py_files/figure-commonmark/cell-3-output-2.png)

# Conclusion

``` python
import pandas as pd
df = pd.DataFrame({"a": [1,2,3], "b": [4,5,6]})
df.head()
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>

|     | a   | b   |
|-----|-----|-----|
| 0   | 1   | 4   |
| 1   | 2   | 5   |
| 2   | 3   | 6   |

</div>
