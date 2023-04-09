---
title: "Regression Analysis"
author: "Peter"
date: "2023-01-01"
tags: ["Machine Learning"]
id: r
description: |
  This is a sample R Markdown document. You can use R Markdown to author documents like this one.
  You can also embed R code in your document as follows
relationships:
  - iris
  - id: mtcars-data
    label: "model on"
  - id: eda-r
    label: "comes after"
format:
  hugo:
    toc: false
---

## Data

``` r
plot(iris)
```

<img src="/analysis/machine-learning/regression.markdown_strict_files/figure-markdown_strict/unnamed-chunk-1-1.png" width="768" />

## Model

``` r
lm(Sepal.Length ~ Sepal.Width + Species, data = iris)
```


    Call:
    lm(formula = Sepal.Length ~ Sepal.Width + Species, data = iris)

    Coefficients:
          (Intercept)        Sepal.Width  Speciesversicolor   Speciesvirginica  
                2.251              0.804              1.459              1.947  
