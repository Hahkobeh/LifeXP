package uofc.lifexp.discussionsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import uofc.lifexp.discussionsystem.board.Board;
import uofc.lifexp.discussionsystem.board.BoardService;
import uofc.lifexp.discussionsystem.comment.Comment;
import uofc.lifexp.discussionsystem.comment.CommentForm;
import uofc.lifexp.discussionsystem.comment.CommentService;
import uofc.lifexp.discussionsystem.post.Post;
import uofc.lifexp.discussionsystem.post.PostForm;
import uofc.lifexp.discussionsystem.post.PostService;

import java.util.List;

@Controller
@RequestMapping(path = "api/discussion")
@CrossOrigin(origins = {"http://localhost:3000"})
public class DiscussionController {
    private final BoardService boardService;
    private final CommentService commentService;
    private final PostService postService;
    @Autowired
    public DiscussionController(BoardService boardService, CommentService commentService, PostService postService){
        this.boardService = boardService;
        this.commentService = commentService;
        this.postService = postService;
    }

    //CREATE

    @PostMapping("/create-board/{name}")
    @ResponseBody
    public Board createBoard(@PathVariable String name){
        return boardService.createBoard(name);
    }

    @PostMapping("/create-post")
    @ResponseBody
    public boolean createPost(@RequestBody PostForm postForm){
        postService.createPost(postForm);
        return true;
    }

    @PostMapping("/create-comment")
    @ResponseBody
    public boolean createComment(@RequestBody CommentForm commentForm){
        commentService.createComment(commentForm);
        return true;
    }

    //GET

    @GetMapping("/get-boards")
    @ResponseBody
    public List<Board> getBoards(){
        return boardService.getBoards();
    }

    @GetMapping("/get-posts/{boardId}")
    @ResponseBody
    public List<Post> getPosts(@PathVariable String boardId){
        return postService.getPosts(boardId);
    }

    @GetMapping("/get-comments/{postId}")
    @ResponseBody
    public List<Comment> getComments(@PathVariable String postId){
        return commentService.getComments(postId);
    }


}
