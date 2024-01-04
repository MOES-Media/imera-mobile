---
sidebar_position: 1
---
# Imera Mobile ERDiagram

```mermaid
erDiagram
    CLIENT ||--o{ PROJECT : owns
    CLIENT ||..|{ ADDRESS : uses
    PROJECT ||--|{ TASK : contains
    TASK ||--o{ TIME_ENTRIES : contains
```
