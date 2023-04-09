---
title: "Exploratory Analysis with R"
id: eda-r
label: "EDA in R"
author: Qiushi Yan
date: "2021-06-01"
description: |
  Amet deserunt Lorem amet aliqua commodo. Minim qui id quis proident aliquip est ex magna laboris.
tags: ["EDA"]
relationships:
  - id: eda-python
    label: "compliments"
---

## Overview

Let’s do some data wrangling.

``` r
library(dplyr)
```


    Attaching package: 'dplyr'

    The following objects are masked from 'package:stats':

        filter, lag

    The following objects are masked from 'package:base':

        intersect, setdiff, setequal, union

``` r
starwars %>%
  filter(species == "Droid")
```

    # A tibble: 6 × 14
      name   height  mass hair_color skin_color eye_c…¹ birth…² sex   gender homew…³
      <chr>   <int> <dbl> <chr>      <chr>      <chr>     <dbl> <chr> <chr>  <chr>  
    1 C-3PO     167    75 <NA>       gold       yellow      112 none  mascu… Tatooi…
    2 R2-D2      96    32 <NA>       white, bl… red          33 none  mascu… Naboo  
    3 R5-D4      97    32 <NA>       white, red red          NA none  mascu… Tatooi…
    4 IG-88     200   140 none       metal      red          15 none  mascu… <NA>   
    5 R4-P17     96    NA none       silver, r… red, b…      NA none  femin… <NA>   
    6 BB8        NA    NA none       none       black        NA none  mascu… <NA>   
    # … with 4 more variables: species <chr>, films <list>, vehicles <list>,
    #   starships <list>, and abbreviated variable names ¹​eye_color, ²​birth_year,
    #   ³​homeworld
