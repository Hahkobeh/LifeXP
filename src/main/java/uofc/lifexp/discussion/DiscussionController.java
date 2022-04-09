package uofc.lifexp.discussion;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import uofc.lifexp.discussion.board.BoardService;
import uofc.lifexp.discussion.comment.CommentService;
import uofc.lifexp.discussion.post.PostService;

@Controller
@RequestMapping(path = "api/discussion")
@CrossOrigin(origins = {"http://localhost:3000"})
public class DiscussionController {
    private BoardService boardService;
    private CommentService commentService;
    private PostService postService;
    @Autowired
    public DiscussionController(BoardService boardService, CommentService commentService, PostService postService){
        this.boardService = boardService;
        this.commentService = commentService;
        this.postService = postService;
    }
}
