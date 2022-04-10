package uofc.lifexp.discussionsystem.comment;

import lombok.Data;

@Data
public class CommentForm {
    private String postId;
    private String username;
    private String reply;
}
