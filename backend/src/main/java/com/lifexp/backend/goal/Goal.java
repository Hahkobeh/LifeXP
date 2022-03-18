package com.lifexp.backend.goal;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("goals")
public class Goal {
    @Id
    private String id;
}
