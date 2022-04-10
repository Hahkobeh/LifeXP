package uofc.lifexp.discussionsystem.post;

import lombok.Data;

@Data
public class PostForm {
    private String boardId;
    private String username;
    private String title;
    private String body;
}
