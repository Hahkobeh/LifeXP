package uofc.lifexp.discussionsystem.post;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("posts")
public class Post {
    @Id
    private String id;
    private String boardId;
    private String username;
    private String title;
    private String body;
}
