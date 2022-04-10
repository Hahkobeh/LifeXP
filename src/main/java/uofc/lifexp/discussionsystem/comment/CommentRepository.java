package uofc.lifexp.discussionsystem.comment;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends MongoRepository<Comment,String> {
    List<Comment> findAllByPostId(String postId);
    void deleteAllByPostId(String postId);
}
