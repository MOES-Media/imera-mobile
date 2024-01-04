---
sidebar_position: 2
---
# Client

```mermaid
erDiagram
    CLIENT ||..|{ ADDRESS : uses
    CLIENT{
        uuid id PK
        string name
        string vat_number
    }
    ADDRESS{
        uuid id PK 
        uuid client_id FK
        string street
        string postal_code
        string city
        string state
        string country
    }
```
