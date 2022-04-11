package uofc.lifexp.discussionsystem.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    private final PostRepository postRepository;
    @Autowired
    public PostService(PostRepository postRepository){
        this.postRepository = postRepository;
    }

    public void createPost(PostForm postForm){

        postRepository.save(new Post(postForm));
    }

    public List<Post> getPosts(String boardName){
        return postRepository.findAllByBoardName(boardName);
    }

    public boolean deletePost(String id){
        postRepository.deleteById(id);
        return true;
    }
}
