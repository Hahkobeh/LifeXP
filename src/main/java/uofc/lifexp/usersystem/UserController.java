package uofc.lifexp.usersystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import uofc.lifexp.usersystem.friend.FriendService;
import uofc.lifexp.usersystem.user.UserService;

@Controller
@RequestMapping(path = "api/user")
@CrossOrigin(origins = {"http://localhost:3000"})
public class UserController {
    private final UserService userService;
    private final FriendService friendService;
    @Autowired
    public UserController(UserService userService, FriendService friendService){
        this.friendService = friendService;
        this.userService = userService;
    }

}
