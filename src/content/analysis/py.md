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

<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js" integrity="sha512-c3Nl8+7g4LMSTdrm621y7kf9v3SDPnhxLNhcjFJbKECVnmZHTdo+IRO05sNLTH/D3vA6u1X32ehoLC7WFVdheg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
<script type="application/javascript">define('jquery', [],function() {return window.jQuery;})</script>


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

    <seaborn.axisgrid.FacetGrid at 0x16b491160>

<img src="/analysis/py_files/figure-markdown_strict/cell-3-output-2.png" width="1025" height="464" />

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
