---
title: "R"
author: "RStudio"
date: now
tags: ["EDA", "Model"]
description: |
  This is a sample R Markdown document. You can use R Markdown to author documents like this one.
  You can also embed R code in your document as follows
relationships:
  - iris
  - id: mtcars
    label: "model on"
  - id: something-else
    label: "comes after"
format:
  hugo:
    toc: false
---

<script src="/libs/htmlwidgets-1.6.1/htmlwidgets.js"></script>
<script src="/libs/jquery-1.11.1/jquery.min.js"></script>
<link href="/libs/dygraphs-1.1.1/dygraph.css" rel="stylesheet" />
<script src="/libs/dygraphs-1.1.1/dygraph-combined.js"></script>
<script src="/libs/dygraphs-1.1.1/shapes.js"></script>
<script src="/libs/moment-2.8.4/moment.js"></script>
<script src="/libs/moment-timezone-0.2.5/moment-timezone-with-data.js"></script>
<script src="/libs/moment-fquarter-1.0.0/moment-fquarter.min.js"></script>
<script src="/libs/dygraphs-binding-1.1.1.6/dygraphs.js"></script>


hello world

``` r
plot(iris)
```

<img src="/analysis/r/r.markdown_strict_files/figure-markdown_strict/unnamed-chunk-1-1.png" width="768" />

``` r
library(dygraphs)
dygraph(nhtemp, main = "New Haven Temperatures") %>%
  dyRangeSelector(dateWindow = c("1920-01-01", "1960-01-01"))
```

<div class="dygraphs html-widget html-fill-item-overflow-hidden html-fill-item" id="htmlwidget-e5cd06b6d9a948cbfeb5" style="width:768px;height:480px;"></div>
<script type="application/json" data-for="htmlwidget-e5cd06b6d9a948cbfeb5">{"x":{"attrs":{"title":"New Haven Temperatures","labels":["year","V1"],"legend":"auto","retainDateWindow":false,"axes":{"x":{"pixelsPerLabel":60}},"showRangeSelector":true,"dateWindow":["1920-01-01T00:00:00.000Z","1960-01-01T00:00:00.000Z"],"rangeSelectorHeight":40,"rangeSelectorPlotFillColor":" #A7B1C4","rangeSelectorPlotStrokeColor":"#808FAB","interactionModel":"Dygraph.Interaction.defaultModel"},"scale":"yearly","annotations":[],"shadings":[],"events":[],"format":"date","data":[["1912-01-01T00:00:00.000Z","1913-01-01T00:00:00.000Z","1914-01-01T00:00:00.000Z","1915-01-01T00:00:00.000Z","1916-01-01T00:00:00.000Z","1917-01-01T00:00:00.000Z","1918-01-01T00:00:00.000Z","1919-01-01T00:00:00.000Z","1920-01-01T00:00:00.000Z","1921-01-01T00:00:00.000Z","1922-01-01T00:00:00.000Z","1923-01-01T00:00:00.000Z","1924-01-01T00:00:00.000Z","1925-01-01T00:00:00.000Z","1926-01-01T00:00:00.000Z","1927-01-01T00:00:00.000Z","1928-01-01T00:00:00.000Z","1929-01-01T00:00:00.000Z","1930-01-01T00:00:00.000Z","1931-01-01T00:00:00.000Z","1932-01-01T00:00:00.000Z","1933-01-01T00:00:00.000Z","1934-01-01T00:00:00.000Z","1935-01-01T00:00:00.000Z","1936-01-01T00:00:00.000Z","1937-01-01T00:00:00.000Z","1938-01-01T00:00:00.000Z","1939-01-01T00:00:00.000Z","1940-01-01T00:00:00.000Z","1941-01-01T00:00:00.000Z","1942-01-01T00:00:00.000Z","1943-01-01T00:00:00.000Z","1944-01-01T00:00:00.000Z","1945-01-01T00:00:00.000Z","1946-01-01T00:00:00.000Z","1947-01-01T00:00:00.000Z","1948-01-01T00:00:00.000Z","1949-01-01T00:00:00.000Z","1950-01-01T00:00:00.000Z","1951-01-01T00:00:00.000Z","1952-01-01T00:00:00.000Z","1953-01-01T00:00:00.000Z","1954-01-01T00:00:00.000Z","1955-01-01T00:00:00.000Z","1956-01-01T00:00:00.000Z","1957-01-01T00:00:00.000Z","1958-01-01T00:00:00.000Z","1959-01-01T00:00:00.000Z","1960-01-01T00:00:00.000Z","1961-01-01T00:00:00.000Z","1962-01-01T00:00:00.000Z","1963-01-01T00:00:00.000Z","1964-01-01T00:00:00.000Z","1965-01-01T00:00:00.000Z","1966-01-01T00:00:00.000Z","1967-01-01T00:00:00.000Z","1968-01-01T00:00:00.000Z","1969-01-01T00:00:00.000Z","1970-01-01T00:00:00.000Z","1971-01-01T00:00:00.000Z"],[49.9,52.3,49.4,51.1,49.4,47.9,49.8,50.9,49.3,51.9,50.8,49.6,49.3,50.6,48.4,50.7,50.9,50.6,51.5,52.8,51.8,51.1,49.8,50.2,50.4,51.6,51.8,50.9,48.8,51.7,51,50.6,51.7,51.5,52.1,51.3,51,54,51.4,52.7,53.1,54.6,52,52,50.9,52.6,50.2,52.6,51.6,51.9,50.5,50.9,51.7,51.4,51.7,50.8,51.9,51.8,51.9,53]]},"evals":["attrs.interactionModel"],"jsHooks":[]}</script>
