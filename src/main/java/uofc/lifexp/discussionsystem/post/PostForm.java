package uofc.lifexp.discussionsystem.post;

import lombok.Data;

@Data
public class PostForm {
    private String boardName;
    private String username;
    private String title;
    private String body;
}
