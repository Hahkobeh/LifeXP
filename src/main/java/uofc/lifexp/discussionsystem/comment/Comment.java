package uofc.lifexp.discussionsystem.comment;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("comments")
public class Comment {
    @Id
    private String id;
    private String username;
    private String postId;
    private String reply;

    public Comment(CommentForm commentForm){
        this.id = new ObjectId().toString();
        this.username = commentForm.getUsername();
        this.postId = commentForm.getPostId();
        this.reply = commentForm.getReply();
    }


    public Comment() {
    }
}
