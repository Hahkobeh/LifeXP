package uofc.lifexp.usersystem.friend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FriendService {
    private final FriendRepository friendRepository;

    @Autowired
    public FriendService(FriendRepository friendRepository){
        this.friendRepository = friendRepository;
    }

    public List<String> getFriends(String username){
        List<Friend> friends = friendRepository.findAll();
        List<String> friendList = new ArrayList<>();
        for(Friend friend:friends){
            if(friend.getUsername1().equals(username)){
                friendList.add(friend.getUsername2());
            }else{
                if(friend.getUsername2().equals(username)) {
                    friendList.add(friend.getUsername1());
                }
            }
        }
        return friendList;
    }

    public void addFriend(String username, String otherUsername){
        Friend friend = new Friend(username, otherUsername);
        friendRepository.save(friend);
    }

}
