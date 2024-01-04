---
sidebar_position: 4
---
# Time Entries

```mermaid
erDiagram
    TIME_ENTRY{
        uuid id PK 
        uuid task_id FK
        uuid project_id FK
        uuid time_entry_type_id FK
        timestamp start_time
        timestamp end_time
        
    }
    TIME_ENTRY_TYPE {
        uuid id PK
        string name
    }
    TIME_ENTRY }|--|| TIME_ENTRY_TYPE : has
```
