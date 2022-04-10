package uofc.lifexp.discussionsystem.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    @Autowired
    public CommentService(CommentRepository commentRepository){
        this.commentRepository = commentRepository;
    }


    public void createComment(CommentForm commentForm){
        commentRepository.save(new Comment(commentForm));
    }

    public List<Comment> getComments(String postId){
        return commentRepository.findAllByPostId(postId);
    }

    public boolean deleteComment(String id){
        commentRepository.deleteById(id);
        return true;
    }

    public boolean deleteCommmentsByPostId(String postId){
        commentRepository.deleteAllByPostId(postId);
        return true;
    }
}
