---
title: Palmer Penguins
author: "Tom"
date: "2023-04-19"
---

``` python
import pandas as pd
import altair as alt
import seaborn as sns
from matplotlib import pyplot as plt
```

Data from [Palmer Penguins R package](https://allisonhorst.github.io/palmerpenguins/)

``` python
penguins = pd.read_csv("https://pos.it/palmer-penguins-github-csv")
```

``` python
penguins.groupby("species").size().reset_index(name = "count")
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

|     | species   | count |
|-----|-----------|-------|
| 0   | Adelie    | 152   |
| 1   | Chinstrap | 68    |
| 2   | Gentoo    | 124   |

</div>

``` python
colors = ["#FF8C00", "#A020F0", "#008B8B"]
sns.set_palette(colors, n_colors = 3)
```

``` python
penguins["bill_ratio"] = (
   penguins["bill_length_mm"] / penguins["bill_depth_mm"] 
)
sns.displot(penguins, 
            x = "bill_ratio", 
            hue = "species", 
            kind = "kde", fill = True, aspect = 2, height = 3)
plt.show()
```

<img src="/analysis/penguins_files/figure-commonmark/cell-6-output-1.png" data-fig-alt="A density plot of bill ratio by species." />

``` python
sns.displot(penguins, 
            x = "bill_depth_mm", 
            hue = "species", 
            kind = "kde", fill = True, 
            aspect = 2, height = 3)
plt.show()
sns.displot(penguins, 
            x = "bill_length_mm", 
            hue = "species", 
            kind = "kde", fill = True, 
            aspect = 2, height = 3)
plt.show()
```

<figure>
<img src="/analysis/penguins_files/figure-commonmark/fig-bill-marginal-output-1.png" id="fig-bill-marginal-1" data-fig-alt="Density plot of bill depth by species." alt="Figure 1: Gentoo penguins tend to have thinner bills," />
<figcaption aria-hidden="true">Figure 1: Gentoo penguins tend to have thinner bills,</figcaption>
</figure>

<figure>
<img src="/analysis/penguins_files/figure-commonmark/fig-bill-marginal-output-2.png" id="fig-bill-marginal-2" data-fig-alt="Density plot of bill length by species." alt="Figure 2: and Adelie penguins tend to have shorter bills." />
<figcaption aria-hidden="true">Figure 2: and Adelie penguins tend to have shorter bills.</figcaption>
</figure>

Marginal distributions of bill dimensions
