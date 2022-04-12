package uofc.lifexp.usersystem.friend;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FriendRepository extends MongoRepository<Friend,String> {
    void deleteByUsername1AndUsername2(String username1, String username2);
    Friend findByUsername1AndUsername2(String username1, String username2);
}
