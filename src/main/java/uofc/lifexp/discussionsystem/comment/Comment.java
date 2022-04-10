package uofc.lifexp.discussionsystem.comment;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("comments")
public class Comment {
    @Id
    private String id;
    private String postId;
    private String body;

}
