package uofc.lifexp.discussionsystem.post;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("posts")
public class Post {
    @Id
    private String id;
    private String boardName;
    private String username;
    private String title;
    private String body;

    public Post(PostForm postForm){
        this.id = new ObjectId().toString();
        this.boardName = postForm.getBoardName();
        this.username = postForm.getUsername();
        this.title = postForm.getTitle();
        this.body = postForm.getBody();
    }

    public Post() {
    }
}
